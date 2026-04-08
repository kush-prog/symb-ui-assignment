import Image from "next/image";

export default function Content() {
  return (
    <div className="space-y-6 text-center md:text-left">
    
      <div className="relative inline-block">
        <Image
          src="/section_4/Aeroplane Icon.svg"
          alt="icon"
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
          Meet international <br />
          students & teachers
        </h2>

      </div>
      <p className="text-gray-600 max-w-md mx-auto md:mx-0">
        Morbi sit egestas dignissim pharetra, sed amet. Tempus justo
        senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam
        facilisi felis nec magna hendrerit. Placerat ipsum sit tellus urna,
        faucibus aenean lorem faucibus integer.
      </p>
      <a href="#" className="text-blue-600 font-medium inline-block">
        Explore teachers and students →
      </a>

    </div>
  );
}