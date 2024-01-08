import { PROJECTS } from "@/constant/projects";
import { Locale } from "../../../i18n.config";
import Project from "../project/Project";

const ProjectTranslation = ({ lang }: { lang: Locale }) => {
  return (
    <div>
      {lang === "en"
        ? PROJECTS.en.map((project) => (
            <Project {...project} key={project.title} />
          ))
        : PROJECTS.fr.map((project) => (
            <Project {...project} key={project.title} />
          ))}
    </div>
  );
};

export default ProjectTranslation;
