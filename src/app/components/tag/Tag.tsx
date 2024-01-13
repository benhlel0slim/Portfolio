import React, { ReactNode } from "react";
import styles from "./tag.module.scss";

function Tag({
  children,
  type = "self-closing",
}: {
  children: ReactNode;
  type?: "opening" | "closing" | "self-closing";
}) {
  return (
    <div className={styles.tag}>
      <span>{type === "closing" ? "</ " : "<"}</span>
      {children}
      <span>{type === "self-closing" ? " />" : ">"}</span>
    </div>
  );
}

export default Tag;
