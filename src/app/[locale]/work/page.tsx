import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n-config";
import { Hero } from "@/src/components/Hero";
import Project from "@/src/components/Project";
import { PROJECTS, type ResolvedProjectData } from "@/src/data/projects";

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
          {PROJECTS.map((rawProject) => {
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
      </div>
    </div>
  );
}
