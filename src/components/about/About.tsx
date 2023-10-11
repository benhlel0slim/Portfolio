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
          At 32 years old, I&apos;ve embarked on a dynamic journey in the world
          of front-end development, transitioning from my background as an
          architect to crafting immersive digital experiences. While my initial
          career was rooted in the creation of physical spaces 🏗️, I soon
          discovered my deep fascination with the ever-evolving digital
          landscape 💻. The limitless potential for creativity and
          problem-solving in web development, particularly with JavaScript, drew
          me in, and I made the exciting shift to become a front-end developer.
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
