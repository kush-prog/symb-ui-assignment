import Image from "next/image";
import styles from "@/app/styles/stats.module.css";

interface Props {
  icon: string;
  value: string;
  label: string;
}

export default function StatItem({ icon, value, label }: Props) {
  return (
    <div className={styles.item}>
      <Image
        src={icon}
        alt="icon"
        width={40}
        height={40}
        className={styles.itemIcon}
      />

      <h3 className={styles.itemValue}>
        {value}
      </h3>

      <p className={styles.itemLabel}>
        {label}
      </p>
    </div>
  );
}