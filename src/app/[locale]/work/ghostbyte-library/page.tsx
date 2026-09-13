import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n-config";
import MoreProjects from "@/src/components/projects/MoreProjects";
import ProjectHero from "@/src/components/projects/ProjectHero";

export const metadata: Metadata = {
  title: "Ghostbyte Library by Ghostbyte",
  alternates: {
    canonical: "https://ghostbyte.dev/work/ghostbyte-library",
  },
};

export default async function GhostbyteLibraryPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  return (
    <div>
      <ProjectHero
        title="Ghostbyte Library"
        stats={[
          {
            label: "Link",
            value: "library.ghostbyte.dev",
            href: "https://library.ghostbyte.dev",
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
          src="/img/projects/ghostbyte-library/hero.webp"
          alt="Veritate Hero"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto rounded-lg"
          priority
        />

        <h2 className="text-3xl mt-10 mb-2">Overview</h2>
        <p className="mb-10">
          Ghostbyte Library is a large collection of links to useful websites
          and tools.
        </p>
      </div>

      <div className="container"></div>

      <MoreProjects
        lang={lang}
        projectsToShow={["Ferienhaus Lustenau", "Pixelix"]}
      />
    </div>
  );
}
