import { Globe, Laptop, Search, ServerIcon, Smartphone } from "lucide-react";
import type { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";
import Service from "./Service";

export default async function ServiceSection({ lang }: { lang: Locale }) {
  const t = await getTranslations({ namespace: "Services", locale: lang });
  return (
    <section
      id="services"
      className="w-full py-12 md:py-24 lg:py-32 relative flex justify-center"
    >
      <div className="container mx-auto px-5 md:px-6 relative">
        <div className="max-w-3xl space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl uppercas sm:text-6xl">Services</h2>
            {/*  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("description")}
            </p> */}
          </div>
        </div>

        <div className="mt-8 divide-neutral-300 divide-y">
          <Service
            icon={<Smartphone className="h-8 w-8 text-cyan-300" />}
            name={t("mobile_development")}
            description={t("mobile_development_description")}
          />

          <Service
            icon={<Globe className="h-8 w-8 text-cyan-300" />}
            name={t("web_development")}
            description={t("web_development_description")}
          />

          <Service
            icon={<Search className="h-8 w-8 text-cyan-300" />}
            name={t("seo")}
            description={t("seo_description")}
          />

          <Service
            icon={<Laptop className="h-8 w-8 text-cyan-300" />}
            name={t("ui_ux_design")}
            description={t("ui_ux_design_description")}
          />

          <Service
            icon={<ServerIcon className="h-8 w-8 text-cyan-300" />}
            name={t("maintainance_support")}
            description={t("maintainance_support_description")}
          />
        </div>
      </div>
    </section>
  );
}
