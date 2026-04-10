import Image from "next/image";
import ctaData from "@/app/data/cta.json";
import styles from "@/app/styles/cta.module.css";

export default function Background() {
  const { backgroundImages } = ctaData;

  return (
    <>
      <Image
        src={backgroundImages.left.src}
        alt={backgroundImages.left.alt}
        width={400}
        height={400}
        className={styles.bgLeft}
      />

      <Image
        src={backgroundImages.right.src}
        alt={backgroundImages.right.alt}
        width={400}
        height={400}
        className={styles.bgRight}
      />
    </>
  );
}