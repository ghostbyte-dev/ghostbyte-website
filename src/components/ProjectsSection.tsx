import { ArrowRight, Globe, Music, Smartphone } from "lucide-react";
import Image from "next/image";
import Project from "./Project";

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
            <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From mobile apps to web platforms — see what we've been building.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 auto-rows-fr">
          <Project
            name="Pixelix"
            image="/img/pixelix.png"
            category="Mobile Application"
            description="A feature-rich mobile application with advanced image editing capabilities and social sharing features."
            link="https://app.pixelix.social"
            gradientColor="from-fuchsia-600/30"
          />

          <Project
            name="Socialfolio"
            image="/img/socialfolio.png"
            category="Web App"
            description=""
            link="https://socialfolio.me"
            gradientColor="from-cyan-500/30"
          />

          <Project
            name="Ghostbyte Library"
            image="/img/library.png"
            category="Web App"
            description=""
            link="https://library.ghostbyte.dev"
            gradientColor="from-blue-500/30"
          />
        </div>
      </div>
    </section>
  );
}
