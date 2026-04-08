export default function FeatureCard() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-lg w-[200px]">

      <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
        Popular
      </span>

      <h4 className="mt-2 font-semibold text-sm text-gray-900">
        Design for how people think
      </h4>

      <p className="text-xs text-gray-600 mt-1">
        Aliquam ut euismod condimentum elementum ultrices volutpat sit non.
      </p>

      <button className="mt-3 text-xs text-blue-600 border border-blue-600 px-3 py-1 rounded">
        Take Lesson
      </button>
    </div>
  );
}