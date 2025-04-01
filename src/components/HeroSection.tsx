import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden flex flex-col items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fuchsia-500/40 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/40 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-500/40 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-white to-cyan-300">
                  Turning Ideas Into
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-br from-fuchsia-500 to-cyan-400">
                  Digital Reality
                </span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Ghostbyte is a software development studio specializing in
                creating exceptional digital experiences for businesses and
                brands.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <button className="bg-gradient-to-r from-fuchsia-600 to-cyan-400 hover:from-fuchsia-500 hover:to-cyan-300 text-white border-0 h-12 px-6 rounded-md">
                <span className="relative z-10 flex items-center">
                  View Our Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </button>
              <button className="bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white border border-white/10 h-12 px-6 rounded-md">
                Contact Us
              </button>
            </div>
          </div>

          {/* Abstract code visualization instead of image */}
          <div className="flex items-center justify-center">
            <div className="relative h-[400px] w-full max-w-[500px]">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-cyan-600/30 rounded-full blur-3xl opacity-30 animate-pulse"></div>

              {/* Code matrix effect */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm bg-black/20">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 opacity-50"></div>

                {/* Code lines */}
                <div className="absolute inset-0 overflow-hidden p-8">
                  <div className="h-full w-full flex flex-col gap-2 overflow-hidden">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-2 text-xs font-mono opacity-${
                          90 - i * 5
                        } transform translate-y-${
                          i % 3 === 0 ? "animate-pulse" : ""
                        }`}
                      >
                        <span className="text-fuchsia-500">{`{`}</span>
                        <span className="text-cyan-400">function</span>
                        <span className="text-white">{`createDigitalExperience(${
                          i % 3 === 0
                            ? "ideas"
                            : i % 3 === 1
                            ? "design"
                            : "code"
                        })`}</span>
                        <span className="text-fuchsia-500">{`{`}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/4 left-1/4 h-20 w-20 rounded-lg border border-fuchsia-500/30 bg-fuchsia-500/10 backdrop-blur-sm rotate-12 animate-pulse"></div>
                  <div className="absolute top-1/2 right-1/4 h-16 w-16 rounded-lg border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm -rotate-12 animate-pulse animation-delay-2000"></div>
                  <div className="absolute bottom-1/4 left-1/3 h-24 w-24 rounded-lg border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm rotate-45 animate-pulse animation-delay-4000"></div>
                </div>

                {/* Connecting lines */}
                <div className="absolute inset-0">
                  <svg
                    className="h-full w-full"
                    viewBox="0 0 400 400"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100,100 C150,50 250,50 300,100"
                      stroke="url(#gradient1)"
                      strokeWidth="1"
                      fill="none"
                    />
                    <path
                      d="M100,200 C150,150 250,150 300,200"
                      stroke="url(#gradient2)"
                      strokeWidth="1"
                      fill="none"
                    />
                    <path
                      d="M100,300 C150,250 250,250 300,300"
                      stroke="url(#gradient1)"
                      strokeWidth="1"
                      fill="none"
                    />
                    <path
                      d="M100,100 C100,150 100,250 100,300"
                      stroke="url(#gradient2)"
                      strokeWidth="1"
                      fill="none"
                    />
                    <path
                      d="M200,100 C200,150 200,250 200,300"
                      stroke="url(#gradient1)"
                      strokeWidth="1"
                      fill="none"
                    />
                    <path
                      d="M300,100 C300,150 300,250 300,300"
                      stroke="url(#gradient2)"
                      strokeWidth="1"
                      fill="none"
                    />
                    <defs>
                      <linearGradient
                        id="gradient1"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#d946ef"
                          stopOpacity="0.6"
                        />
                        <stop
                          offset="100%"
                          stopColor="#06b6d4"
                          stopOpacity="0.6"
                        />
                      </linearGradient>
                      <linearGradient
                        id="gradient2"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#06b6d4"
                          stopOpacity="0.6"
                        />
                        <stop
                          offset="100%"
                          stopColor="#d946ef"
                          stopOpacity="0.6"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Tech particles */}
                <div className="absolute top-1/4 left-1/4 h-2 w-2 rounded-full bg-purple-500 animate-ping"></div>
                <div className="absolute top-1/2 right-1/4 h-2 w-2 rounded-full bg-cyan-500 animate-ping animation-delay-700"></div>
                <div className="absolute bottom-1/4 left-1/3 h-2 w-2 rounded-full bg-blue-500 animate-ping animation-delay-1500"></div>
                <div className="absolute top-1/3 right-1/3 h-2 w-2 rounded-full bg-purple-500 animate-ping animation-delay-2000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
