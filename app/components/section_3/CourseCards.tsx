export default function CourseCards() {
  return (
    <div
      className="
        flex 
        flex-col sm:flex-row 
        gap-4 
        mt-6 md:mt-0
        md:absolute 
        md:bottom-[-40px] 
        md:left-1/2 
        md:-translate-x-1/2
        z-20
        w-full md:w-auto
      "
    >
      {[
        { tag: "Featured", color: "purple", text: "The map of mathematics" },
        { tag: "Popular", color: "blue", text: "Design for how people think" },
        { tag: "New", color: "green", text: "International & commercial law" },
      ].map((item, i) => (
        <div
          key={i}
          className="
            bg-white p-4 rounded-xl shadow 
            w-full sm:w-[180px]
            shrink-0
          "
        >
          <span
            className={`text-xs px-2 py-1 rounded 
              ${item.color === "purple" && "bg-purple-100 text-purple-600"}
              ${item.color === "blue" && "bg-blue-100 text-blue-600"}
              ${item.color === "green" && "bg-green-100 text-green-600"}
            `}
          >
            {item.tag}
          </span>

          <p className="text-sm mt-2 font-medium text-gray-900">
            {item.text}
          </p>

          <button className="mt-3 text-xs text-blue-600 border border-blue-600 px-2 py-1 rounded">
            Take Lesson
          </button>
        </div>
      ))}
    </div>
  );
}