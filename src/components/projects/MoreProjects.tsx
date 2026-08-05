import Link from "next/link";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n-config";
import {
  PROJECTS,
  type ProjectName,
  type ResolvedProjectData,
} from "@/src/data/projects";
import Project from "../Project";

interface Props {
  lang: Locale;
  projectsToShow: ProjectName[];
}

export default async function MoreProjects({ lang, projectsToShow }: Props) {
  const t = await getTranslations({ namespace: "Projects", locale: lang });

  const projectMap = new Map(PROJECTS.map((p) => [p.id, p]));

  return (
    <section className="w-full pb-12 md:pb-24 lg:pb-28 mt-32 lg:mt-48 relative flex justify-center">
      <div className="container relative">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6">
          {t("more_projects_title")}
        </h2>
        <div className="grid gap-x-10 gap-y-16 lg:grid-cols-2">
          {projectsToShow.map((id) => {
            const rawProject = projectMap.get(id);
            if (!rawProject) return null;

            const projectDetails: ResolvedProjectData = {
              ...rawProject,
              category: t(rawProject.categoryKey),
              description: t(rawProject.descriptionKey),
            };

            return (
              <Project key={rawProject.id} projectDetails={projectDetails} />
            );
          })}
        </div>

        <div className="w-full flex justify-center mt-10">
          <Link
            href="/work"
            className="relative overflow-hidden px-6 text-sm py-3 rounded-xl group border-2 border-neutral-800 text-neutral-800 font-bold hover:cursor-pointer"
          >
            View all projects
          </Link>
        </div>
      </div>
    </section>
  );
}
