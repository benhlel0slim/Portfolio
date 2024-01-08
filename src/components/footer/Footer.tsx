import React from "react";
import Link from "next/link";
import { EMAIL } from "@/constant/mail";
import styles from "./footer.module.scss";
import EmailLink from "../email/emailLink";
import { DictionaryProps } from "@/types/dictionary";

function Footer({ data }: { data: DictionaryProps }) {
  return (
    <footer className={styles.container}>
      <Link aria-label="Go to email" className={styles.email} href={EMAIL}>
        <EmailLink />
      </Link>
      <p className={styles.text}>
        {data.footer.description}
        <Link
          aria-label="Visit source code"
          href="https://github.com/benhlel0slim/Portfolio"
          target="_blank"
        >
          {data.footer.link}
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
