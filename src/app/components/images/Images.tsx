import React, { useRef } from "react";
import Image from "../projectImage/ProjectImage";
import { Project } from "@/app/types/project";
import styles from "./images.module.scss";
import { Unpacked } from "@/app/types/utils";

function Images({
  images,
}: {
  images: Unpacked<Project["en"]>["images"] | Unpacked<Project["fr"]>["images"];
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: -1 | 1) => {
    if (ref.current) {
      const scroll = direction * ref.current.clientWidth;
      ref.current.scrollTo({
        left: scroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={styles.underlay}>
      <div className={styles.scrollable} ref={ref}>
        {images.map((image) => (
          // eslint-disable-next-line jsx-a11y/alt-text
          <Image {...image} key={image.src} />
        ))}
      </div>
      <div className={styles.navigation}>
        <button
          id="scroll-button-left"
          aria-label="scroll left"
          onClick={() => handleScroll(-1)}
        />
        <button
          id="scroll-button-right"
          aria-label="scroll right"
          onClick={() => handleScroll(1)}
        />
      </div>
    </section>
  );
}

export default Images;
