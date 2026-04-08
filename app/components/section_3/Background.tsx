import Image from "next/image";

export default function Background() {
  return (
    <>
      <Image
        src="/section_3/Blob.svg"
        alt=""
        width={300}
        height={300}
        className="absolute right-[36%] top-32 z-0"
      />
    </>
  );
}