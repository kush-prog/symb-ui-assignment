import toolsData from "@/app/data/tools.json";
import styles from "@/app/styles/tools.module.css";

export default function ToolsHeader() {
  const { heading, description } = toolsData;

  return (
    <div className={styles.header}>
      <h2 className={styles.heading}>
        {heading.prefix}{" "}
        <span className={styles.headingHighlight}>
          {heading.highlight}
          <span className={styles.headingUnderline}></span>
        </span>{" "}
        {heading.suffix}
      </h2>

      <p className={styles.headerDesc}>
        {description}
      </p>
    </div>
  );
}