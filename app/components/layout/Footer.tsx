import Image from "next/image";
import Link from "next/link";
import footerData from "@/app/data/footer.json";

export default function Footer() {
  const { logo, columns, bottom } = footerData;

  return (
    <footer className="bg-[#0B1B33] text-gray-300 px-6 md:px-16 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="brightness-0 invert"
            />
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-white font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label} className={link.badge ? "flex items-center gap-2" : ""}>
                    <Link href={link.href}>{link.label}</Link>
                    {link.badge && (
                      <span className="bg-purple-200 text-purple-800 text-xs px-2 py-0.5 rounded">
                        {link.badge}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>{bottom.copyright}</p>

          <div className="flex items-center gap-6">
            {bottom.links.map((link) => (
              <Link key={link.label} href={link.href}>{link.label}</Link>
            ))}

            <span className="flex items-center gap-1">🌐 {bottom.locale.language}</span>
            <span className="flex items-center gap-1">€ {bottom.locale.currency}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}