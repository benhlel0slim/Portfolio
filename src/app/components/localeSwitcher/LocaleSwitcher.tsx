"use client";
import React from "react";
import styles from "./localeSwitcher.module.scss";
import Link from "next/link";
import { Locale } from "../../../../i18n.config";

export default function LocaleSwitcher({ lang }: { lang: Locale }) {
  return (
    <span className={styles.lang}>
      <Link
        className={lang === Locale.French ? styles.disabled : styles.inactive}
        href={`/${Locale.French}`}
      >
        FR
      </Link>
      /
      <Link
        className={lang === Locale.English ? styles.disabled : styles.inactive}
        href={`/${Locale.English}`}
      >
        EN
      </Link>
    </span>
  );
}
