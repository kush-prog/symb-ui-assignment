import Image from "next/image";

export default function HeroRight() {
  return (
     <div className="relative w-full h-[450px] md:h-[520px]">

      <div className="absolute bottom-0 left-[0%] right-[50%] md:left-0 z-10">
        <Image
          src="/hero_page_img/Teacher.png"
          alt="teacher"
          width={280}
          height={280}
          className="w-[100px] md:w-[320px] object-contain"
        />
      </div>

      <div className="absolute top-[-20%] right-[0%] md:right-[10%] z-20">
        <Image
          src="/hero_page_img/Student.png"
          alt="student"
          width={260}
          height={260}
          className="w-[180px] md:w-[300px] object-contain"
        />
      </div>


      <div className="absolute top-[8%] left-[45%] -translate-x-1/2 bg-white text-gray-900 px-4 py-2 rounded-lg shadow text-xs md:text-sm whitespace-nowrap z-20">
        Nunc, at libero neque
      </div>

      <div className="absolute top-[18%] left-[50%] -translate-x-1/2 bg-white text-gray-900 px-4 py-2 rounded-lg shadow text-xs md:text-sm whitespace-nowrap z-20">
        Viverra sed
      </div>

      <div className="absolute top-[30%] left-[40%] -translate-x-1/2 bg-[#0B1B33] text-white px-4 py-2 rounded-lg shadow text-xs md:text-sm whitespace-nowrap z-20">
        Turpis platea nunc mattis
      </div>

      <div className="absolute top-[39%] left-[37%] -translate-x-1/2 bg-[#0B1B33] text-white px-4 py-2 rounded-lg shadow text-xs md:text-sm whitespace-nowrap z-20">
        Vitae viverra ut non
      </div>

    </div>
  );
}