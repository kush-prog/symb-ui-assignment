import Image from "next/image";
import toolsData from "@/app/data/tools.json";
import styles from "@/app/styles/tools.module.css";

export default function Preview() {
  const { previewImage } = toolsData;

  return (
    <div className={styles.preview}>
      <div className={styles.previewCard}>
        <Image
          src={previewImage.src}
          alt={previewImage.alt}
          width={1200}
          height={700}
          className={styles.previewImage}
        />
      </div>
    </div>
  );
}