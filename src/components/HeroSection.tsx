import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import type { Locale } from "next-intl";

export default async function HeroSection({ lang }: { lang: Locale }) {
  const t = await getTranslations({ namespace: "Hero", locale: lang });
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden flex flex-col items-center">
      <div className="container px-4 md:px-6 relative z-10 max-w-4xl">
        <div className="">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl space-y-3 font-bold sm:text-5xl xl:text-7xl">
                <span>{t("title_line_1")}</span>
                <br />
                <span className="">{t("title_line_2")}</span>
              </h1>
              <p className="max-w-[600px] text-neutral-600 mt-6 md:text-xl">
                {t("description")}
              </p>
            </div>
            <div className="flex flex-col gap-2 flex-row">
              <Link
                href="/#projects"
                className="flex bg-indigo-500 font-semibold text-black border-0 h-12 px-6 rounded-full"
              >
                <span className="relative z-10 flex items-center">
                  {t("view_our_work")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
              <Link
                href="/#contact"
                className="flex items-center bg-white/5 backdrop-blur-sm font-semibold hover:bg-white/10 text-white border border-white/10 h-12 px-6 rounded-md"
              >
                {t("contact_us")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
