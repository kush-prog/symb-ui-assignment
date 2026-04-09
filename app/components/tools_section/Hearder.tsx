import toolsData from "@/app/data/tools.json";

export default function ToolsHeader() {
  const { heading, description } = toolsData;

  return (
    <div className="mb-12 md:mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        {heading.prefix}{" "}
        <span className="relative inline-block">
          {heading.highlight}
          <span className="absolute left-0 bottom-0 w-full h-2 bg-orange-400 -z-10 rounded"></span>
        </span>{" "}
        {heading.suffix}
      </h2>

      <p className="mt-6 text-gray-500 max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
}