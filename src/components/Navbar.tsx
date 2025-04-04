"use client";

import { X, Menu, Linkedin } from "lucide-react";
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
          className={`text-white flex w-full pl-10 basis-full flex-col justify-center gap-5 text-2xl font-bold`}
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
        </div>

        <div className="pl-10 pb-10 flex">
          {/* <Link
        href="https://www.linkedin.com/company/black-lemon-gesbr"
        rel="noopener noreferrer"
        target="_blank"
        className={`phosphoricon inline-block mr-3 cursor-pointer text-text duration-500 hover:scale-125 phosphoriconWebsite`}
      >
        <div className="hover:cursor-pointer">
          <Linkedin
            size={25}
            className={`
              duration-300 
              ${isOpen ? 'delay-200' : ''}
            `}
            color={isOpen ? 'white' : 'transparent'}
          />
        </div>
      </Link>

      <Link
        href="https://instagram.com/blacklemon_design"
        rel="noopener noreferrer"
        target="_blank"
        className={`phosphoricon inline-block mr-3 cursor-pointer duration-500 hover:scale-125 phosphoriconWebsite`}
      >
        <div className="hover:cursor-pointer">
          <InstagramLogo
            size={25}
            className={`
              duration-300 
              ${isOpen ? 'delay-200' : ''}
            `}
            color={isOpen ? 'white' : 'transparent'}
          />
        </div>
      </Link>

      <Link
        href="mailto:hey@blacklemon.design"
        rel="noopener noreferrer"
        target="_blank"
        className={`phosphoricon inline-block mr-3 cursor-pointer text-text duration-500 hover:scale-125 phosphoriconWebsite`}
      >
        <div className="hover:cursor-pointer">
          <Envelope
            size={25}
            className={`
              duration-300 
              ${isOpen ? 'delay-200' : ''}
            `}
            color={isOpen ? 'white' : 'transparent'}
          />
        </div>
      </Link>

      <Link
        href="tel:+4368184445010"
        rel="noopener noreferrer"
        target="_blank"
        className={`phosphoricon inline-block mr-3 cursor-pointer text-text duration-500 hover:scale-125 phosphoriconWebsite`}
      >
        <div className="hover:cursor-pointer">
          <Phone
            size={25}
            className={`
              duration-300 
              ${isOpen ? 'delay-200' : ''}
            `}
            color={isOpen ? 'white' : 'transparent'}
          />
        </div>
      </Link> */}
        </div>
      </div>
    </>
  );
}
