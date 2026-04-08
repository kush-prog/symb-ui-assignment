import Image from "next/image";

interface Props {
  text: string;
  name: string;
  role: string;
  image: string;
}

export default function TestimonialCard({
  text,
  name,
  role,
  image,
}: Props) {
  return (
    <div className="min-w-[280px] md:min-w-[350px] bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">

      <p className="text-gray-600 text-sm leading-relaxed">
        {text}
      </p>
      <div className="flex items-center gap-3 mt-6">

        <Image
          src={image}
          alt={name}
          width={40}
          height={40}
          className="rounded-full"
        />

        <div>
          <p className="font-semibold text-[#0B1B33] text-sm">{name}</p>
          <p className="text-xs text-gray-500">{role}</p>
        </div>

      </div>
    </div>
  );
}