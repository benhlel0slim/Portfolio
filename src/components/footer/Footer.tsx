import React from "react";
import Link from "next/link";
import { EMAIL } from "@/constant/mail";
import styles from "./footer.module.scss";
import EmailLink from "../email/emailLink";

function Footer() {
  return (
    <footer className={styles.container}>
      <Link aria-label="Go to email" className={styles.email} href={EMAIL}>
        <EmailLink />
      </Link>
      <p className={styles.text}>
        Coded with 💻 and ☕ by <b>Selim Ben Hlel</b>
        <br /> Check the{" "}
        <Link
          aria-label="Visit source code"
          href="https://github.com/benhlel0slim/Portfolio"
          target="_blank"
        >
          source code
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
