import type { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";
import Project from "./Project";

export default async function ProjectsSection({ lang }: { lang: Locale }) {
  const t = await getTranslations({ namespace: "Projects", locale: lang });
  return (
    <section
      id="projects"
      className="w-full py-12 md:py-24 lg:py-28 relative flex justify-center"
    >
      <div className="container relative">
        <div className="max-w-3xl space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl uppercas sm:text-6xl">
              {t("features_projects")}
            </h2>
          </div>
        </div>

        <div className="grid gap-x-10 gap-y-16 py-12 lg:grid-cols-2">
          <Project
            name="Pixelix"
            image="/img/projects/pixelix_screenshot.webp"
            logo="/img/projects/pixelix_logo.webp"
            category={t("mobile_application")}
            description={t("pixelix_description")}
            link="https://app.pixelix.social"
          />

          <Project
            name="Veritate Website"
            image="/img/projects/veritate_screenshot.webp"
            logo="/img/projects/veritate_logo.webp"
            category="Website"
            description={t("veritate_description")}
            link="https://veritate.at"
          />

          <Project
            name="Socialfolio"
            image="/img/projects/socialfolio_screenshot.webp"
            logo="/img/projects/socialfolio_logo.svg"
            category={t("web_app")}
            description={t("socialfolio_description")}
            link="https://socialfolio.me"
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

          {/* <Project
            name="Ghostbyte Library"
            image="/img/projects/ghostbyte_library_screenshot.webp"
            logo="/img/projects/ghostbyte_library_logo.webp"
            category={t("resource_hub")}
            description={t("library_description")}
            link="https://library.ghostbyte.dev"
          /> */}
        </div>

        {/*  <div className="w-full flex justify-center">
          <Link
            href="work"
            className="relative overflow-hidden px-6 text-sm py-3 rounded-xl group border-2 border-neutral-800 text-neutral-800 font-bold hover:cursor-pointer"
          >
            View All Projects
          </Link>
        </div> */}
      </div>
    </section>
  );
}
