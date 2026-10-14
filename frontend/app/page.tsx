import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import SelectedWork from "@/app/components/SelectedWork";
import Process from "@/app/components/Process";
import WhyNepora from "@/app/components/WhyNepora";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import ChatBot from "@/app/components/ChatBot";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Services />
        <SelectedWork />
        <Process />
        <WhyNepora />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </>
  );
}
