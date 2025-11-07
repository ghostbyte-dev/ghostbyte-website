"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "use-intl";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const t = useTranslations("Navigation");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-[#030014]/60 backdrop-blur-xl flex justify-center">
        <div className="container px-6 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex justify-center items-center">
              <Image
                src={"/img/ghostbyte_logo_white.svg"}
                className="h-[30px]"
                width={38}
                height={32}
                alt="Ghostbyte logo"
              />
              <span className="font-bold text-xl ml-2">Ghostbyte</span>
            </Link>
          </div>

          <nav className="hidden md:flex gap-6 text-sm">
            <Link href="/#projects" className="link-text">
              {t("projects")}
            </Link>
            <Link href="/#services" className="link-text">
              {t("services")}
            </Link>
            <Link href="/#about" className="link-text">
              {t("about")}
            </Link>
            <Link href="/#contact" className="link-text">
              {t("contact")}
            </Link>
            <Link href="/blog" className="link-text">
              {t("blog")}
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/#contact"
              className="relative overflow-hidden px-4 py-2 rounded-md group bg-indigo-500 font-semibold text-black border-0 hover:cursor-pointer"
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
      </div>
    </>
  );
}
