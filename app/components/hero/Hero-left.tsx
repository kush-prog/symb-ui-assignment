import Link from "next/link";
import Image from "next/image";

const companyLogos = [
  { src: "/hero_page_img/Black and white Collection 3.png", alt: "Company 1" },
  { src: "/hero_page_img/Black and white Collection 2.png", alt: "Company 2" },
  { src: "/hero_page_img/Black and white Collection 11.png", alt: "Company 3" },
  { src: "/hero_page_img/Black and white Collection 20.png", alt: "Company 4" },
  { src: "/hero_page_img/Black and white Collection 2.png", alt: "Company 5" },
];

export default function HeroLeft() {
  return (
    <div className="space-y-6 text-center md:text-left">

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0B1B33] leading-tight">
        Teach students <br />
        <span className="relative inline-block isolate">
          worldwide
          <span className="absolute left-0 bottom-[6px] w-full h-[12px] bg-orange-400 rounded -z-10" />
        </span>
      </h1>

      <p className="text-gray-600 max-w-md mx-auto md:mx-0 text-sm sm:text-base leading-relaxed">
        Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa
        tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis
        ultricies.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
        <button className="bg-orange-500 hover:bg-orange-600 transition-colors text-white px-8 py-3 rounded-lg font-semibold text-base w-full sm:w-auto">
          Sign Up Now
        </button>

        <Link
          href="#"
          className="flex items-center gap-2 text-[#0B1B33] font-medium text-base hover:text-orange-500 transition-colors"
        >
          <span className="flex items-center justify-center w-9 h-9 rounded-full border-2 border-current shrink-0">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 ml-0.5">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          View Demo
        </Link>
      </div>

      <div className="pt-4 border-t border-gray-100">
        <div className="
          flex 
          flex-col md:flex-row 
          md:items-center 
          md:justify-between 
          gap-4
        ">
          <p className="
          text-gray-600 
            text-xs 
            uppercase 
            tracking-widest 
            font-semibold
            text-center md:text-left
          ">
            Trusted by leading companies
          </p>

          <div className="
            flex 
            items-center 
            justify-center md:justify-end 
            gap-5 
            flex-wrap md:flex-nowrap
          ">
            {companyLogos.map((logo, i) => (
              <Image
                key={i}
                src={logo.src}
                alt={logo.alt}
                width={0}
                height={0}
                sizes="100vw"
                className="
                  h-6 sm:h-7 
                  w-auto 
                  grayscale 
                  opacity-50 
                  hover:opacity-80 
                  transition
                "
              />
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}