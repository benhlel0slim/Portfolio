import { getDictionary } from "@/app/lib/dictionary";
import ProjectsContent from "./Projects";
import { Locale } from "../../../../i18n.config";

export default async function Projects({ lang }: { lang: Locale }) {
  const data = await getDictionary(lang);

  return data && <ProjectsContent data={data} lang={lang} />;
}
