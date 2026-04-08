import Image from "next/image";

export default function Background() {
  return (
    <>
      <Image
        src="/section8/left-card.svg"
        alt=""
        width={400}
        height={400}
        className="
          absolute 
          left-0 
          top-1/2 
          -translate-y-1/2 
          z-0 
          opacity-90
          pointer-events-none
        "
      />

      <Image
        src="/section8/right-card.svg"
        alt=""
        width={400}
        height={400}
        className="
          absolute 
          right-0 
          top-1/2 
          -translate-y-1/2 
          z-0 
          opacity-90
          pointer-events-none
        "
      />
    </>
  );
}