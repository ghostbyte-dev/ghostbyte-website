import { Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Link as IntlLink } from "@/src/i18n/navigation";
import CurvedLoop from "./CurvedLoop";
import MastodonIcon from "./icons/MastodonIcon";
import LocaleSwitcher from "./LocaleSwitcher";

export default async function Footer({ lang }: { lang: Locale }) {
  const t = await getTranslations({ namespace: "Navigation", locale: lang });
  return (
    <footer className="bg-neutral-800 text-neutral-300 pt-20">
      {/* <CurvedLoop
        marqueeText="Developed ✦ With ✦ Love ✦ By ✦ Ghostbyte ✦"
        speed={2}
        curveAmount={300}
        direction="left"
        interactive
        className="mb-20 md:mb-28 lg:mb-40"
      /> */}
      <div className="container">
        <div className="flex flex-col md:flex-row justify-center gap-12 mb-16 ">
          {/* <div className="md:w-1/3">
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-3xl font-bold text-light">
                <span className="text-3xl font-bold">Ghostbyte</span>
              </h3>
            </div>
            <p className="mb-8 text-lg">
              {t("turning_ideas_in_digital_reality")}
            </p>
            <div className="flex gap-4 ">
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
                <div className="w-6 h-6 relative">
                  <MastodonIcon />
                </div>
              </Link>
            </div>
            <div className="mt-8">
              <LocaleSwitcher />
            </div>
          </div>
 */}
          {/* Links columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-full">
            <div className="hidden md:block">
              <Image
                alt=""
                src="/img/ghostbyte_logo_white.svg"
                height={16}
                width={16}
                className="w-16 h-16 object-contain"
              />
            </div>
            <div>
              <h3 className="text-lg mb-4 text-light">{t("navigation")}</h3>
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
              <h3 className="text-lg font-bold mb-4 text-light">
                {t("get_in_touch")}
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link className="link-text" href="mailto:hey@ghostbyte.dev">
                    hey@ghostbyte.dev
                  </Link>
                </li>

                <li>
                  <Link
                    className="link-text"
                    href="https://www.instagram.com/ghostbyte.dev/"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    className="link-text"
                    href="https://github.com/ghostbyte-dev"
                  >
                    Github
                  </Link>
                </li>
                <li>
                  <Link
                    className="link-text"
                    href="https://mastodon.social/@ghostbyte"
                  >
                    Mastodon
                  </Link>
                </li>
                <li>
                  <Link
                    className="link-text"
                    href="https://www.linkedin.com/company/ghostbyte/"
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-light">Legal</h3>
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
      </div>
      <div className="p-3 md:p-14">
        <Image
          alt=""
          src="/img/ghostbyte_text.svg"
          height={200}
          width={200}
          className="w-full"
        />
      </div>
    </footer>
  );
}
