export default function Preview() {
  return (
    <div className="relative flex justify-center mb-12 md:mb-16 -mt-4 md:-mt-8">

      <div className="w-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl bg-white">

        <div className="flex items-center justify-between px-4 py-2 bg-gray-100">
          <div className="flex gap-2">
            <span className="w-3 h-3 bg-red-400 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
            <span className="w-3 h-3 bg-green-400 rounded-full"></span>
          </div>

          <div className="text-xs text-gray-400">uteach.com</div>

          <div className="flex gap-2 text-gray-400">
            <span>‹</span>
            <span>›</span>
          </div>
        </div>

        <div className="h-[400px] md:h-[500px] lg:h-[600px] bg-linear-to-br from-blue-200 via-purple-200 to-pink-200"></div>

      </div>
    </div>
  );
}