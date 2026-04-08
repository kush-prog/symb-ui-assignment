import Image from "next/image";

export default function Preview() {
  return (
    <div className="relative flex justify-center mb-1">

      {/* Browser Mockup */}
      <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-xl bg-white">

        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-gray-100">
          <div className="flex gap-2">
            <span className="w-3 h-3 bg-red-400 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
            <span className="w-3 h-3 bg-green-400 rounded-full"></span>
          </div>

          <div className="text-xs text-gray-400">uteach.com</div>

          <div className="flex gap-2">
            <span>‹</span>
            <span>›</span>
          </div>
        </div>

        {/* Gradient Content */}
        <div className="h-[350px] md:h-[450px] lg:h-[500px] bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200"></div>
      </div>

    </div>
  );
}