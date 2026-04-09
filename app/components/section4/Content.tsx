import Image from "next/image";
import section4Data from "@/app/data/section4.json";

export default function Content() {
  const { icon, heading, description, ctaLink } = section4Data;

  return (
    <div className="space-y-6 text-center md:text-left">
    
      <div className="relative inline-block">
        <Image
          src={icon.src}
          alt={icon.alt}
          width={40}
          height={40}
          className="
            absolute 
            -top-6 
            left-[55%] 
            -translate-x-1/2
            md:left-[45%]
          "
        />

        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1B33] leading-tight">
          {heading.line1} <br />
          {heading.line2}
        </h2>

      </div>
      <p className="text-gray-600 max-w-md mx-auto md:mx-0">
        {description}
      </p>
      <a href={ctaLink.href} className="text-blue-600 font-medium inline-block">
        {ctaLink.text}
      </a>

    </div>
  );
}