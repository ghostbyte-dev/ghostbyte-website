import { getTranslations } from "next-intl/server";
import Project from "./Project";
import type { Locale } from "next-intl";

export default async function ProjectsSection({ lang }: { lang: Locale }) {
  const t = await getTranslations({ namespace: "Projects", locale: lang });
  return (
    <section
      id="projects"
      className="w-full py-12 md:py-24 lg:py-32 relative flex justify-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />

      <div className="container mx-auto px-5 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-300">
              {t("features_projects")}
            </h2>
            <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("description")}
            </p>
          </div>
        </div>

        <div className="grid gap-10 py-12 lg:grid-cols-2">
          <Project
            name="Pixelix"
            image="/img/projects/pixelix_screenshot.webp"
            logo="/img/projects/pixelix_logo.webp"
            category={t("mobile_application")}
            description={t("pixelix_description")}
            link="https://app.pixelix.social"
            gradientColor="from-purple-600/30"
          />

          <Project
            name="Veritate Website"
            image="/img/projects/veritate_screenshot.webp"
            logo="/img/projects/veritate_logo.webp"
            category="Website"
            description={t("veritate_description")}
            link="https://veritate.at"
            gradientColor="from-purple-600/30"
          />

          <Project
            name="Socialfolio"
            image="/img/projects/socialfolio_screenshot.webp"
            logo="/img/projects/socialfolio_logo.svg"
            category={t("web_app")}
            description={t("socialfolio_description")}
            link="https://socialfolio.me"
            gradientColor="from-blue-500/30"
          />

          <Project
            name="Daily Tasks"
            image="/img/projects/dailytasks_screenshot.webp"
            logo="/img/projects/dailytasks_logo.webp"
            category={t("android_application")}
            description={t("daily_tasks_description")}
            link="https://play.google.com/store/apps/details?id=com.daniebeler.dailytasks"
            gradientColor="from-cyan-500/30"
          />

          <Project
            name="Together"
            image="/img/projects/together_screenshot.webp"
            logo="/img/projects/together_logo.webp"
            category={t("web_app")}
            description={t("together_description")}
            link="https://together.ghostbyte.dev/"
            gradientColor="from-cyan-500/30"
          />

          <Project
            name="Github Release Stats"
            image="/img/projects/github_release_stats_screenshot.webp"
            logo="/img/projects/github_release_stats_logo.svg"
            category={t("web_app")}
            description={t("github_release_stast_description")}
            link="https://github-release-stats.ghostbyte.dev/"
            gradientColor="from-cyan-500/30"
          />

          <Project
            name="Ghostbyte Library"
            image="/img/projects/ghostbyte_library_screenshot.webp"
            logo="/img/projects/ghostbyte_library_logo.webp"
            category={t("resource_hub")}
            description={t("library_description")}
            link="https://library.ghostbyte.dev"
            gradientColor="from-purple-600/30"
          />
        </div>
      </div>
    </section>
  );
}
