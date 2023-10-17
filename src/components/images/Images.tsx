import React, { useRef } from "react";
import Image from "../projectImage/ProjectImage";
import { Project } from "@/types/project";
import styles from "./images.module.scss";

function Images({ images }: { images: Project["images"] }) {
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
        <button id="scrollLeft" onClick={() => handleScroll(-1)} />
        <button id="scrollRight" onClick={() => handleScroll(1)} />
      </div>
    </section>
  );
}

export default Images;
