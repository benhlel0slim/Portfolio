import Image from "next/image";
import navIcon from "../../assets/navIcon.svg";
import Link from "next/link";
import styles from "./navBar.module.scss";
import Tag from "../tag/Tag";

function NavBar() {
  return (
    <header className={styles.container}>
      <h1>
        <Link href="#home">
          <Image className={styles.logo} src={navIcon} alt="logo" />
        </Link>
      </h1>
      <nav>
        <ul className={styles.links}>
          <li>
            <Link href="#about">
              <Tag type="self-closing">About </Tag>
            </Link>
          </li>
          <li>
            <Link href="#projects">
              <Tag type="self-closing">Projects </Tag>
            </Link>
          </li>
          <li>
            <Link href="#tech">
              <Tag type="self-closing">Tech</Tag>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
