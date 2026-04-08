import Image from "next/image";

export default function Background() {
  return (
    <Image
      src="/section_3/Blob.svg"
      alt=""
      width={320}
      height={320}
      className="
        absolute 
        right-[30%] 
        top-[50%] 
        -translate-y-1/2 
        z-0 
        opacity-100
      "
    />
  );
}