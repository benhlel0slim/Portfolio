import React from "react";
import Link from "next/link";
import { EMAIL } from "@/constant/mail";
import styles from "./footer.module.scss";
import EmailLink from "../email/emailLink";

function Footer() {
  return (
    <footer className={styles.container}>
      <Link className={styles.email} href={EMAIL}>
        <EmailLink />
      </Link>
      <p className={styles.text}>
        Coded with 💻 and ☕ by <b>Selim Ben Hlel</b>
        <br /> Click
        <Link href="https://github.com/benhlel0slim/Portfolio"> here </Link>
        to check the source
      </p>
    </footer>
  );
}

export default Footer;
