import { getDictionary } from "@/lib/dictionary";
import NavbarContent from "./Navbar";
import { Locale } from "../../../i18n.config";

export default async function Navbar({ lang }: { lang: Locale }) {
  const data = await getDictionary(lang);

  return data && <NavbarContent data={data} lang={lang} />;
}
