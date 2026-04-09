import Image from "next/image";

export default function Preview() {
  return (
    <div className="relative flex justify-center mb-12 md:mb-16 -mt-4 md:-mt-8">

      <div className="w-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl bg-white">
        <Image
          src="/section_2/Desktop.svg"
          alt="uteach platform preview"
          width={1200}
          height={700}
          className="w-full h-auto object-cover"
        />
      </div>

    </div>
  );
}