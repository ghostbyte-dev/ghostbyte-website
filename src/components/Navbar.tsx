"use client";

import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  Menu,
  XIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslations } from "use-intl";
import CurvedLoop from "./CurvedLoop";
import MastodonIcon from "./icons/MastodonIcon";

export default function Navbar() {
  const t = useTranslations("Navigation");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const Logo = ({ variant = "black" }) => (
    <Link
      href="/"
      className="flex justify-center items-center"
      onClick={() => setIsOpen(false)}
    >
      <Image
        src={
          variant === "white"
            ? "/img/ghostbyte_logo_white.svg"
            : "/img/ghostbyte_logo_black.svg"
        }
        className="h-[30px]"
        width={38}
        height={32}
        alt="Ghostbyte logo"
      />
      <span
        className={`font-bold text-xl ml-2 ${variant === "white" ? "text-light" : "text-neutral-800"}`}
      >
        Ghostbyte
      </span>
    </Link>
  );

  return (
    <>
      {/* MAIN HEADER - Absolute as requested */}
      <header className="absolute top-0 left-0 right-0 z-40 flex justify-center">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <Logo variant="black" />
          </div>

          <nav className="hidden md:flex gap-6 text-neutral-800 font-medium">
            <Link href="/work" className="link-text">
              {t("projects")}
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
              className="hidden md:block px-4 py-2.5 rounded-full bg-neutral-800 text-light text-sm font-semibold"
            >
              {t("get_in_touch")}
            </Link>
            <button
              type="button"
              className="md:hidden p-2"
              onClick={() => setIsOpen(true)}
            >
              <Menu className="h-6 w-6 text-black" />
            </button>
          </div>
        </div>
      </header>

      {/* OVERLAY - Fixed to cover viewport */}
      <div
        className="fixed inset-0 z-50 bg-neutral-800 transition-all duration-500 ease-in-out flex flex-col"
        style={{
          clipPath: isOpen ? "circle(150% at 90% 5%)" : "circle(0% at 90% 5%)",
          pointerEvents: isOpen ? "all" : "none",
        }}
      >
        {/* DUPLICATE HEADER INSIDE OVERLAY */}
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <Logo variant="white" />
          </div>
          <div className="flex items-center">
            <button
              type="button"
              className="p-2"
              onClick={() => setIsOpen(false)}
            >
              <XIcon className="h-6 w-6 text-light" />
            </button>
          </div>
        </div>

        {/* MOBILE NAVIGATION LINKS */}
        <div className="container flex flex-col flex-1 justify-center pl-10 gap-6 text-2xl font-bold text-light">
          <Link href="/work" onClick={() => setIsOpen(false)}>
            {t("projects")}
          </Link>
          <Link href="/#about" onClick={() => setIsOpen(false)}>
            {t("about")}
          </Link>
          <Link href="/#contact" onClick={() => setIsOpen(false)}>
            {t("contact")}
          </Link>
          <Link href="/blog" onClick={() => setIsOpen(false)}>
            {t("blog")}
          </Link>
        </div>

        <CurvedLoop
          marqueeText="A ✦ Ghostbyte ✦ Production ✦"
          speed={2}
          curveAmount={-400}
          direction="left"
          interactive
          className="-mb-3 sm:-mb-20 md:-mb-20 lg:-mb-42"
        />

        <div className="w-full flex justify-center text-light mb-8">
          <div className="flex gap-4 ">
            <Link
              href="https://github.com/ghostbyte-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/ghostbyte/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.instagram.com/ghostbyte.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="h-6 w-6" />
            </Link>
            <Link
              href="https://mastodon.social/@ghostbyte"
              target="_blank"
              rel="noopener noreferrer me"
            >
              <div className="w-6 h-6 relative">
                <MastodonIcon />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
