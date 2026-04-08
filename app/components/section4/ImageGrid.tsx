import Image from "next/image";

export default function ImageGrid() {
  return (
    <div className="flex justify-center md:justify-start">
      <Image
        src="/section_4/Col.svg"
        alt="students collage"
        width={500}
        height={500}
        className="w-[85%] sm:w-[400px] md:w-[450px] lg:w-[500px] object-contain"
      />
    </div>
  );
}