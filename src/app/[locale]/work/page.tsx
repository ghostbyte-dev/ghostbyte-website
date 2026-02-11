import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n-config";
import { Hero } from "@/src/components/Hero";
import Project from "@/src/components/Project";

export const metadata: Metadata = {
  title: "Work | Ghostbyte",
  alternates: {
    canonical: "https://ghostbyte.dev/work",
  },
};

export default async function WorkOverviewPage({ lang }: { lang: Locale }) {
  const t = await getTranslations({ namespace: "Projects", locale: lang });
  return (
    <div className="mb-32">
      <Hero title="Our work" description={t("description")} />

      <div className="container relative">
        <div className="grid gap-x-10 gap-y-16 mt-6 lg:grid-cols-2">
          <Project
            name="Pixelix"
            image="/img/projects/pixelix_screenshot.webp"
            logo="/img/projects/pixelix_logo.webp"
            category={t("mobile_application")}
            description={t("pixelix_description")}
            link="/work/pixelix"
          />

          <Project
            name="Veritate Website"
            image="/img/projects/veritate_screenshot.webp"
            logo="/img/projects/veritate_logo.webp"
            category="Website"
            description={t("veritate_description")}
            link="/work/veritate"
          />

          <Project
            name="Socialfolio"
            image="/img/projects/socialfolio_screenshot.webp"
            logo="/img/projects/socialfolio_logo.svg"
            category={t("web_app")}
            description={t("socialfolio_description")}
            link="/work/socialfolio"
          />

          <Project
            name="Daily Tasks"
            image="/img/projects/dailytasks_screenshot.webp"
            logo="/img/projects/dailytasks_logo.webp"
            category={t("android_application")}
            description={t("daily_tasks_description")}
            link="https://play.google.com/store/apps/details?id=com.daniebeler.dailytasks"
          />

          <Project
            name="Together"
            image="/img/projects/together_screenshot.webp"
            logo="/img/projects/together_logo.webp"
            category={t("web_app")}
            description={t("together_description")}
            link="https://together.ghostbyte.dev/"
          />

          <Project
            name="Github Release Stats"
            image="/img/projects/github_release_stats_screenshot.webp"
            logo="/img/projects/github_release_stats_logo.svg"
            category={t("web_app")}
            description={t("github_release_stast_description")}
            link="https://github-release-stats.ghostbyte.dev/"
          />

          <Project
            key="library"
            name="Ghostbyte Library"
            image="/img/projects/ghostbyte_library_screenshot.webp"
            logo="/img/projects/ghostbyte_library_logo.webp"
            category={t("resource_hub")}
            description={t("library_description")}
            link="https://library.ghostbyte.dev"
          />
        </div>
      </div>
    </div>
  );
}
