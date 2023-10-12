"use client";
import React, { useRef } from "react";
import Tag from "../tag/Tag";
import Arrow from "../arrow/Arrow";
import styles from "./projects.module.scss";
import { PROJECTS } from "@/constant/projects";
import Project from "../project/Project";
import { useIsVisible } from "@/hook/useIsVisible";

function Projects() {
  const ref = useRef<HTMLElement>(null);
  const { hasIntersected } = useIsVisible(ref);

  return (
    <article ref={ref} id="projects" className={styles.container}>
      <div className={styles.openingTag}>
        <Arrow
          className={`${styles.arrow} ${hasIntersected ? styles.animate : ""}`}
        />
        <Tag type="opening">Projects</Tag>
      </div>

      <div className={`${styles.text} ${hasIntersected ? styles.animate : ""}`}>
        <span className={styles.vl} />
        {PROJECTS.map((project) => (
          <Project {...project} key={project.title} />
        ))}
      </div>

      <div
        className={`${styles.closingTag} ${
          hasIntersected ? styles.animate : ""
        }`}
      >
        <Tag type="closing">Projects</Tag>
      </div>
    </article>
  );
}

export default Projects;
