import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import Hero from "@/app/components/hero/Hero";
import Tools from "@/app/components/tools_section/Tools";
import Section3 from "@/app/components/section_3/section_3";
import Section4 from "@/app/components/section4/Section4";
import Stats from "@/app/components/stats/Stats";
import Testimonials from "./components/testimonials/Testimonials";
import Features from "./components/features/Features";
import Cta from "./components/cta/CTA";


export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Tools />
        <Section3 />
        <Section4 />
        <Stats />
        <Testimonials />
        <Features />
        <Cta />
      </main>

      <Footer />
    </>
  );
}