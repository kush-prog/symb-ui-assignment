import Image from "next/image";

export default function HeroRight() {
  return (
    <div className="flex justify-center md:justify-end">

      <Image
        src="/hero_page_img/home.png" 
        alt="hero illustration"
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