import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n-config";
import MoreProjects from "@/src/components/projects/MoreProjects";
import ProjectHero from "@/src/components/projects/ProjectHero";

export const metadata: Metadata = {
  title: "Together by Ghostbyte",
  alternates: {
    canonical: "https://ghostbyte.dev/work/together",
  },
};

export default async function VeritatePage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  return (
    <div>
      <ProjectHero
        title="Together"
        stats={[
          {
            label: "Link",
            value: "together.ghostbyte.dev",
            href: "https://together.ghostbyte.dev",
          },
          {
            label: "Started",
            value: "2024",
          },
          {
            label: "Project Type",
            value: "Web App",
          },
        ]}
      />
      <div className="container mb-20">
        <Image
          src="/img/projects/together/hero.webp"
          alt="Veritate Hero"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto rounded-lg"
          priority
        />

        <h2 className="text-3xl mt-10 mb-2">Overview</h2>
        <p className="mb-10">
          Together is a web-app which tries to simplify the management of a
          household. The main features are a shared todo list, shared shopping
          list and a debt manager.
        </p>
      </div>

      <div className="container"></div>

      <MoreProjects
        lang={lang}
        projectsToShow={["Veritate", "Github Release Stats"]}
      />
    </div>
  );
}
