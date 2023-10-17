import { Techs } from "@/types/techs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./tech.module.scss";

function Tech({ name, src, url }: Techs) {
  return (
    <section className={styles.container}>
      <Link aria-label={`Visit ${name} page`} href={url} target="_blank">
        <Image
          className={styles.tech}
          src={src}
          alt={`logo of ${name}`}
          width={0}
          height={0}
          sizes="150px"
        />
        <p>{name}</p>
      </Link>
    </section>
  );
}

export default Tech;
