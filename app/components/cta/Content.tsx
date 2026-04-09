import ctaData from "@/app/data/cta.json";

export default function Content() {
  const { heading, description, buttonText } = ctaData;

  return (
    <div className="space-y-6">

      <h2 className="text-3xl md:text-4xl font-bold text-[#0B1B33]">
        {heading}
      </h2>

      <p className="text-[#0B1B33]/70 max-w-md mx-auto">
        {description}
      </p>

      <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition">
        {buttonText}
      </button>

    </div>
  );
}