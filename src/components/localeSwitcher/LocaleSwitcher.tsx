"use client";
import React from "react";
import styles from "./localeSwitcher.module.scss";
import Link from "next/link";
import { Locale } from "../../../i18n.config";

export default function LocaleSwitcher({ lang }: { lang: Locale }) {
  return (
    <span className={styles.lang}>
      <Link className={lang === "fr" ? undefined : styles.inactive} href="/fr">
        FR
      </Link>
      /
      <Link className={lang === "en" ? undefined : styles.inactive} href="/en">
        EN
      </Link>
    </span>
  );
}
