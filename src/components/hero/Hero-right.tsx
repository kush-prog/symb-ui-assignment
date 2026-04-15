import Image from "next/image";

export default function HeroRight() {
    return (
        <div className="hero-right">
          <Image
            src="/images/home.png"
            alt="Teaching platform preview"
            width={625}
            height={545}
            priority
          />
        </div>
    );
}