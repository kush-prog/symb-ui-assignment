export default function Content() {
  return (
    <div className="space-y-6 text-center md:text-left">

      <h2 className="text-3xl md:text-4xl font-bold text-[#0B1B33] leading-tight">
        An{" "}
        <span className="relative inline-block">
          all-in-one
          <span className="absolute left-0 bottom-1 w-full h-2 bg-orange-400 -z-10 rounded"></span>
        </span>{" "}
        app <br />
        that makes it easier
      </h2>

      <ul className="text-gray-600 space-y-2">
        <li>✔ Est et in pharetra magna adipiscing ornare aliquam.</li>
        <li>✔ Tellus arcu sed consequat ac velit ut eu blandit.</li>
        <li>✔ Ullamcorper ornare in et egestas dolor orci.</li>
      </ul>

      <a href="#" className="text-blue-600 font-medium">
        Find more about the app →
      </a>
    </div>
  );
}