import Image from "next/image";

export default function Preview() {
  return (
    <div className="relative flex justify-center md:justify-end">

      <Image
        src="/section_3/Video.svg"
        alt="app preview"
        width={500}
        height={300}
        className="w-[90%] md:w-[600px] lg:w-[700px] object-contain drop-shadow-2xl"
      />

    </div>
  );
}