import Image from "next/image";
import section3Data from "@/app/data/section3.json";
import styles from "@/app/styles/section3.module.css";

export default function DecorativeIcons() {
  const { decorativeIcons } = section3Data;

  return (
    <Image
      src={decorativeIcons.src}
      alt={decorativeIcons.alt}
      width={140}
      height={582}
      className={styles.decorativeIcons}
      aria-hidden="true"
    />
  );
}
