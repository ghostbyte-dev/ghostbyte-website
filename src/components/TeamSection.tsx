import { Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "../dictionaries";

export default function TeamSection({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["team"];
}) {
  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32 relative flex justify-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>

      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col space-y-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {dictionary.title}
              </h2>
              <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {dictionary.description}
              </p>
            </div>
          </div>

          {/* Team Members - 2 people */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Team Member 1 */}
            <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm p-6 transition-all duration-300 hover:border-fuchsia-500/30 hover:shadow-lg hover:shadow-fuchsia-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex flex-col items-center text-center space-y-4 relative z-10">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-400 opacity-70 blur-sm"></div>
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
                  <p className="text-sm text-fuchsia-400 font-medium">
                    {dictionary.daniel_job}
                  </p>
                  <p className="text-sm text-gray-400">
                    {dictionary.daniel_description}
                  </p>
                </div>

                <div className="flex gap-3 pt-2">
                  <Link
                    href="https://github.com/daniebeler"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-fuchsia-400 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="https://www.instagram.com/daniebeler"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-fuchsia-400 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/danielhiebeler"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-fuchsia-400 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm p-6 transition-all duration-300 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex flex-col items-center text-center space-y-4 relative z-10">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-600 opacity-70 blur-sm"></div>
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
                    {dictionary.emanuel_job}
                  </p>
                  <p className="text-sm text-gray-400">
                    {dictionary.emanuel_description}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
