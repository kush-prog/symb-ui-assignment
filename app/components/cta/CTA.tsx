import Content from "./Content";
import Background from "./Background";
import styles from "@/app/styles/cta.module.css";

export default function Cta() {
  return (
    <section className={styles.section}>

      <Background />

      <div className={styles.inner}>
        <Content />
      </div>

    </section>
  );
}