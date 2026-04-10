import section3Data from "@/app/data/section3.json";
import styles from "@/app/styles/section3.module.css";

export default function CourseCards() {
  const { courseCards } = section3Data;

  const tagClassMap: Record<string, string> = {
    purple: styles.tagPurple,
    blue: styles.tagBlue,
    green: styles.tagGreen,
  };

  return (
    <div className={styles.courseCards}>
      {courseCards.map((item, i) => (
        <div key={i} className={styles.courseCard}>
          <span className={`${styles.courseTag} ${tagClassMap[item.color] || ""}`}>
            {item.tag}
          </span>

          <p className={styles.courseText}>
            {item.text}
          </p>

          <button className={styles.courseBtn}>
            Take Lesson
          </button>
        </div>
      ))}
    </div>
  );
}