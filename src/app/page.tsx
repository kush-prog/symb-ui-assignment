import Hero from "@/components/hero/Hero";
import Tools from "@/components/tools/Tools";
import Section3 from "@/components/section_3/Section3";
import Section4 from "@/components/section_4/Section4";
import Stat from "@/components/stats/Stat";
import Testimonial from "@/components/testimonials/Testimonial";
import Features from "@/components/features/Features";
import Cta from "@/components/cta/Cta";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import styles from "@/styles/pages.module.css"

export default function Home() {
  return (
    <main>
      <div className={styles.page}>
        <Navbar />
        <Hero />
        <Tools />
        <Section3 />
        <Section4 />
        <Stat />
        <Testimonial />
        <Features />
        <Cta />
        <Footer />
      </div>
    </main>
  );
}