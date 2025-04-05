"use client";

import { X, Menu } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "use-intl";
import Link from "next/link";

export default function Navbar() {
  const t = useTranslations("Navigation");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-black/60 backdrop-blur-xl flex justify-center">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-cyan-300">
              Ghostbyte
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex gap-6">
          <Link
            href="/#projects"
            className="text-sm font-medium text-white transition-colors hover:text-fuchsia-400 relative group"
          >
            {t("projects")}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-fuchsia-600 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/#services"
            className="text-sm font-medium text-white transition-colors hover:text-fuchsia-400 relative group"
          >
            {t("services")}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-fuchsia-600 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/#about"
            className="text-sm font-medium text-white transition-colors hover:text-fuchsia-400 relative group"
          >
            {t("about")}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-fuchsia-600 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-medium text-white transition-colors hover:text-fuchsia-400 relative group"
          >
            {t("contact")}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-fuchsia-600 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/#contact"
            className="relative overflow-hidden px-4 py-2 rounded-md group bg-gradient-to-r from-fuchsia-600 to-cyan-400 hover:from-fuchsia-500 hover:to-cyan-300 text-white border-0 hover:cursor-pointer"
          >
            <span className="relative z-10"> {t("get_in_touch")} </span>
          </Link>
          
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
              href="/#projects"
              className="text-2xl font-bold transition-colors hover:text-fuchsia-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("projects")}
            </Link>
            <Link
              href="/#services"
              className="text-2xl font-bold transition-colors hover:text-fuchsia-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("services")}
            </Link>
            <Link
              href="/#about"
              className="text-2xl font-bold transition-colors hover:text-fuchsia-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("about")}
            </Link>
            <Link
              href="/#contact"
              className="text-2xl font-bold transition-colors hover:text-fuchsia-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("contact")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
