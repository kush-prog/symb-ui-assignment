import Image from "next/image";
import toolsData from "@/app/data/tools.json";

export default function ToolsIcons() {
  const { icons } = toolsData;

  return (
    <div className="flex justify-center flex-wrap gap-4 md:gap-6 mt-6 md:mt-10">

      {icons.map((icon, index) => (
        <div
          key={index}
          className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl shadow flex items-center justify-center hover:scale-110 transition"
        >
          <Image src={icon} alt="" width={24} height={24} className="md:w-7 md:h-7" />
        </div>
      ))}

    </div>
  );
}