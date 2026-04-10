import featuresData from "@/app/data/features.json";
import styles from "@/app/styles/features.module.css";

export default function FeatureCard() {
  const { featureCard } = featuresData;

  return (
    <div className={styles.featureCard}>

      <span className={styles.featureTag}>
        {featureCard.tag}
      </span>

      <h4 className={styles.featureTitle}>
        {featureCard.title}
      </h4>

      <p className={styles.featureDesc}>
        {featureCard.description}
      </p>

      <button className={styles.featureBtn}>
        {featureCard.buttonText}
      </button>
    </div>
  );
}