import styles from "./page.module.css";
import About from "@/app/components/about";
import Footer from "@/app/components/footer";
import GoogleTracking from "@/app/components/googleTracking/GoogleTracking";
import Landing from "@/app/components/landing";
import NavBar from "@/app/components/navBar";
import Projects from "@/app/components/projects";
import Techs from "@/app/components/techs/Techs";
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
