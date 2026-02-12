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
      <ProjectHero title="Daily Tasks" url="https://app.pixelix.social" />
      <div className="container mb-20">
        <Image
          src="/img/projects/veritate/hero.png"
          alt="Veritate Hero"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto rounded-lg"
          priority
        />

        <h2 className="text-3xl mt-10 mb-2">Overview</h2>
        <p className="mb-10">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>

        <div className="grid grid-cols-2 gap-4 w-full">
          <Image
            src="/img/projects/veritate/about_new.png"
            alt="Veritate Hero"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto col-span-2 rounded-lg"
            priority
          />

          <Image
            src="/img/projects/veritate/songpage.png"
            alt="Veritate Hero"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto rounded-lg"
            priority
          />

          <Image
            src="/img/projects/veritate/events.png"
            alt="Veritate Hero"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto rounded-lg"
            priority
          />
        </div>
      </div>

      <div className="container"></div>

      <MoreProjects
        lang={lang}
        projectsToShow={["Veritate", "Github Release Stats"]}
      />
    </div>
  );
}
