export default function ToolsHeader() {
  return (
    <div className="mb-12 md:mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        All the <span className="relative inline-block">
          tools
          <span className="absolute left-0 bottom-0 w-full h-2 bg-orange-400 -z-10 rounded"></span>
        </span> that you need
      </h2>

      <p className="mt-6 text-gray-500 max-w-2xl mx-auto leading-relaxed">
        Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris.
        Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.
      </p>
    </div>
  );
}