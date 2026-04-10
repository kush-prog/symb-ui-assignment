import ImageGrid from "./ImageGrid";
import Content from "./Content";
import styles from "@/app/styles/section4.module.css";

export default function Section4() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <ImageGrid />
        <Content />
      </div>
    </section>
  );
}