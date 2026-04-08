import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-black">
            <span className="text-orange-500">u</span>teach
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link href="#" className="hover:text-black">
            Products
          </Link>
          <Link href="#" className="hover:text-black">
            Solutions
          </Link>
          <Link href="#" className="hover:text-black">
            Pricing
          </Link>
          <div className="flex items-center gap-1 cursor-pointer hover:text-black">
            <span>Resources</span>
            <span>▾</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-gray-700 hover:text-black font-medium">
            Log In
          </button>
          <button className="border-2 border-black px-8 py-2 rounded-md font-medium text-black transition">
            Sign Up Now
          </button>
        </div>
      </div>
    </nav>
  );
}