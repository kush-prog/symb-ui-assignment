import Image from "next/image";

export default function BackgroundShapes() {
  return (
    <>
      <Image
        src="/section_2/Icons_left.svg"
        alt=""
        width={150}
        height={150}
        className="absolute left-[-80px] top-40 opacity-60"
      />
      <Image
        src="/section_2/Vector_left.svg"
        alt=""
        width={400}
        height={400}
        className="absolute left-[6%] bottom-80"
      />
      <Image
        src="/section_2/Vector_right.svg"
        alt=""
        width={320}
        height={320}
        className="absolute right-[-120px] top-20 opacity-80 pointer-events-none select-none"
      />
    </>
  );
}