import ctaData from "@/app/data/cta.json";
import styles from "@/app/styles/cta.module.css";

export default function Content() {
  const { heading, description, buttonText } = ctaData;

  return (
    <div className={styles.contentWrap}>

      <h2 className={styles.heading}>
        {heading}
      </h2>

      <p className={styles.description}>
        {description}
      </p>

      <button className={styles.ctaBtn}>
        {buttonText}
      </button>

    </div>
  );
}