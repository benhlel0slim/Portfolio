import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import Landing from "@/components/homePage/Landing";
import NavBar from "@/components/navBar/Navbar";
import Projects from "@/components/projects/Projects";
import Techs from "@/components/techs/Techs";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Landing />
      <About />
      <Projects />
      <Techs />
      <Footer />
    </main>
  );
}
