import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export default function TeamSection () {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>

      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col space-y-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white">
                Who We Are
              </h2>
              <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ghostbyte is a team of passionate developers, designers, and
                strategists dedicated to creating exceptional digital
                experiences.
              </p>
            </div>
            <div className="space-y-2 max-w-[800px] mx-auto text-center">
              <p className="text-muted-foreground">
                Founded in 2018, we've grown from a small team of two to a
                boutique studio of talented professionals. Our mission is to
                help businesses leverage technology to achieve their goals and
                stay ahead of the competition.
              </p>
              <p className="text-muted-foreground">
                We believe in a collaborative approach, working closely with our
                clients to understand their needs and deliver solutions that
                exceed their expectations. Our commitment to quality,
                innovation, and customer satisfaction has earned us a reputation
                as a trusted partner for businesses of all sizes.
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
                      src="/placeholder.svg?height=128&width=128"
                      alt="Alex Morgan"
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Alex Morgan</h3>
                  <p className="text-sm text-fuchsia-400 font-medium">
                    Founder & Lead Developer
                  </p>
                  <p className="text-sm text-gray-400">
                    With over 10 years of experience in software development,
                    Alex leads our technical team and oversees all project
                    architecture and implementation.
                  </p>
                </div>

                <div className="flex gap-3 pt-2">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-fuchsia-400 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-fuchsia-400 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-fuchsia-400 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
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
                      src="/placeholder.svg?height=128&width=128"
                      alt="Jamie Chen"
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Jamie Chen</h3>
                  <p className="text-sm text-cyan-400 font-medium">
                    Creative Director & UX Designer
                  </p>
                  <p className="text-sm text-gray-400">
                    Jamie brings creative vision to every project, with
                    expertise in UI/UX design, branding, and digital strategy
                    that transforms ideas into beautiful, functional
                    experiences.
                  </p>
                </div>

                <div className="flex gap-3 pt-2">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <button className="bg-gradient-to-r from-fuchsia-600 to-cyan-400 hover:from-fuchsia-500 hover:to-cyan-300 text-white border-0">
              Our Process
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button className="bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white border border-white/10">
              Our Technologies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
