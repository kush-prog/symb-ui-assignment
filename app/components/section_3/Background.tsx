import Image from "next/image";
import section3Data from "@/app/data/section3.json";
import styles from "@/app/styles/section3.module.css";

export default function Background() {
  const { backgroundBlob } = section3Data;

  return (
    <Image
      src={backgroundBlob.src}
      alt={backgroundBlob.alt}
      width={320}
      height={320}
      className={styles.bgBlob}
    />
  );
}