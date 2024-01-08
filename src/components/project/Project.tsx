import { Project as Props } from "@/types/project";
import React from "react";
import Tag from "../tag/Tag";
import Link from "next/link";
import Badge from "../badge/badge";
import styles from "./project.module.scss";
import Images from "../images/Images";

function Project({
  title,
  images,
  description,
  url,
  techs,
  links,
}: Props["en"][number] | Props["fr"][number]) {
  return (
    <section className={styles.container}>
      <div className={styles.projectImage}>
        <Images images={images} />
      </div>
      <div className={styles.details}>
        <div className={styles.text}>
          <Tag type="self-closing">{title}</Tag>
          <p>{description}</p>
        </div>
        <div className={styles.links}>
          <Link
            aria-label="Read more about code source"
            href={url.source}
            target="_blank"
            className={styles.link}
          >
            {links.source}
          </Link>
          <Link
            aria-label="Open the app in browser"
            href={url.live}
            target="_blank"
            className={styles.link}
          >
            {links.live}
          </Link>
        </div>

        <div className={styles.techs}>
          {techs.map((tech) => (
            <Badge {...tech} key={tech.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
