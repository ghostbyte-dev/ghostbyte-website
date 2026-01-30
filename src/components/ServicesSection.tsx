import {
  Globe,
  GlobeIcon,
  Laptop,
  LaptopIcon,
  Search,
  SearchIcon,
  ServerIcon,
  Smartphone,
  SmartphoneIcon,
} from "lucide-react";
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
      <div className="container relative">
        <div className="max-w-3xl space-y-4">
          <div className="space-y-2">
            <h2 className="text-4xl sm:text-6xl">Our Services</h2>
            {/*  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("description")}
            </p> */}
          </div>
        </div>

        <div className="mt-8 divide-neutral-300 divide-y">
          <Service
            icon={SmartphoneIcon}
            name={t("mobile_development")}
            description={t("mobile_development_description")}
          />

          <Service
            icon={GlobeIcon}
            name={t("web_development")}
            description={t("web_development_description")}
          />

          <Service
            icon={SearchIcon}
            name={t("seo")}
            description={t("seo_description")}
          />

          <Service
            icon={LaptopIcon}
            name={t("ui_ux_design")}
            description={t("ui_ux_design_description")}
          />

          <Service
            icon={ServerIcon}
            name={t("maintainance_support")}
            description={t("maintainance_support_description")}
          />
        </div>
      </div>
    </section>
  );
}
