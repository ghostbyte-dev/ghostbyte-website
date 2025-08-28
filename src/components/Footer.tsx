import { Github, Instagram, Linkedin } from "lucide-react";
import type { Locale } from "next-intl";
import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";
import { getTranslations } from "next-intl/server";
import { Link as IntlLink } from "@/src/i18n/navigation";
import MastodonIcon from "./icons/MastodonIcon";

export default async function Footer({ lang }: { lang: Locale }) {
  const t = await getTranslations({ namespace: "Navigation", locale: lang });
  return (
    <footer className="text-white pt-20 pb-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          {/* Brand column */}
          <div className="md:w-1/3">
            <div className="flex items-center gap-3 mb-8">
              {/* <div className="w-12 h-12 bg-linear-to-br from-lime-400 to-lime-600 rounded-xl flex items-center justify-center text-black font-bold text-xl">
                <img src="/logo_dark.svg" height={22} width={22} />
              </div> */}
              <h3 className="text-3xl font-bold">
                <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
                  Ghostbyte
                </span>
              </h3>
            </div>
            <p className="mb-8 text-zinc-400 text-lg">
              {t("turning_ideas_in_digital_reality")}
            </p>
            <div className="flex gap-4">
              <Link
                href="https://github.com/ghostbyte-dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/ghostbyte/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.instagram.com/ghostbyte.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="https://mastodon.social/@ghostbyte"
                target="_blank"
                rel="noopener noreferrer me"
              >
                <div className="text-white w-6 h-6 relative">
                  <MastodonIcon />
                </div>
              </Link>
            </div>
            <div className="mt-8">
              <LocaleSwitcher />
            </div>
          </div>

          {/* Links columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:w-2/3">
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">
                {t("navigation")}
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/#projects"
                    className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    {t("projects")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    {t("services")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#about"
                    className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    {t("about")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    {t("contact")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">
                {t("get_in_touch")}
              </h3>
              <div className="mb-3">
                <Link href="mailto:hey@ghostbyte.dev">hey@ghostbyte.dev</Link>
              </div>

              <div>
                <Link href="tel:+4367761332011">+43 677 61332011</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 pb-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center text-sm text-gray-400 md:text-left">
            &copy; {new Date().getFullYear()}{" "}
            {t("ghostbyte_all_rights_reserved")}
          </p>
          <div className="flex gap-6">
            <IntlLink
              href="/privacy-policy"
              className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
            >
              {t("privacy_policy")}
            </IntlLink>
            <IntlLink
              href="/imprint"
              className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
            >
              {t("imprint")}
            </IntlLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
