import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import Landing from "@/components/homePage/Landing";
import NavBar from "@/components/navBar/Navbar";
import Project from "@/components/projects/Project";
import Tech from "@/components/tech/Tech";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Landing />
      <About />
      <Project />
      <Tech />
      <Footer />
    </main>
  );
}
