import ToolsHeader from "./Hearder";
import ToolsPreview from "./Preview";
import ToolsIcons from "./Icons";
import BackgroundShapes from "./BackgroundShapes";

export default function ToolsSection() {
  return (
    <section className="relative bg-[#f5f7fb] py-20 md:py-28 overflow-hidden">

      <BackgroundShapes />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 text-center relative z-10">
        <ToolsHeader />
        <ToolsPreview />
        <ToolsIcons />
      </div>

    </section>
  );
}