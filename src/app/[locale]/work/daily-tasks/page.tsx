import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n-config";
import MoreProjects from "@/src/components/projects/MoreProjects";
import ProjectHero from "@/src/components/projects/ProjectHero";

export const metadata: Metadata = {
  title: "Daily Tasks by Ghostbyte",
  alternates: {
    canonical: "https://ghostbyte.dev/work/daily-tasks",
  },
};

export default async function VeritatePage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  return (
    <div>
      <ProjectHero
        title="Daily Tasks"
        stats={[
          {
            label: "Link",
            value: "Play Store",
            href: "https://play.google.com/store/apps/details?id=com.daniebeler.dailytasks",
          },
          {
            label: "Started",
            value: "2020",
          },
          {
            label: "Project Type",
            value: "App",
          },
          {
            label: "Downloads",
            value: "500+",
          },
        ]}
      />
      <div className="container mb-20">
        <Image
          src="/img/projects/daily-tasks/hero.webp"
          alt="Veritate Hero"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto rounded-lg"
          priority
        />

        <h2 className="text-3xl mt-10 mb-2">Overview</h2>
        <p className="mb-10">
          Daily Tasks is a mobile app for the Ivy Lee Method, which is a
          productivity method. Daily Tasks is available for Android in Google
          Play Store.
        </p>
      </div>

      <div className="container"></div>

      <MoreProjects
        lang={lang}
        projectsToShow={["Pixelix", "Ferienhaus Lustenau"]}
      />
    </div>
  );
}
