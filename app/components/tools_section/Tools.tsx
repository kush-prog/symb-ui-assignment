import ToolsHeader from "./Hearder";
import ToolsPreview from "./Preview";
import ToolsIcons from "./Icons";
import BackgroundShapes from "./BackgroundShapes";

export default function ToolsSection() {
  return (
    <section className="relative bg-[#f5f7fb] py-14 md:py-18 overflow-hidden">
      
      <BackgroundShapes />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <ToolsHeader />
        <ToolsPreview />
        <ToolsIcons />
      </div>
    </section>
  );
}