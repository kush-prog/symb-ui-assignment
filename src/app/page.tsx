import Header from "@/components/Header";
import Section1 from "@/components/hero/Hero";
import Section2 from "@/components/tools/Tools";
import Section3 from "@/components/section_3/Section3";
import Section4 from "@/components/section_4/Section4";
import Section5 from "@/components/stats/Stats";
import Section6 from "@/components/testimonials/testimonials";
import Section7 from "@/components/cta/Cta";
import Footer from "@/components/features/Footer";
import Navbar from "@/components/navbar/Navbar";
import styles from "@/app/pages.module.css"

export default function Home() {
  return (
    <main>
      <div className={styles.page}>
        <Navbar />
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Footer />
      </div>
    </main>
  );
}