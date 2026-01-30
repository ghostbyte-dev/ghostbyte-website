import type { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";
import TeamMemberCard from "./TeamMemberCard";

export default async function TeamSection({ lang }: { lang: Locale }) {
  const t = await getTranslations({ namespace: "Team", locale: lang });
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 relative">
      <div className="container flex justify-between flex-wrap lg:flex-nowrap">
        <div className="max-w-3xl mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl uppercas sm:text-6xl">Our Team</h2>
            {/*  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("description")}
            </p> */}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-2xl">
          <TeamMemberCard
            name="Daniel Hiebeler"
            image="/img/daniel.webp"
            job={t("daniel_job")}
            description={t("daniel_description")}
            links={{
              github: "https://github.com/daniebeler",
              instagram: "https://www.instagram.com/daniebeler",
              linkedin: "https://www.linkedin.com/in/danielhiebeler",
              website: "https://daniebeler.com",
            }}
          />

          <TeamMemberCard
            name="Emanuel Hiebeler"
            image="/img/emanuel.webp"
            job={t("emanuel_job")}
            description={t("emanuel_description")}
            links={{
              github: "https://github.com/Hiebeler",
              instagram: "https://www.instagram.com/hiebeler05",
              linkedin: "https://www.linkedin.com/in/emanuelhiebeler",
              website: "https://emanuelhiebeler.me",
            }}
          />
        </div>
      </div>
    </section>
  );
}
