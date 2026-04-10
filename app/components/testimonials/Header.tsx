import Image from "next/image";
import testimonialsData from "@/app/data/testimonials.json";
import styles from "@/app/styles/testimonials.module.css";

export default function Header() {
  const { heading, navigationIcons } = testimonialsData;

  return (
    <div className={styles.header}>

      <h2 className={styles.heading}>
        {heading}
      </h2>

      <div className={styles.navButtons}>
        <button className={styles.navBtn}>
          <Image src={navigationIcons.prev} alt="previous" width={16} height={16} className={styles.navBtnIcon} />
        </button>

        <button className={styles.navBtn}>
          <Image src={navigationIcons.next} alt="next" width={16} height={16} className={styles.navBtnIcon} />
        </button>
      </div>

    </div>
  );
}