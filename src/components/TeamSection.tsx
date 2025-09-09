import { Github, Globe, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";
import TeamMemberCard from "./TeamMemberCard";

export default async function TeamSection({ lang }: { lang: Locale }) {
  const t = await getTranslations({ namespace: "Team", locale: lang });
  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32 relative flex justify-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />

      <div className="container px-5 mx-auto md:px-6 relative">
        <div className="flex flex-col space-y-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold text-gray-300 tracking-tighter sm:text-4xl md:text-5xl">
                {t("title")}
              </h2>
              <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("description")}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <TeamMemberCard
              name="Daniel Hiebeler"
              image="/img/daniel.webp"
              job={t("daniel_job")}
              jobColor="text-purple-400"
              description={t("daniel_description")}
              gradientFrom="from-purple-600"
              gradientTo="to-cyan-400"
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
              jobColor="text-cyan-400"
              description={t("emanuel_description")}
              gradientFrom="from-cyan-400"
              gradientTo="to-purple-600"
              links={{
                github: "https://github.com/Hiebeler",
                instagram: "https://www.instagram.com/hiebeler05",
                linkedin: "https://www.linkedin.com/in/emanuelhiebeler",
                website: "https://emanuelhiebeler.me",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
