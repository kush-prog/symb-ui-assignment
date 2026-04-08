import Image from "next/image";

export default function Header() {
  return (
    <div className="flex items-center justify-between">

      <h2 className="text-2xl md:text-3xl font-bold text-[#0B1B33]">
        What everyone says
      </h2>

      <div className="flex gap-3">
        <button className="w-10 h-10 border border-orange-400 rounded-full flex items-center justify-center hover:bg-orange-400 transition">
          <Image src="/testimonials_img/Vector_1.svg" alt="" width={16} height={16} />
        </button>

        <button className="w-10 h-10 border border-orange-400 rounded-full flex items-center justify-center hover:bg-orange-400 transition">
          <Image src="/testimonials_img/Vector.svg" alt="" width={16} height={16} />
        </button>
      </div>

    </div>
  );
}