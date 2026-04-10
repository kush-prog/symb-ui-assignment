import Image from "next/image";
import toolsData from "@/app/data/tools.json";
import styles from "@/app/styles/tools.module.css";

export default function BackgroundShapes() {
  const { backgroundImages } = toolsData;

  return (
    <>
      <Image
        src={backgroundImages.iconsLeft.src}
        alt={backgroundImages.iconsLeft.alt}
        width={150}
        height={150}
        className={styles.bgShapeLeft}
      />
      <Image
        src={backgroundImages.vectorLeft.src}
        alt={backgroundImages.vectorLeft.alt}
        width={400}
        height={400}
        className={styles.bgVectorLeft}
      />
      <Image
        src={backgroundImages.vectorRight.src}
        alt={backgroundImages.vectorRight.alt}
        width={320}
        height={320}
        className={styles.bgVectorRight}
      />
    </>
  );
}