"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import navbarData from "@/app/data/navbar.json";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { logo, navLinks, dropdownLinks, authButtons } = navbarData;

  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="flex items-center">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="object-contain"
          />
        </div>

        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-black">
              {link.label}
            </Link>
          ))}

          {dropdownLinks.map((link) => (
            <div key={link.label} className="flex items-center gap-1 cursor-pointer hover:text-black">
              <span>{link.label}</span>
              <span className="text-xs">▾</span>
            </div>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-gray-700 hover:text-black font-medium">
            {authButtons.login}
          </button>

          <button className="border-2 border-black px-6 py-2 rounded-md font-medium text-black hover:bg-black hover:text-white transition">
            {authButtons.signup}
          </button>
        </div>

        <button
          className="md:hidden flex items-center"
          onClick={() => setOpen(!open)}
        >
          <div className="space-y-1">
            <span className="block w-6 h-[2px] bg-black"></span>
            <span className="block w-6 h-[2px] bg-black"></span>
            <span className="block w-6 h-[2px] bg-black"></span>
          </div>
        </button>

      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-gray-700 font-medium">

          {navLinks.map((link) => (
            <Link key={link.label} href={link.href}>{link.label}</Link>
          ))}
          {dropdownLinks.map((link) => (
            <Link key={link.label} href={link.href}>{link.label}</Link>
          ))}

          <div className="flex flex-col gap-3 pt-4 border-t">
            <button className="text-left">{authButtons.login}</button>
            <button className="border border-black px-4 py-2 rounded-md">
              {authButtons.signup}
            </button>
          </div>

        </div>
      )}
    </nav>
  );
}