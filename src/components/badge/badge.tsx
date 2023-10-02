import { Project } from "@/types/project";
import { Unpacked } from "@/types/utils";
import React, { CSSProperties } from "react";
import styles from "./bagde.module.scss";

function Badge({ background, color, name }: Unpacked<Project["techs"]>) {
  return (
    <div
      className={styles.badge}
      style={
        {
          "--badge-bg-color": background,
          "--badge-color": color,
        } as CSSProperties
      }
    >
      {name}
    </div>
  );
}

export default Badge;
