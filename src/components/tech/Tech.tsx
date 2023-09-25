import React from "react";
import Tag from "../tag/Tag";
import Arrow from "../arrow/Arrow";
import styles from "./tech.module.scss";
import ReactIcon from "../techIcons/React";
import JavaScript from "../techIcons/JavaScript";
import TypeScript from "../techIcons/TypeScript";
import Css from "../techIcons/Css";
import Recoil from "../techIcons/Recoil";
import MaterialUi from "../techIcons/MaterialUi";
import Cypress from "../techIcons/Cypress";
import ReactQuery from "../techIcons/ReactQuery";
import Eslint from "../techIcons/Eslint";
import VsCode from "../techIcons/VsCode";
import Figma from "../techIcons/Figma";
import Vercel from "../techIcons/Vercel";

function Tech() {
  return (
    <article id="about" className={styles.container}>
      <div className={styles.openingTag}>
        <Arrow className={styles.arrow} />
        <Tag type="opening">Tech</Tag>
      </div>
      <div className={styles.text}>
        <span className={styles.vl}></span>
        <div className={styles.techIcons}>
          <ReactIcon />
          <JavaScript />
          <TypeScript />
          <Css />
          <Recoil />
          <MaterialUi />
          <Cypress />
          <ReactQuery />
          <Vercel />
          <Eslint />
          <VsCode />
          <Figma />
        </div>
      </div>
      <div className={styles.closingTag}>
        <Tag type="closing">Tech</Tag>
      </div>
    </article>
  );
}

export default Tech;
