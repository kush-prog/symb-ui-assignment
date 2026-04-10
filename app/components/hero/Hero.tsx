import styles from "@/app/styles/hero.module.css";
import HeroLeft from "./Hero-left";
import HeroRight from "./Hero-Right";

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <HeroLeft />
        <HeroRight />
      </div>
    </section>
  );
}