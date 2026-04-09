import Image from "next/image";
import toolsData from "@/app/data/tools.json";

export default function BackgroundShapes() {
  const { backgroundImages } = toolsData;

  return (
    <>
      <Image
        src={backgroundImages.iconsLeft.src}
        alt={backgroundImages.iconsLeft.alt}
        width={150}
        height={150}
        className="absolute left-[-80px] top-40 opacity-60"
      />
      <Image
        src={backgroundImages.vectorLeft.src}
        alt={backgroundImages.vectorLeft.alt}
        width={400}
        height={400}
        className="absolute left-[6%] bottom-80"
      />
      <Image
        src={backgroundImages.vectorRight.src}
        alt={backgroundImages.vectorRight.alt}
        width={320}
        height={320}
        className="absolute right-[-120px] top-20 opacity-80 pointer-events-none select-none"
      />
    </>
  );
}