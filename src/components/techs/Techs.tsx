import React from "react";
import Tag from "../tag/Tag";
import Arrow from "../arrow/Arrow";
import styles from "./techs.module.scss";
import Tech from "../tech/Tech";
import { TECHS } from "@/constant/techIcons";

function Techs() {
  return (
    <article id="tech" className={styles.container}>
      <div className={styles.openingTag}>
        <Arrow className={styles.arrow} />
        <Tag type="opening">Tech</Tag>
      </div>
      <div className={styles.text}>
        <span className={styles.vl}></span>
        <div className={styles.techIcons}>
          {TECHS.map(({ name, src, url }) => (
            <Tech key={name} name={name} src={src} url={url} />
          ))}
        </div>
      </div>
      <div className={styles.closingTag}>
        <Tag type="closing">Tech</Tag>
      </div>
    </article>
  );
}

export default Techs;
