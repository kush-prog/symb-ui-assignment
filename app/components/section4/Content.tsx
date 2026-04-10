import Image from "next/image";
import section4Data from "@/app/data/section4.json";
import styles from "@/app/styles/section4.module.css";

export default function Content() {
  const { icon, heading, description, ctaLink } = section4Data;

  return (
    <div className={styles.content}>
    
      <div className={styles.headingWrap}>
        <Image
          src={icon.src}
          alt={icon.alt}
          width={40}
          height={40}
          className={styles.icon}
        />

        <h2 className={styles.heading}>
          {heading.line1} <br />
          {heading.line2}
        </h2>
      </div>

      <p className={styles.description}>
        {description}
      </p>

      <a href={ctaLink.href} className={styles.ctaLink}>
        {ctaLink.text}
      </a>

    </div>
  );
}