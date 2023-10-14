"use client";
import React, { useRef } from "react";
import Tag from "../tag/Tag";
import Arrow from "../arrow/Arrow";
import styles from "./techs.module.scss";
import Tech from "../tech/Tech";
import { TECHS } from "@/constant/techIcons";
import { useIsVisible } from "@/hook/useIsVisible";

function Techs() {
  const ref = useRef<HTMLElement>(null);
  const { hasIntersected } = useIsVisible(ref);
  return (
    <article id="tech" ref={ref} className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.openingTag}>
          <Arrow
            className={`${styles.arrow} ${
              hasIntersected ? styles.animate : ""
            }`}
          />
          <Tag type="opening">Tech</Tag>
        </div>

        <div
          className={`${styles.text} ${hasIntersected ? styles.animate : ""}`}
        >
          <span className={styles.vl} />
          <div className={styles.techIcons}>
            {TECHS.map(({ name, src, url }) => (
              <Tech key={name} name={name} src={src} url={url} />
            ))}
          </div>
        </div>

        <div
          className={`${styles.closingTag} ${
            hasIntersected ? styles.animate : ""
          }`}
        >
          <Tag type="closing">Tech</Tag>
        </div>
      </div>
    </article>
  );
}

export default Techs;
