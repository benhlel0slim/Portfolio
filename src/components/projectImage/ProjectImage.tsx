import { ProjectImage } from "@/types/project";
import React from "react";
import Image from "next/image";
import styles from "./projectImage.module.scss";

function ProjectImage({ alt, src }: ProjectImage) {
  return (
    <div>
      <Image
        className={styles.img}
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="400px"
        style={{ width: "200px", height: "auto" }} // optional
      />
    </div>
  );
}

export default ProjectImage;
