import Image from "next/image";

export default function Content() {
  return (
    <div className="space-y-6 text-center md:text-left">

      <h2 className="text-3xl md:text-4xl font-bold text-[#0B1B33] leading-tight">
        All the cool{" "}
        
        <span className="relative inline-block">
          features

          <Image
            src="/features_img/Vector-14.svg"
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
        Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac.
        In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque
        quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non
        viverra a, neque orci.
      </p>

      <a href="#" className="text-blue-600 font-medium inline-block">
        View all the features →
      </a>

    </div>
  );
}