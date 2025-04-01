"use client";

import { Code, X, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-black/60 backdrop-blur-xl flex justify-center">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-cyan-300">
            Ghostbyte
          </span>
        </div>

        <nav className="hidden md:flex gap-6">
          <Link
            href="#projects"
            className="text-sm font-medium text-white transition-colors hover:text-fuchsia-400 relative group"
          >
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-fuchsia-600 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#services"
            className="text-sm font-medium text-white transition-colors hover:text-fuchsia-400 relative group"
          >
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-fuchsia-600 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-white transition-colors hover:text-fuchsia-400 relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-fuchsia-600 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-white transition-colors hover:text-fuchsia-400 relative group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-fuchsia-600 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="relative overflow-hidden p-2 rounded-md group bg-gradient-to-r from-fuchsia-600 to-cyan-400 hover:from-fuchsia-500 hover:to-cyan-300 text-white border-0 hover:cursor-pointer">
            <span className="relative z-10">Get in Touch</span>
          </button>

          <button
            className="md:hidden relative z-20"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-10 bg-black/95 backdrop-blur-xl pt-16">
          <nav className="container flex flex-col items-center justify-center gap-8 py-8">
            <Link
              href="#projects"
              className="text-2xl font-bold transition-colors hover:text-fuchsia-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#services"
              className="text-2xl font-bold transition-colors hover:text-fuchsia-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-2xl font-bold transition-colors hover:text-fuchsia-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-2xl font-bold transition-colors hover:text-fuchsia-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
