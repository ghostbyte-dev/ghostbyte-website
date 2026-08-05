import Link from "next/link";
import type { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";
import {
  PROJECTS,
  type ProjectName,
  type ResolvedProjectData,
} from "../data/projects";
import Project from "./Project";

const FEATURED_PROJECT_IDS: ProjectName[] = [
  "Pixelix",
  "Veritate",
  "Zahn Leitner",
  "Ferienhaus Lustenau",
  "Socialfolio",
  "Together",
];

export default async function ProjectsSection({ lang }: { lang: Locale }) {
  const t = await getTranslations({ namespace: "Projects", locale: lang });

  const projectMap = new Map(PROJECTS.map((p) => [p.id, p]));

  return (
    <section
      id="projects"
      className="w-full pb-12 md:pb-24 lg:pb-28 relative flex justify-center"
    >
      <div className="container relative">
        <div className="max-w-3xl space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              {t("features_projects")}
            </h2>
          </div>
        </div>

        <div className="grid gap-x-10 gap-y-16 mt-6 lg:grid-cols-2">
          {FEATURED_PROJECT_IDS.map((id) => {
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

        <div className="w-full flex justify-center">
          <Link
            href="work"
            className="relative overflow-hidden px-6 text-sm py-3 rounded-xl group border-2 border-neutral-800 text-neutral-800 font-bold hover:cursor-pointer"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
