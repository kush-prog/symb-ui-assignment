import Image from "next/image";
import FeatureCard from "./FeatureCard";
import featuresData from "@/app/data/features.json";
import styles from "@/app/styles/features.module.css";

export default function Visual() {
  const { visualImages } = featuresData;

  return (
    <div className={styles.visual}>

      <Image
        src={visualImages.blob.src}
        alt={visualImages.blob.alt}
        width={460}
        height={430}
        className={styles.blobImg}
      />

      <Image
        src={visualImages.icons.src}
        alt={visualImages.icons.alt}
        width={225}
        height={340}
        className={styles.iconsImg}
      />

      <Image
        src={visualImages.picture2.src}
        alt={visualImages.picture2.alt}
        width={190}
        height={160}
        className={styles.picture2Img}
      />

      <Image
        src={visualImages.picture.src}
        alt={visualImages.picture.alt}
        width={304}
        height={180}
        className={styles.pictureImg}
      />

      <Image
        src={visualImages.picture1.src}
        alt={visualImages.picture1.alt}
        width={230}
        height={180}
        className={styles.picture1Img}
      />

      <div className={styles.featureCardWrap}>
        <FeatureCard />
      </div>

      <Image
        src={visualImages.userThumb.src}
        alt={visualImages.userThumb.alt}
        width={80}
        height={80}
        className={styles.userThumbImg}
      />

    </div>
  );
}