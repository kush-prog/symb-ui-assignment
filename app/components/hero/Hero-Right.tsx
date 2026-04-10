import Image from "next/image";
import heroData from "@/app/data/hero.json";
import styles from "@/app/styles/hero.module.css";

export default function HeroRight() {
  const { heroImage } = heroData;

  return (
    <div className={styles.right}>
      <Image
        src={heroImage.src}
        alt={heroImage.alt}
        width={600}
        height={500}
        className={styles.heroImage}
        priority
      />
    </div>
  );
}