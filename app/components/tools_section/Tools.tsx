import ToolsHeader from "./Header";
import ToolsPreview from "./Preview";
import ToolsIcons from "./Icons";
import BackgroundShapes from "./BackgroundShapes";
import styles from "@/app/styles/tools.module.css";
import toolsData from "@/app/data/tools.json";
import Image from "next/image";

export default function ToolsSection() {
  return (
    <section className={styles.section}>

      <BackgroundShapes />

      <div className={styles.inner}>
        <ToolsHeader />
        <ToolsPreview />
        
        <div className={styles.lineswrap}>
          <Image src={toolsData.lines}
          alt=""
          width={700}
          height={100}
          className={styles.lines}
          />
        </div>
        
        <ToolsIcons />
      </div>

    </section>
  );
}