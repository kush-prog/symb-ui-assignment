import Image from "next/image";

interface Props {
  icon: string;
  value: string;
  label: string;
}

export default function StatItem({ icon, value, label }: Props) {
  return (
    <div className="flex flex-col items-center gap-4">

      <Image
        src={icon}
        alt="icon"
        width={40}
        height={40}
        className="w-8 h-8 md:w-10 md:h-10"
      />

      <h3 className="text-3xl md:text-4xl font-bold text-yellow-400">
        {value}
      </h3>

      <p className="text-sm md:text-base text-yellow-300">
        {label}
      </p>

    </div>
  );
}