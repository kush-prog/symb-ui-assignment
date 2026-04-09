import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B1B33] text-gray-300 px-6 md:px-16 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Image
              src="/Logo.png"
              alt="uteach logo"
              width={120}
              height={40}
              className="brightness-0 invert"
            />
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="#">Pricing</Link></li>
              <li><Link href="#">Overview</Link></li>
              <li><Link href="#">Browse</Link></li>
              <li className="flex items-center gap-2">
                <Link href="#">Accessibility</Link>
                <span className="bg-purple-200 text-purple-800 text-xs px-2 py-0.5 rounded">
                  BETA
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><Link href="#">Brainstorming</Link></li>
              <li><Link href="#">Ideation</Link></li>
              <li><Link href="#">Wireframing</Link></li>
              <li><Link href="#">Research</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#">Help Center</Link></li>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Tutorials</Link></li>
              <li><Link href="#">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="#">Contact Us</Link></li>
              <li><Link href="#">Developers</Link></li>
              <li><Link href="#">Documentation</Link></li>
              <li><Link href="#">Integrations</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Press</Link></li>
              <li><Link href="#">Events</Link></li>
              <li>
                <Link href="#" className="flex items-center gap-2">
                  Request Demo →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>uteach @ 2023. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="#">Terms</Link>
            <Link href="#">Privacy</Link>
            <Link href="#">Contact</Link>

            <span className="flex items-center gap-1">🌐 EN</span>
            <span className="flex items-center gap-1">€ EUR</span>
          </div>
        </div>
      </div>
    </footer>
  );
}