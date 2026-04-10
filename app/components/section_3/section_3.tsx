import Content from "./Content";
import PreviewCard from "./PreviewCard";
import CourseCards from "./CourseCards";
import Background from "./Background";
import styles from "@/app/styles/section3.module.css";

export default function Section3() {
  return (
    <section className={styles.section}>

      <Background />

      <div className={styles.grid}>

        <Content />

        <div className={styles.visual}>
          <PreviewCard />
          <CourseCards />
        </div>
      </div>
    </section>
  );
}