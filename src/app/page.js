import Navbar from "@/components/sections/Navbar";
import Intro from "@/components/sections/Intro";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
      <Intro />
      <About />
      <Work />
      <Portfolio />
      <Contact />
      </main>
      <Footer />
    </>
  );
}
