import Image from "next/image";

export default function PreviewCard() {
  return (
    <div className="relative z-10 mb-6 md:mb-0">
      <Image
        src="/section_3/Video.svg"
        alt="app preview"
        width={600}
        height={400}
        className="
          w-[260px] 
          sm:w-[320px] 
          md:w-[400px] 
          lg:w-[480px] 
          object-contain 
          drop-shadow-2xl
        "
      />
    </div>
  );
}