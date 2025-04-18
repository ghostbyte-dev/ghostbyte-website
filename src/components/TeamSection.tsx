import { Github, Globe, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";

export default async function TeamSection({ lang }: { lang: Locale }) {
  const t = await getTranslations({ namespace: "Team", locale: lang });
  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32 relative flex justify-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />

      <div className="container px-4 md:px-6 relative">
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

          {/* Team Members - 2 people */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Team Member 1 */}
            <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm p-6 transition-all duration-300 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex flex-col items-center text-center space-y-4 relative z-10">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-cyan-400 opacity-70 blur-sm" />
                  <div className="relative h-32 w-32 rounded-full overflow-hidden border-2 border-white/10">
                    <Image
                      src="/img/daniel.webp"
                      alt="Daniel Hiebeler"
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Daniel Hiebeler</h3>
                  <p className="text-sm text-purple-400 font-medium">
                    {t("daniel_job")}
                  </p>
                  <p className="text-sm text-gray-400">
                    {t("daniel_description")}
                  </p>
                </div>

                <div className="flex gap-3 pt-2">
                  <Link
                    href="https://github.com/daniebeler"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="https://www.instagram.com/daniebeler"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/danielhiebeler"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>

                  <Link
                    href="https://daniebeler.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <Globe className="h-5 w-5" />
                    <span className="sr-only">Website</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm p-6 transition-all duration-300 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex flex-col items-center text-center space-y-4 relative z-10">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 opacity-70 blur-sm" />
                  <div className="relative h-32 w-32 rounded-full overflow-hidden border-2 border-white/10">
                    <Image
                      src="/img/emanuel.webp"
                      alt="Emanuel Hiebeler"
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Emanuel Hiebeler</h3>
                  <p className="text-sm text-cyan-400 font-medium">
                    {t("emanuel_job")}
                  </p>
                  <p className="text-sm text-gray-400">
                    {t("emanuel_description")}
                  </p>
                </div>

                <div className="flex gap-3 pt-2">
                  <Link
                    href="https://github.com/Hiebeler"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="https://www.instagram.com/hiebeler05"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/emanuelhiebeler"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="https://emanuelhiebeler.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <Globe className="h-5 w-5" />
                    <span className="sr-only">Website</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
