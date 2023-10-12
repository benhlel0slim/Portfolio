import { ProjectImage as Props } from "@/types/project";
import React from "react";
import NextImage from "next/image";
import styles from "./projectImage.module.scss";

function Image({ alt, src }: Props) {
  return (
    <NextImage
      className={styles.img}
      src={src}
      alt={alt}
      width={0}
      height={0}
      sizes="400px"
      style={{ width: "200px", height: "auto" }} // optional
    />
  );
}

export default Image;
