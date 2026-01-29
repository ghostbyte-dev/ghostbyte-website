import type { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";
import GhostSwarm from "./GhostSwarm";

export default async function HeroSection({ lang }: { lang: Locale }) {
  const t = await getTranslations({ namespace: "Hero", locale: lang });
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden flex flex-col items-center min-h-[80vh] justify-center">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-row">
          <div className="flex flex-col justify-cente space-y-4 shrink-0">
            <div className="space-y-2">
              <h1 className="text-4xl font-extrabold text-neutral-800 sm:text-5xl xl:text-8xl uppercase">
                <span>We build</span>
                <br />
                <span className="">Digital</span>
                <br />
                <span className="">Magic</span>
              </h1>
              <p className="max-w-[600px] text-neutral-600 mt-6 md:text-xl">
                {t("description")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <GhostSwarm />
    </section>
  );
}
