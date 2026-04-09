import Image from "next/image";
import testimonialsData from "@/app/data/testimonials.json";

export default function Header() {
  const { heading, navigationIcons } = testimonialsData;

  return (
    <div className="flex items-center justify-between">

      <h2 className="text-2xl md:text-3xl font-bold text-[#0B1B33]">
        {heading}
      </h2>

      <div className="flex gap-3">
        <button className="w-10 h-10 border border-orange-400 rounded-full flex items-center justify-center hover:bg-orange-400 transition">
          <Image src={navigationIcons.prev} alt="" width={16} height={16} />
        </button>

        <button className="w-10 h-10 border border-orange-400 rounded-full flex items-center justify-center hover:bg-orange-400 transition">
          <Image src={navigationIcons.next} alt="" width={16} height={16} />
        </button>
      </div>

    </div>
  );
}