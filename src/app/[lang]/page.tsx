import styles from "./page.module.css";
import About from "@/components/about";
import Footer from "@/components/footer";
import GoogleTracking from "@/components/googleTracking/GoogleTracking";
import Landing from "@/components/landing";
import NavBar from "@/components/navBar";
import Projects from "@/components/projects";
import Techs from "@/components/techs/Techs";
import { Locale } from "../../../i18n.config";

export default function Home({ params }: { params: { lang: Locale } }) {
  return (
    <main className={styles.main}>
      <NavBar lang={params.lang} />
      <Landing lang={params.lang} />
      <About lang={params.lang} />
      <Projects lang={params.lang} />
      <Techs />
      <Footer lang={params.lang} />
      <GoogleTracking />
    </main>
  );
}
