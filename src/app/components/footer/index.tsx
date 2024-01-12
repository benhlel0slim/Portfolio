import { getDictionary } from "@/app/lib/dictionary";
import FooterContent from "./Footer";
import { Locale } from "../../../../i18n.config";

export default async function Footer({ lang }: { lang: Locale }) {
  const data = await getDictionary(lang);

  return data && <FooterContent data={data} />;
}
