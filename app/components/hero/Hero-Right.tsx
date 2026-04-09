import Image from "next/image";
import heroData from "@/app/data/hero.json";

export default function HeroRight() {
  const { heroImage } = heroData;

  return (
    <div className="flex justify-center md:justify-end">

      <Image
        src={heroImage.src} 
        alt={heroImage.alt}
        width={600}
        height={500}
        className="
          w-[90%] 
          sm:w-[400px] 
          md:w-[500px] 
          lg:w-[600px] 
          object-contain
        "
        priority
      />

    </div>
  );
}