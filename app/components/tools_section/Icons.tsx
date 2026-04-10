import Image from "next/image";
import toolsData from "@/app/data/tools.json";
import styles from "@/app/styles/tools.module.css";

export default function ToolsIcons() {
  const { icons } = toolsData;

  return (
    <div className={styles.iconsRow}>
      {icons.map((icon, index) => (
        <div key={index} className={styles.iconBox}>
          <Image src={icon} alt="" width={24} height={24} className={styles.iconImg} />
        </div>
      ))}
    </div>
  );
}