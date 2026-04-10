import Image from "next/image";
import section4Data from "@/app/data/section4.json";
import styles from "@/app/styles/section4.module.css";

export default function ImageGrid() {
  const { image } = section4Data;

  return (
    <div className={styles.imageWrap}>
      <Image
        src={image.src}
        alt={image.alt}
        width={500}
        height={500}
        className={styles.collageImage}
      />
    </div>
  );
}