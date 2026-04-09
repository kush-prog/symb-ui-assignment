import Image from "next/image";
import section4Data from "@/app/data/section4.json";

export default function ImageGrid() {
  const { image } = section4Data;

  return (
    <div className="flex justify-center md:justify-start">
      <Image
        src={image.src}
        alt={image.alt}
        width={500}
        height={500}
        className="w-[85%] sm:w-[400px] md:w-[450px] lg:w-[500px] object-contain"
      />
    </div>
  );
}