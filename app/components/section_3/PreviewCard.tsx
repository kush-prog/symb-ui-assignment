import Image from "next/image";
import section3Data from "@/app/data/section3.json";
import styles from "@/app/styles/section3.module.css";

export default function PreviewCard() {
  const { previewImage } = section3Data;

  return (
    <div style={{ position: "relative", zIndex: 10, marginBottom: "24px" }}>
      <Image
        src={previewImage.src}
        alt={previewImage.alt}
        width={600}
        height={400}
        className={styles.previewImage}
      />
    </div>
  );
}