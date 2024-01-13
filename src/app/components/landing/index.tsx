import { getDictionary } from "@/app/lib/dictionary";
import LandingContent from "./Landing";
import { Locale } from "../../../../i18n.config";

export default async function Landing({ lang }: { lang: Locale }) {
  const data = await getDictionary(lang);

  return data && <LandingContent data={data} />;
}
