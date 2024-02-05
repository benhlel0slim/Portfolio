import { PROJECTS } from "@/app/constant/projects";
import { Locale } from "../../../../i18n.config";
import Project from "../project/Project";
import { Project as Props } from "@/app/types/project";

const ProjectTranslation = ({ lang }: { lang: Locale }) =>
  PROJECTS[lang].map((project: Props["en"][number] | Props["fr"][number]) => (
    <Project {...project} key={project.title} />
  ));

export default ProjectTranslation;
