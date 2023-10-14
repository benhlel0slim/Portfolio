import { Techs } from "@/types/techs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./tech.module.scss";

function Tech({ name, src, url }: Techs) {
  return (
    <section className={styles.container}>
      <Link href={url} target="_blank">
        <Image src={src} alt={`logo of ${name}`} width={80} height={80} />
        <p>{name}</p>
      </Link>
    </section>
  );
}

export default Tech;
