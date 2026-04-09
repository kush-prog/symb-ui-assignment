import Image from "next/image";
import featuresData from "@/app/data/features.json";

export default function Content() {
  const { heading, highlightUnderline, description, ctaLink } = featuresData;

  return (
    <div className="space-y-6 text-center md:text-left">

      <h2 className="text-3xl md:text-4xl font-bold text-[#0B1B33] leading-tight">
        {heading.prefix}{" "}
        
        <span className="relative inline-block">
          {heading.highlight}

          <Image
            src={highlightUnderline}
            alt=""
            width={140}
            height={15}
            className="
              absolute 
              left-1/2 
              -translate-x-1/2 
              top-full 
              mt-[-13px]
              pointer-events-none
            "
          />
        </span>

      </h2>

      <p className="text-gray-600 max-w-md mx-auto md:mx-0">
        {description}
      </p>

      <a href={ctaLink.href} className="text-blue-600 font-medium inline-block">
        {ctaLink.text}
      </a>

    </div>
  );
}