"use client";
import React, { useRef } from "react";
import Tag from "../tag/Tag";
import Arrow from "../arrow/Arrow";
import styles from "./projects.module.scss";
import { useIsVisible } from "@/app/hook/useIsVisible";
import { DictionaryProps } from "@/app/types/dictionary";
import ProjectTranslation from "../projectTranslation/ProjectTranslation";
import { Locale } from "../../../../i18n.config";

function Projects({ data, lang }: { data: DictionaryProps; lang: Locale }) {
  const ref = useRef<HTMLElement>(null);
  const { hasIntersected } = useIsVisible(ref);

  return (
    <article ref={ref} id="projects" className={styles.container}>
      <div className={styles.openingTag}>
        <Arrow
          className={`${styles.arrow} ${hasIntersected ? styles.animate : ""}`}
        />
        <Tag type="opening">{data.projects.tag}</Tag>
      </div>

      <div className={`${styles.text} ${hasIntersected ? styles.animate : ""}`}>
        <span className={styles.vl} />
        <ProjectTranslation lang={lang} />
      </div>
      <span className={styles.invisible} />

      <div
        className={`${styles.closingTag} ${
          hasIntersected ? styles.animate : ""
        }`}
      >
        <Tag type="closing">{data.projects.tag}</Tag>
      </div>
    </article>
  );
}

export default Projects;
