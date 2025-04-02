import { ArrowRight, Globe, Music, Smartphone } from "lucide-react";
import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="w-full py-12 md:py-24 lg:py-32 relative flex justify-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>

      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white">
              Featured Projects
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We've worked with a variety of clients to deliver exceptional
              digital experiences.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
          {/* Project 1 - Pixelix */}
          <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative aspect-video overflow-hidden rounded-t-xl">
              <div className="absolute inset-0 z-10 bg-black/40 transition-colors group-hover:bg-black/30"></div>
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Pixelix App"
                width={500}
                height={300}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="flex flex-col items-center gap-1 text-center text-white">
                  <div className="relative">
                    <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-70"></div>
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm">
                      <Smartphone className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="mt-2 text-xl font-bold">Pixelix</h3>
                  <p className="text-sm text-white/80">Mobile Application</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-muted-foreground">
                A feature-rich mobile application with advanced image editing
                capabilities and social sharing features.
              </p>
              <div className="mt-4 flex justify-end">
                <button className="bg-transparent hover:bg-white/5 text-white group/btn flex items-center">
                  <span>View Project</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Project 2 - Socialfolio */}
          <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative aspect-video overflow-hidden rounded-t-xl">
              <div className="absolute inset-0 z-10 bg-black/40 transition-colors group-hover:bg-black/30"></div>
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Socialfolio Web App"
                width={500}
                height={300}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="flex flex-col items-center gap-1 text-center text-white">
                  <div className="relative">
                    <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-70"></div>
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm">
                      <Globe className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="mt-2 text-xl font-bold">Socialfolio</h3>
                  <p className="text-sm text-white/80">Web Application</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-muted-foreground">
                A modern web application that helps professionals showcase their
                portfolio and connect with others in their industry.
              </p>
              <div className="mt-4 flex justify-end">
                <button className="bg-transparent hover:bg-white/5 text-white group/btn flex items-center">
                  <span>View Project</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Project 3 - Ghostbyte Library */}
          <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative aspect-video overflow-hidden rounded-t-xl">
              <div className="absolute inset-0 z-10 bg-black/40 transition-colors group-hover:bg-black/30"></div>
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Ghostbyte Library"
                width={500}
                height={300}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="flex flex-col items-center gap-1 text-center text-white">
                  <div className="relative">
                    <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-70"></div>
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm">
                      <Music className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="mt-2 text-xl font-bold">Ghostbyte Library</h3>
                  <p className="text-sm text-white/80"></p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-muted-foreground">
                Placeholder Placeholder Placeholder PlaceholderPlaceholder
                Placeholder
              </p>
              <div className="mt-4 flex justify-end">
                <button className="bg-transparent hover:bg-white/5 text-white group/btn flex items-center">
                  <span>View Project</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
