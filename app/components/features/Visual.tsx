import Image from "next/image";
import FeatureCard from "./FeatureCard";

export default function Visual() {
  return (
    <div className="relative w-full h-[320px] sm:h-[380px] md:h-[480px] lg:h-[520px] hidden md:block">

      <Image
        src="/features_img/Blob.svg"
        alt=""
        width={460}
        height={430}
        className="absolute right-[10%] top-[5%] z-0 w-[70%] max-w-[460px]"
      />

      <Image
        src="/features_img/Icons.svg"
        alt=""
        width={225}
        height={340}
        className="absolute right-[20%] top-0 z-10 w-[35%] max-w-[225px]"
      />

      <Image
        src="/features_img/Picture_2.svg"
        alt=""
        width={190}
        height={160}
        className="absolute top-[25%] right-[15%] rounded-xl z-20 w-[30%] max-w-[190px]"
      />

      <Image
        src="/features_img/Picture.svg"
        alt=""
        width={304}
        height={180}
        className="absolute bottom-[5%] left-[3%] rounded-xl z-20 w-[48%] max-w-[304px]"
      />

      <Image
        src="/features_img/Picture_1.svg"
        alt=""
        width={230}
        height={180}
        className="absolute bottom-[8%] right-0 rounded-xl z-20 w-[36%] max-w-[230px]"
      />

      <div className="absolute top-[10%] left-[5%] z-30">
        <FeatureCard />
      </div>

      <Image
        src="/features_img/User Thumb.svg"
        alt=""
        width={80}
        height={80}
        className="absolute top-[40%] right-[12%] z-30 rounded-full w-[12%] max-w-[80px]"
      />

    </div>
  );
}