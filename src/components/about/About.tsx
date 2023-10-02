"use client";
import React, { useRef } from "react";
import Tag from "../tag/Tag";
import Arrow from "../arrow/Arrow";
import styles from "./about.module.scss";
import { useIsVisible } from "@/hook/useIsVisible";

function About() {
  const ref = useRef<HTMLElement>(null);
  const { hasIntersected } = useIsVisible(ref);
  return (
    <article ref={ref} id="about" className={styles.container}>
      <div className={styles.openingTag}>
        <Arrow
          className={`${styles.arrow} ${hasIntersected ? styles.animate : ""}`}
        />
        <Tag type="opening">About</Tag>
      </div>
      <div className={`${styles.text} ${hasIntersected ? styles.animate : ""}`}>
        <span className={styles.vl} />
        <p>
          I am 33 years old Tunisian software developer. I have a diploma in
          architecture engineering, but I decided to switch to front-end
          development instead. Taking from my architecture background, I apply
          the same centered design approach to build websites. is simply dummy
          text of the printing and typesetting industry. Software like Aldus
          PageMaker including versions of Lorem Ipsum. It was popularised in the
          1960s with the release of Letraset sheets containing Lorem Ipsum
          passages.
        </p>
      </div>
      <div
        className={`${styles.closingTag} ${
          hasIntersected ? styles.animate : ""
        }`}
      >
        <Tag type="closing">About</Tag>
      </div>
    </article>
  );
}

export default About;
