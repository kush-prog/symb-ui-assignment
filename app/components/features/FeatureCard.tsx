import featuresData from "@/app/data/features.json";

export default function FeatureCard() {
  const { featureCard } = featuresData;

  return (
    <div className="bg-white p-4 rounded-xl shadow-lg w-[200px]">

      <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
        {featureCard.tag}
      </span>

      <h4 className="mt-2 font-semibold text-sm text-gray-900">
        {featureCard.title}
      </h4>

      <p className="text-xs text-gray-600 mt-1">
        {featureCard.description}
      </p>

      <button className="mt-3 text-xs text-blue-600 border border-blue-600 px-3 py-1 rounded">
        {featureCard.buttonText}
      </button>
    </div>
  );
}