import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Tools from "../components/tools/Tools";
import AppShowcase from "../components/appshowcase/AppShowcase";
import Students from "../components/students/Students";
import Stats from "../components/stats/Stats";
import Testimonials from "../components/testimonials/Testimonials";
import Features from "../components/features/Features";
import CTA from "../components/cta/CTA";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Tools />
      <AppShowcase />
      <Students />
      <Stats />
      <Testimonials />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}