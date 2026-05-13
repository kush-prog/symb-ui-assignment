import Header from "@/components/Header";
import Hero from "@/components/hero/Hero";
import Tools from "@/components/tools/Tools";
import Community from "@/components/section_3/Section3";
import Stats from "@/components/section_4/Section4";
import Testimonials from "@/components/stats/Stats";
import Features from "@/components/testimonials/testimonials";
import Cta from "@/components/cta/Cta";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import styles from "@/styles/pages.module.css"

export default function Home() {
  return (
    <main>
      <div className={styles.page}>
        <Navbar />
        <Header />
        <Hero />
        <Tools />
        <Community />
        <Stats />
        <Testimonials />
        <Features />
        <Cta />
        <Footer />
      </div>
    </main>
  );
}