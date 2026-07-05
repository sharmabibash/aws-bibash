"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "Services", href: "#services" },
    { title: "Projects", href: "#projects" },
    { title: "About", href: "#about" },
    { title: "Contact", href: "#contact" },
    { title: "GitHub", href: "https://github.com/sharmabibash" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto mt-4 px-5">
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
          <div className="h-18 flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                ☁️
              </div>

              <div>
                <h1 className="text-white font-bold text-xl">
                  Bibash Sharma
                </h1>
                <p className="text-xs text-gray-300">
                  AWS Deployment
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-gray-300 hover:text-orange-400 transition font-medium relative group"
                >
                  {item.title}

                  <span className="absolute left-0 -bottom-1 h-0.5 bg-orange-500 w-0 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex gap-4">
              <Link
                href="/login"
                className="px-5 py-2 rounded-lg border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white transition"
              >
                Login
              </Link>

              <Link
                href="/signup"
                className="px-5 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition shadow-lg"
              >
                Sign Up
              </Link>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden border-t border-white/10 px-6 pb-6">
              <div className="flex flex-col gap-4 mt-5">
                {menuItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:text-orange-400 transition"
                  >
                    {item.title}
                  </Link>
                ))}

                <div className="flex flex-col gap-3 pt-4">
                  <Link
                    href="/login"
                    className="border border-orange-500 text-orange-400 rounded-lg py-3 text-center hover:bg-orange-500 hover:text-white transition"
                  >
                    Login
                  </Link>

                  <Link
                    href="/signup"
                    className="bg-orange-500 rounded-lg py-3 text-center hover:bg-orange-600 transition"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}