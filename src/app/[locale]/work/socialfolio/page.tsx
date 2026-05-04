import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n-config";
import MoreProjects from "@/src/components/projects/MoreProjects";
import ProjectHero from "@/src/components/projects/ProjectHero";

export const metadata: Metadata = {
  title: "Socialfolio | Ghostbyte",
  alternates: {
    canonical: "https://ghostbyte.dev/work/socialfolio",
  },
};

export default async function VeritatePage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  return (
    <div>
      <ProjectHero
        title="Socialfolio"
        stats={[
          {
            label: "Link",
            value: "socialfolio.me",
            href: "https://socialfolio.me",
          },
          {
            label: "Project Start",
            value: "2025",
          },
          {
            label: "Project Type",
            value: "Web Platform",
          },
          {
            label: "Users",
            value: "180+",
          },
        ]}
      />
      <div className="container mb-20">
        <Image
          src="/img/projects/socialfolio/hero.webp"
          alt="Socialfolio Hero"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto rounded-lg"
          priority
        />

        <h2 className="text-3xl mt-10 mb-2">Overview</h2>
        <p className="mb-10">
          Socialfolio is a Web-App where users can register an account and
          create a sharable personal portfolio page.
        </p>
      </div>

      <div className="container"></div>

      <MoreProjects lang={lang} projectsToShow={["Veritate", "Pixelix"]} />
    </div>
  );
}
