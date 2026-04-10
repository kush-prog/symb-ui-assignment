import ToolsHeader from "./Hearder";
import ToolsPreview from "./Preview";
import ToolsIcons from "./Icons";
import BackgroundShapes from "./BackgroundShapes";
import styles from "@/app/styles/tools.module.css";

export default function ToolsSection() {
  return (
    <section className={styles.section}>

      <BackgroundShapes />

      <div className={styles.inner}>
        <ToolsHeader />
        <ToolsPreview />
        <ToolsIcons />
      </div>

    </section>
  );
}