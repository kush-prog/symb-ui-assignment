import Image from "next/image";
import FeatureCard from "./FeatureCard";
import featuresData from "@/app/data/features.json";

export default function Visual() {
  const { visualImages } = featuresData;

  return (
    <div className="relative w-full h-[320px] sm:h-[380px] md:h-[480px] lg:h-[520px] hidden md:block">

      <Image
        src={visualImages.blob.src}
        alt={visualImages.blob.alt}
        width={460}
        height={430}
        className="absolute right-[10%] top-[5%] z-0 w-[70%] max-w-[460px]"
      />

      <Image
        src={visualImages.icons.src}
        alt={visualImages.icons.alt}
        width={225}
        height={340}
        className="absolute right-[20%] top-0 z-10 w-[35%] max-w-[225px]"
      />

      <Image
        src={visualImages.picture2.src}
        alt={visualImages.picture2.alt}
        width={190}
        height={160}
        className="absolute top-[25%] right-[15%] rounded-xl z-20 w-[30%] max-w-[190px]"
      />

      <Image
        src={visualImages.picture.src}
        alt={visualImages.picture.alt}
        width={304}
        height={180}
        className="absolute bottom-[5%] left-[3%] rounded-xl z-20 w-[48%] max-w-[304px]"
      />

      <Image
        src={visualImages.picture1.src}
        alt={visualImages.picture1.alt}
        width={230}
        height={180}
        className="absolute bottom-[8%] right-0 rounded-xl z-20 w-[36%] max-w-[230px]"
      />

      <div className="absolute top-[10%] left-[5%] z-30">
        <FeatureCard />
      </div>

      <Image
        src={visualImages.userThumb.src}
        alt={visualImages.userThumb.alt}
        width={80}
        height={80}
        className="absolute top-[40%] right-[12%] z-30 rounded-full w-[12%] max-w-[80px]"
      />

    </div>
  );
}