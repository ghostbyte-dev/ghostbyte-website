import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import type { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Link as IntlLink } from "@/src/i18n/navigation";
import MastodonIcon from "./icons/MastodonIcon";
import LocaleSwitcher from "./LocaleSwitcher";

export default async function Footer({ lang }: { lang: Locale }) {
  const t = await getTranslations({ namespace: "Navigation", locale: lang });
  return (
    <footer className="text-white bg-neutral-900 pt-20 pb-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          {/* Brand column */}
          <div className="md:w-1/3">
            <div className="flex items-center gap-3 mb-3">
              {/* <div className="w-12 h-12 bg-linear-to-br from-lime-400 to-lime-600 rounded-xl flex items-center justify-center text-black font-bold text-xl">
                <img src="/logo_dark.svg" height={22} width={22} />
              </div> */}
              <h3 className="text-3xl font-bold">
                <span className="text-3xl font-bold">Ghostbyte</span>
              </h3>
            </div>
            <p className="mb-8 text-lg">
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
                <div className="text-black w-6 h-6 relative">
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
              <h3 className="text-lg font-bold mb-4">{t("navigation")}</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/#projects" className="link-text">
                    {t("projects")}
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="link-text">
                    {t("services")}
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="link-text">
                    {t("about")}
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="link-text">
                    {t("contact")}
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="link-text">
                    {t("blog")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">{t("get_in_touch")}</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link className="link-text" href="mailto:hey@ghostbyte.dev">
                    hey@ghostbyte.dev
                  </Link>
                </li>
                <li>
                  <Link className="link-text" href="tel:+4367761332011">
                    +43 677 61332011
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <IntlLink href="/privacy-policy" className="link-text">
                    {t("privacy_policy")}
                  </IntlLink>
                </li>
                <li>
                  <IntlLink href="/imprint" className="link-text">
                    {t("imprint")}
                  </IntlLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {
          <div className=" pt-3 pb-3 flex flex-col justify-between items-center gap-4">
            <p className="text-center text-sm">
              &copy; {new Date().getFullYear()}{" "}
              {t("ghostbyte_all_rights_reserved")}
            </p>
          </div>
        }
      </div>
    </footer>
  );
}
