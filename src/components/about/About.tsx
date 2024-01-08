"use client";
import React, { useRef } from "react";
import Tag from "../tag/Tag";
import Arrow from "../arrow/Arrow";
import styles from "./about.module.scss";
import { useIsVisible } from "@/hook/useIsVisible";
import { DictionaryProps } from "@/types/dictionary";

function About({ data }: { data: DictionaryProps }) {
  const ref = useRef<HTMLElement>(null);
  const { hasIntersected } = useIsVisible(ref);

  return (
    <article ref={ref} id="about" className={styles.container}>
      <div className={styles.openingTag}>
        <Arrow
          className={`${styles.arrow} ${hasIntersected ? styles.animate : ""}`}
        />
        <Tag type="opening">{data.about.tag}</Tag>
      </div>
      <div className={`${styles.text} ${hasIntersected ? styles.animate : ""}`}>
        <span className={styles.vl} />
        <p>{data.about.description}</p>
      </div>
      <span className={styles.invisible} />
      <div
        className={`${styles.closingTag} ${
          hasIntersected ? styles.animate : ""
        }`}
      >
        <Tag type="closing">{data.about.tag}</Tag>
      </div>
    </article>
  );
}

export default About;
