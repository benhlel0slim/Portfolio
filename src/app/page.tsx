import styles from "./page.module.css";
import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import Landing from "@/components/landing/Landing";
import NavBar from "@/components/navBar/Navbar";
import Projects from "@/components/projects/Projects";
import Techs from "@/components/techs/Techs";
import ReactGA from "react-ga";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    ReactGA.initialize("G-FKQLHFB3VJ");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <main className={styles.main}>
      <NavBar />
      <Landing />
      <About />
      <Projects />
      <Techs />
      <Footer />
    </main>
  );
}
