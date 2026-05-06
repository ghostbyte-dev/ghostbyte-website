import Link from "next/link";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n-config";
import Project from "../Project";

export type ProjectName =
  | "Pixelix"
  | "Ferienhaus Lustenau"
  | "Veritate"
  | "Socialfolio"
  | "Daily Tasks"
  | "Together"
  | "Github Release Stats"
  | "Ghostbyte Library";

interface Props {
  lang: Locale;
  projectsToShow: ProjectName[];
}

export default async function MoreProjects({ lang, projectsToShow }: Props) {
  const t = await getTranslations({ namespace: "Projects", locale: lang });

  const allProjects = [
    {
      id: "Pixelix" as const,
      component: (
        <Project
          key="pixelix"
          name="Pixelix"
          image="/img/projects/pixelix_screenshot.webp"
          logo="/img/projects/pixelix_logo.webp"
          category={t("mobile_application")}
          description={t("pixelix_description")}
          link="/work/pixelix"
        />
      ),
    },
    {
      id: "Ferienhaus Lustenau" as const,
      component: (
        <Project
          key="ferienhaus"
          name="Ferienhaus Lustenau"
          image="/img/projects/ferienhaus_lustenau_screenshot.png"
          logo="/img/projects/pixelix_logo.webp"
          category="Website"
          description={t("ferienhaus_lustenau_description")}
          link="/work/ferienhaus-lustenau"
        />
      ),
    },
    {
      id: "Veritate" as const,
      component: (
        <Project
          key="veritate"
          name="Veritate Website"
          image="/img/projects/veritate_screenshot.webp"
          logo="/img/projects/veritate_logo.webp"
          category="Website"
          description={t("veritate_description")}
          link="/work/veritate"
        />
      ),
    },
    {
      id: "Socialfolio" as const,
      component: (
        <Project
          key="socialfolio"
          name="Socialfolio"
          image="/img/projects/socialfolio_screenshot.webp"
          logo="/img/projects/socialfolio_logo.svg"
          category={t("web_app")}
          description={t("socialfolio_description")}
          link="/work/socialfolio"
        />
      ),
    },
    {
      id: "Daily Tasks" as const,
      component: (
        <Project
          key="dailytasks"
          name="Daily Tasks"
          image="/img/projects/dailytasks_screenshot.webp"
          logo="/img/projects/dailytasks_logo.webp"
          category={t("android_application")}
          description={t("daily_tasks_description")}
          link="/work/daily-tasks"
        />
      ),
    },
    {
      id: "Together" as const,
      component: (
        <Project
          key="together"
          name="Together"
          image="/img/projects/together_screenshot.webp"
          logo="/img/projects/together_logo.webp"
          category={t("web_app")}
          description={t("together_description")}
          link="/work/together"
        />
      ),
    },
    {
      id: "Github Release Stats" as const,
      component: (
        <Project
          key="releasestats"
          name="Github Release Stats"
          image="/img/projects/github_release_stats_screenshot.webp"
          logo="/img/projects/github_release_stats_logo.svg"
          category={t("web_app")}
          description={t("github_release_stast_description")}
          link="/work/github-release-stats"
        />
      ),
    },
    {
      id: "Ghostbyte Library" as const,
      component: (
        <Project
          key="library"
          name="Ghostbyte Library"
          image="/img/projects/ghostbyte_library_screenshot.webp"
          logo="/img/projects/ghostbyte_library_logo.webp"
          category={t("resource_hub")}
          description={t("library_description")}
          link="/work/ghostbyte-library"
        />
      ),
    },
  ];

  return (
    <section className="w-full pb-12 md:pb-24 lg:pb-28 mt-32 lg:mt-48 relative flex justify-center">
      <div className="container relative">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6">
          More Projects
        </h2>
        <div className="grid gap-x-10 gap-y-16 lg:grid-cols-2">
          {projectsToShow.map(
            (name) => allProjects.find((p) => p.id === name)?.component,
          )}
        </div>

        <div className="w-full flex justify-center mt-10">
          <Link
            href="/work"
            className="relative overflow-hidden px-6 text-sm py-3 rounded-xl group border-2 border-neutral-800 text-neutral-800 font-bold hover:cursor-pointer"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
