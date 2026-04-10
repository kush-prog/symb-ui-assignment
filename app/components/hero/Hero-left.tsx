import Link from "next/link";
import Image from "next/image";
import heroData from "@/app/data/hero.json";
import styles from "@/app/styles/hero.module.css";

export default function HeroLeft() {
  const { heading, description, buttons, trustedByText, companyLogos } = heroData;

  return (
    <div className={styles.left}>

      <h1 className={styles.heading}>
        {heading.line1} <br />
        <span className={styles.highlight}>
          {heading.highlight}
          <span className={styles.highlightBar} />
        </span>
      </h1>

      <p className={styles.description}>
        {description}
      </p>

      <div className={styles.buttons}>
        <button className={styles.primaryBtn}>
          {buttons.primary}
        </button>

        <Link href="#" className={styles.demoLink}>
          <span className={styles.playIcon}>
            <svg viewBox="0 0 24 24" fill="currentColor" className={styles.playIconSvg}>
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          {buttons.secondary}
        </Link>
      </div>

      <div className={styles.trusted}>
        <div className={styles.trustedInner}>
          <p className={styles.trustedText}>
            {trustedByText}
          </p>

          <div className={styles.logoRow}>
            {companyLogos.map((logo, i) => (
              <Image
                key={i}
                src={logo.src}
                alt={logo.alt}
                width={0}
                height={0}
                sizes="100vw"
                className={styles.companyLogo}
              />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}