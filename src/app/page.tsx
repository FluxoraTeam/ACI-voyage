import About from "@/components/about/about";
import Commitments from "@/components/commitments/commitments";
import Contact from "@/components/contact/contact";
import Expertise from "@/components/expertise/expertise";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import Nav from "@/components/nav/nav";
import Services from "@/components/services/services";
import Gallery from "@/components/gallery/gallery";

export default function Home() {
  return (
    <div className="main overflow-hidden bg-[#f1e6d7]" data-scroll-container>
      <Nav />
      <Hero />
      <About />
      <Expertise />
      <hr className="mx-auto hidden w-4/5 border-black/10 lg:block" />
      <Commitments />
      <Services />
      <Gallery />
      <Contact />
      <div className="gradient__line__dark my-20 h-[1px] w-full"></div>
      <Footer />
    </div>
  );
}
