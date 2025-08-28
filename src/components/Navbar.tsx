"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "use-intl";
import Link from "next/link";

export default function Navbar() {
  const t = useTranslations("Navigation");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-[#030014]/60 backdrop-blur-xl flex justify-center">
        <div className="container px-6 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex justify-center items-center">
              <img
                src={"/img/ghostbyte_logo_white.svg"}
                className="h-8"
                alt="Ghostbyte logo"
              />
              <span className="font-bold text-2xl ml-2">Ghostbyte</span>
            </Link>
          </div>

          <nav className="hidden md:flex gap-6">
            <Link
              href="/#projects"
              className="text-sm font-medium text-white transition-colors hover:text-purple-400 relative group"
            >
              {t("projects")}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-400 transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/#services"
              className="text-sm font-medium text-white transition-colors hover:text-purple-400 relative group"
            >
              {t("services")}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-400 transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/#about"
              className="text-sm font-medium text-white transition-colors hover:text-purple-400 relative group"
            >
              {t("about")}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-400 transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium text-white transition-colors hover:text-purple-400 relative group"
            >
              {t("contact")}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-400 transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-white transition-colors hover:text-purple-400 relative group"
            >
              {t("blog")}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/#contact"
              className="relative overflow-hidden px-4 py-2 rounded-md group bg-gradient-to-r font-semibold from-purple-700 to-cyan-600 hover:from-purple-800 hover:to-cyan-700 text-white border-0 hover:cursor-pointer"
            >
              <span className="relative z-10"> {t("get_in_touch")} </span>
            </Link>

            <button
              type="button"
              className="md:hidden relative z-20"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Navbar toggle overlay */}
      <div
        className="fixed right-0 z-50 flex h-full flex-col overflow-x-hidden bg-[#030014]/60 backdrop-blur-xl duration-500 "
        style={{ width: isOpen ? "75vw" : "0vw" }}
      >
        <button
          type="button"
          className={`
        ml-auto mr-7 text-[50px] duration-300
        ${isOpen ? "delay-200" : ""}
      `}
          style={{ color: isOpen ? "white" : "transparent" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          &times;
        </button>
        <div
          className={
            "text-white flex w-full pl-10 basis-full flex-col justify-center gap-5 text-2xl font-bold"
          }
        >
          <Link
            href="/#projekte"
            className="cursor-pointer font-bold"
            onClick={() => setIsOpen(false)}
          >
            <h3
              className={`
            duration-300 
            ${isOpen ? "delay-200 text-white" : "text-transparent"}
          `}
            >
              {t("projects")}
            </h3>
          </Link>

          <Link
            href="/#services"
            className="cursor-pointer font-bold"
            onClick={() => setIsOpen(false)}
          >
            <h3
              className={`
            duration-300 
            ${isOpen ? "delay-200 text-white" : "text-transparent"}
          `}
            >
              {t("services")}
            </h3>
          </Link>

          <Link href="/#about" onClick={() => setIsOpen(false)}>
            <h3
              className={`
            duration-300 
            ${isOpen ? "delay-200 text-white" : "text-transparent"}
          `}
            >
              {t("about")}
            </h3>
          </Link>
          <Link
            href="/#contact"
            className="cursor-pointer font-bold"
            onClick={() => setIsOpen(false)}
          >
            <h3
              className={`
            duration-300 
            ${isOpen ? "delay-200 text-white" : "text-transparent"}
          `}
            >
              {t("contact")}
            </h3>
          </Link>

          <Link
            href="/blog"
            className="cursor-pointer font-bold"
            onClick={() => setIsOpen(false)}
          >
            <h3
              className={`
            duration-300 
            ${isOpen ? "delay-200 text-white" : "text-transparent"}
          `}
            >
              {t("blog")}
            </h3>
          </Link>
        </div>

        {/* <div className="pl-10 pb-10 flex">
         
        </div> */}
      </div>
    </>
  );
}
