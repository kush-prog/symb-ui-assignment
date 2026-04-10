import Content from "./Content";
import Visual from "./Visual";
import styles from "@/app/styles/features.module.css";

export default function Features() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <Content />
        <Visual />
      </div>
    </section>
  );
}