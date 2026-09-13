import type { Metadata } from "next";
import Image from "next/image";
import type { Locale } from "@/i18n-config";
import MoreProjects from "@/src/components/projects/MoreProjects";
import ProjectHero from "@/src/components/projects/ProjectHero";

export const metadata: Metadata = {
  title: "Dr. Doris Leitner | Ghostbyte",
  alternates: {
    canonical: "https://ghostbyte.dev/work/zahn-leitner",
  },
};

export default async function ZahnLeitnerPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  return (
    <div>
      <ProjectHero
        title="Dr. Doris Leitner"
        stats={[
          {
            label: "Link",
            value: "zahn-leitner.at",
            href: "https://zahn-leitner.at",
          },
          {
            label: "Year",
            value: "2026",
          },
          {
            label: "Project Type",
            value: "Website",
          },
        ]}
      />

      <div className="container mb-20">
        <Image
          src="/img/projects/doris-leitner/doris_leitner_hero.png"
          alt="Dr. Doris Leitner Hero"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto rounded-lg"
          priority
        />

        <h2 className="text-3xl mt-10 mb-2">Overview</h2>
        <p className="mb-10">
          We designed and developed a website for the dentist Dr. Doris Leitner
          in Vienna.
        </p>
      </div>

      <div className="container"></div>

      <MoreProjects lang={lang} projectsToShow={["Pixelix", "Together"]} />
    </div>
  );
}
