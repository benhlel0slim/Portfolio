import styles from "./page.module.css";
import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import GoogleTracking from "@/components/googleTracking/GoogleTracking";
import Landing from "@/components/landing/Landing";
import NavBar from "@/components/navBar/Navbar";
import Projects from "@/components/projects/Projects";
import Techs from "@/components/techs/Techs";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      <Landing />
      <About />
      <Projects />
      <Techs />
      <Footer />
      <GoogleTracking />
    </main>
  );
}
