import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n-config";
import MoreProjects from "@/src/components/projects/MoreProjects";
import ProjectHero from "@/src/components/projects/ProjectHero";

export const metadata: Metadata = {
  title: "Ferienhaus Lustenau website by Ghostbyte",
  alternates: {
    canonical: "https://ghostbyte.dev/work/ferienhaus-lustenau",
  },
};

export default async function VeritatePage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  return (
    <div>
      <ProjectHero
        title="Ferienhaus Lustenau Website"
        stats={[
          {
            label: "Link",
            value: "ferienhaus-lustenau.at",
            href: "https://ferienhaus-lustenau.at",
          },
          {
            label: "Started",
            value: "2019",
          },
          {
            label: "Project Type",
            value: "Website",
          },
        ]}
      />
      <div className="container mb-20">
        <Image
          src="/img/projects/ferienhaus-lustenau/hero.png"
          alt="Veritate Hero"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto rounded-lg"
          priority
        />

        <h2 className="text-3xl mt-10 mb-2">Overview</h2>
        <p className="mb-10">
          This is a one-pager website which aims to give a holiday home in
          Lustenau a web appearance. It features important infos like contact
          and pricing while having many images to give the customer a good
          overview of what they are booking.
        </p>

        <div className="grid grid-cols-2 gap-4 w-full">
          <Image
            src="/img/projects/ferienhaus-lustenau/general-section.png"
            alt="Veritate Hero"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto col-span-2 rounded-lg"
            priority
          />

          <Image
            src="/img/projects/ferienhaus-lustenau/pictures-section.png"
            alt="Veritate Hero"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto rounded-lg col-span-2 lg:col-span-1"
            priority
          />

          <Image
            src="/img/projects/ferienhaus-lustenau/surrounding-section.png"
            alt="Veritate Hero"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto rounded-lg col-span-2 lg:col-span-1"
            priority
          />
        </div>
      </div>

      <div className="container"></div>

      <MoreProjects lang={lang} projectsToShow={["Veritate", "Socialfolio"]} />
    </div>
  );
}
