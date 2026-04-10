import toolsData from "@/app/data/tools.json";
import styles from "@/app/styles/tools.module.css";
import Image from "next/image";

export default function ToolsHeader() {
  const { heading, description } = toolsData;

  return (
    <div className={styles.header}>
      <h2 className={styles.heading}>
        {heading.prefix}{" "}
        <span className={styles.headingHighlight}>
          {heading.highlight}
          <Image
            src={heading.underline}
            alt=""
            width={100}
            height={10}
            className={styles.headingUnderline}  
          />
        </span>{" "}
        {heading.suffix}
      </h2>

      <p className={styles.headerDesc}>
        {description}
      </p>
    </div>
  );
}