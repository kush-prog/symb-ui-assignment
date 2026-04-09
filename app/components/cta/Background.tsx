import Image from "next/image";
import ctaData from "@/app/data/cta.json";

export default function Background() {
  const { backgroundImages } = ctaData;

  return (
    <>
      <Image
        src={backgroundImages.left.src}
        alt={backgroundImages.left.alt}
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
        src={backgroundImages.right.src}
        alt={backgroundImages.right.alt}
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