import section3Data from "@/app/data/section3.json";
import styles from "@/app/styles/section3.module.css";

export default function Content() {
  const { heading, checklist, ctaLink } = section3Data;

  return (
    <div className={styles.content}>

      <h2 className={styles.heading}>
        {heading.prefix}{" "}
        <span className={styles.highlight}>
          {heading.highlight}
          <span className={styles.highlightBar} />
        </span>{" "}
        {heading.suffix} <br />
        {heading.line2}
      </h2>

      <ul className={styles.checklist}>
        {checklist.map((item, i) => (
          <li key={i} className={styles.checklistItem}>✔ {item}</li>
        ))}
      </ul>

      <a href={ctaLink.href} className={styles.ctaLink}>
        {ctaLink.text}
      </a>
    </div>
  );
}