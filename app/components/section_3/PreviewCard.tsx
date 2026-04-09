import Image from "next/image";
import section3Data from "@/app/data/section3.json";

export default function PreviewCard() {
  const { previewImage } = section3Data;

  return (
    <div className="relative z-10 mb-6 md:mb-0">
      <Image
        src={previewImage.src}
        alt={previewImage.alt}
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