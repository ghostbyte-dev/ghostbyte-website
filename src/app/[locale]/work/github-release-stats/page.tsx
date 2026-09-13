import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n-config";
import MoreProjects from "@/src/components/projects/MoreProjects";
import ProjectHero from "@/src/components/projects/ProjectHero";

export const metadata: Metadata = {
  title: "Github Release Stats by Ghostbyte",
  alternates: {
    canonical: "https://ghostbyte.dev/work/github-release-stats",
  },
};

export default async function VeritatePage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  return (
    <div>
      <ProjectHero
        title="Github Release Stats"
        stats={[
          {
            label: "Link",
            value: "github-release-stats.ghostbyte.dev",
            href: "https://github-release-stats.ghostbyte.dev",
          },
          {
            label: "Started",
            value: "2025",
          },
          {
            label: "Project Type",
            value: "Website",
          },
        ]}
      />
      <div className="container mb-20">
        <Image
          src="/img/projects/github-release-stats/hero.webp"
          alt="Github Release Stats Hero"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto rounded-lg"
          priority
        />

        <h2 className="text-3xl mt-10 mb-2">Overview</h2>
        <p className="mb-10">
          Github Release Stats consumes the GitHub API to get stats like
          downloads about GitHub releases and displays them beautifully.
        </p>
      </div>

      <div className="container"></div>

      <MoreProjects
        lang={lang}
        projectsToShow={["Ghostbyte Library", "Pixelix"]}
      />
    </div>
  );
}
