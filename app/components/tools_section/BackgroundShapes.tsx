import Image from "next/image";

export default function BackgroundShapes() {
  return (
    <>
      <Image
        src="/section_2/Icons_left.svg"
        alt=""
        width={150}
        height={150}
        className="absolute left-[-60px] top-40 opacity-60"
      />

      <Image
        src="/section_2/Vector_left.svg"
        alt=""
        width={300}
        height={300}
        className="absolute left-[9.25%] bottom-70"
      />

      <Image
        src="/section_2/Vector_right.svg" 
        alt=""
        width={300}
        height={300}
        className="absolute right-[0%] top-40 opacity-80 pointer-events-none select-none"
      />
    </>
  );
}