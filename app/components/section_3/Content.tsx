import section3Data from "@/app/data/section3.json";

export default function Content() {
  const { heading, checklist, ctaLink } = section3Data;

  return (
    <div className="space-y-6 text-center md:text-left">

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        {heading.prefix}{" "}
        <span className="relative inline-block">
          {heading.highlight}
          <span className="absolute left-0 bottom-1 w-full h-2 bg-orange-400 -z-10 rounded"></span>
        </span>{" "}
        {heading.suffix} <br />
        {heading.line2}
      </h2>

      <ul className="text-gray-600 space-y-2">
        {checklist.map((item, i) => (
          <li key={i}>✔ {item}</li>
        ))}
      </ul>

      <a href={ctaLink.href} className="text-blue-600 font-medium">
        {ctaLink.text}
      </a>
    </div>
  );
}