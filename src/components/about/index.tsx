import { getDictionary } from "@/lib/dictionary";
import AboutContent from "./About";
import { Locale } from "../../../i18n.config";

export default async function About({ lang }: { lang: Locale }) {
  const data = await getDictionary(lang);

  return data && <AboutContent data={data} />;
}
