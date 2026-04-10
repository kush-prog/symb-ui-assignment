import Image from "next/image";
import featuresData from "@/app/data/features.json";
import styles from "@/app/styles/features.module.css";

export default function Content() {
  const { heading, highlightUnderline, description, ctaLink } = featuresData;

  return (
    <div className={styles.content}>

      <h2 className={styles.heading}>
        {heading.prefix}{" "}
        
        <span className={styles.headingHighlight}>
          {heading.highlight}

          <Image
            src={highlightUnderline}
            alt=""
            width={140}
            height={15}
            className={styles.underlineImage}
          />
        </span>
      </h2>

      <p className={styles.description}>
        {description}
      </p>

      <a href={ctaLink.href} className={styles.ctaLink}>
        {ctaLink.text}
      </a>

    </div>
  );
}