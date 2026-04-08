import Image from "next/image";
import FeatureCard from "./FeatureCard";

export default function Visual() {
  return (
    <div className="relative w-full h-[420px] md:h-[520px]">

      <Image
        src="/features_img/Blob.svg"
        alt=""
        width={460}
        height={430}
        className="absolute right-20 top-10 z-0"
      />

      <Image
        src="/features_img/Icons.svg"
        alt=""
        width={225}
        height={340}
        className="absolute right-35 top-0 z-10"
      />

      <Image
        src="/features_img/Picture_2.svg"
        alt=""
        width={190}
        height={160}
        className="absolute top-28 right-25 rounded-xl z-20"
      />

      <Image
        src="/features_img/Picture.svg"
        alt=""
        width={ 304}
        height={180}
        className="absolute bottom-10 left-5 rounded-xl z-20"
      />

      <Image
        src="/features_img/Picture_1.svg"
        alt=""
        width={230}
        height={180}
        className="absolute bottom-12 right-0 rounded-xl z-20"
      />

      <div className="absolute top-16 left-10 z-30">
        <FeatureCard />
      </div>

      <Image
        src="/features_img/User Thumb.svg"
        alt=""
        width={80}
        height={80}
        className="absolute top-45 right-20 z-30 rounded-full"
      />

    </div>
  );
}