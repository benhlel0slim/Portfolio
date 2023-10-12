import React from "react";
import styles from "./landing.module.scss";
import Image from "next/image";
import Link from "next/link";
import { EMAIL } from "@/constant/mail";
import EmailLink from "../email/emailLink";
import Arrow from "../arrow/Arrow";
import VerticalLine from "../socialMedia/VerticalLine";
import Github from "../socialMedia/Github";
import LinkedIn from "../socialMedia/LinkedIn";

function Landing() {
  return (
    <article className={styles.container}>
      <section className={styles.inner}>
        <div className={styles.bio}>
          <h1>Selim Ben Hlel.</h1>
          <h2>I create things on the web.</h2>
          <p>
            Hello ! I am a JavaScript developer specializing in user interfaces
            <br />
            and front-end based in Tunisia 📍.
            <br /> I build web apps 🌐 with the user in mind.
          </p>
        </div>
        <div className={styles.img}>
          <Image
            src={"/assets/profilePicture.svg"}
            alt="selim ben hlel picture portrait"
            width={379}
            height={366}
          />
        </div>
      </section>
      <Link className={styles.email} href={EMAIL}>
        <EmailLink />
      </Link>
      <Arrow className={styles.arrow} />
      <div className={styles.socialMedia}>
        <VerticalLine className={styles.verticalLine} />
        <Link href={"https://github.com/benhlel0slim"}>
          <Github className={`${styles.github} ${styles.socials}`} />
        </Link>
        <Link href={"https://www.linkedin.com/in/selim-ben-hlel-4ab444254/"}>
          <LinkedIn className={`${styles.linkedIn} ${styles.socials}`} />
        </Link>
      </div>
    </article>
  );
}

export default Landing;