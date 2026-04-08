export default function CourseCards() {
  return (
    <div className="absolute bottom-[-85px] left-1/2 -translate-x-1/2 flex gap-4 z-20">

      <div className="bg-white p-4 rounded-xl shadow w-[160px]">
        <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded">
          Featured
        </span>
        <p className="text-sm mt-2 text-gray-900 font-medium">
          The map of mathematics
        </p>
        <button className="mt-3 text-xs text-blue-600 border border-blue-600 px-2 py-1 rounded">
          Take Lesson
        </button>
      </div>

      <div className="bg-white p-4 rounded-xl shadow w-[160px]">
        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
          Popular
        </span>
        <p className="text-sm mt-2 font-medium text-gray-900">
          Design for how people think
        </p>
        <button className="mt-3 text-xs text-blue-600 border border-blue-600 px-2 py-1 rounded">
          Take Lesson
        </button>
      </div>

      <div className="bg-white p-4 rounded-xl shadow w-[160px]">
        <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
          New
        </span>
        <p className="text-sm mt-2 font-medium text-gray-900">
          International & commercial law
        </p>
        <button className="mt-3 text-xs text-blue-600 border border-blue-600 px-2 py-1 rounded">
          Take Lesson
        </button>
      </div>

    </div>
  );
}