import Image from "next/image";
import navIcon from "../../../public/assets/navIcon.svg";
import Link from "next/link";
import styles from "./navBar.module.scss";
import Tag from "../tag/Tag";
import LocaleSwitcher from "../localeSwitcher/LocaleSwitcher";
import { DictionaryProps } from "@/types/dictionary";
import { Locale } from "../../../i18n.config";

function NavBar({ data, lang }: { data: DictionaryProps; lang: Locale }) {
  return (
    <header className={styles.container}>
      <h1>
        <Link href="/en">
          <Image className={styles.logo} src={navIcon} alt="logo" />
        </Link>
      </h1>
      <nav>
        <ul className={styles.links}>
          <li>
            <Link href="#about">
              <Tag type="self-closing">{data.navbar.about} </Tag>
            </Link>
          </li>
          <li>
            <Link href="#projects">
              <Tag type="self-closing">{data.navbar.project} </Tag>
            </Link>
          </li>
          <li>
            <Link href="#tech">
              <Tag type="self-closing">{data.navbar.tech}</Tag>
            </Link>
          </li>
          <li>
            <LocaleSwitcher lang={lang} />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
