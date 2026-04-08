import Image from "next/image";

const icons = [
  "/section_2/bottom_icon_1.svg",
  "/section_2/bottom_icon_2.svg",
  "/section_2/bottom_icon_3.svg",
  "/section_2/bottom_icon_4.svg",
  "/section_2/bottom_icon_5.svg",
  "/section_2/bottom_icon_6.svg",
  "/section_2/bottom_icon_7.svg",
  "/section_2/bottom_icon_8.svg",
  "/section_2/bottom_icon_9.svg",
];

export default function ToolsIcons() {
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