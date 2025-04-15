import { Smartphone, Globe, Search, Laptop, ServerIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Service from "./Service";

export default function ServiceSection() {
  const t = useTranslations("Services");
  return (
    <section
      id="services"
      className="w-full py-12 md:py-24 lg:py-32 relative flex justify-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent" />

      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-300">
              {t("title")}
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("description")}
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
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
