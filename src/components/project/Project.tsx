import { Project } from "@/types/project";
import React from "react";
import Tag from "../tag/Tag";
import Link from "next/link";
import Badge from "../badge/badge";
import styles from "./project.module.scss";
import ProjectImage from "../projectImage/ProjectImage";

function Project({ title, images, description, url, techs }: Project) {
  return (
    <div className={styles.container}>
      <div className={styles.projectImage}>
        {images.map((image) => (
          <ProjectImage {...image} key={image.src} />
        ))}
      </div>
      <div>
        <div className={styles.text}>
          <Tag type="self-closing">{title}</Tag>
          <p>{description}</p>
        </div>
        <div className={styles.links}>
          {" "}
          <Link href={url.source} target="_blank" className={styles.link}>
            Check Source
          </Link>
          <Link href={url.live} target="_blank" className={styles.link}>
            See Live
          </Link>
        </div>

        <div className={styles.techs}>
          {techs.map((tech) => (
            <Badge {...tech} key={tech.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
