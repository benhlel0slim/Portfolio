import { Techs } from "@/types/techs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./tech.module.scss";

function Tech({ name, src, url }: Techs) {
  return (
    <div className={styles.container}>
      <Link href={url} target="_blank">
        <Image src={src} alt={`logo of ${name}`} width={100} height={100} />
        <p>{name}</p>
      </Link>
    </div>
  );
}

export default Tech;
