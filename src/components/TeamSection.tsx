import type { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";
import TeamMemberCard from "./TeamMemberCard";
import LeafletMapWrapper from "./LeafletMapWrapper";

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

            <div className="rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm md:col-span-2 grid grid-cols-1 md:grid-cols-3">
              <div className="p-6">
                <h3 className="text-3xl font-bold mb-4">Where we are</h3>
                <p className="mb-2">
                  From the vibrant pulse of Vienna to the forward-thinking
                  spirit of Vorarlberg, Ghostbyte unites two worlds of
                  creativity and innovation.
                </p>
                <p>
                  Our distributed setup helps us stay agile and close to our
                  partners everywhere.
                </p>
              </div>

              <div className="md:col-span-2 h-100 rounded-b-xl md:rounded-r-xl md:rounded-l-none border border-white/10 bg-black/20 backdrop-blur-sm overflow-hidden">
                <LeafletMapWrapper />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
