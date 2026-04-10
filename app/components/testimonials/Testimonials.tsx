import Header from "./Header";
import Slider from "./Slider";
import styles from "@/app/styles/testimonials.module.css";

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Header />
        <Slider />
      </div>
    </section>
  );
}