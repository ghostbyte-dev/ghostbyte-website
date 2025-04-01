import { Smartphone, Globe, Code } from "lucide-react";

export default function ServiceSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent"></div>

      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white">
              What We Do
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a comprehensive range of software development services to
              help your business succeed.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Service 1 */}
          <div className="group flex flex-col items-center space-y-4 rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm p-6 text-center transition-all duration-300 hover:border-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/5">
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-400 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-80"></div>
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm">
                <Smartphone className="h-8 w-8 text-cyan-300" />
              </div>
            </div>
            <h3 className="text-xl font-bold">Mobile Development</h3>
            <p className="text-muted-foreground">
              We build native and cross-platform mobile applications for iOS and
              Android that deliver exceptional user experiences.
            </p>
          </div>

          {/* Service 2 */}
          <div className="group flex flex-col items-center space-y-4 rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm p-6 text-center transition-all duration-300 hover:border-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/5">
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-400 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-80"></div>
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm">
                <Globe className="h-8 w-8 text-cyan-300" />
              </div>
            </div>
            <h3 className="text-xl font-bold">Web Development</h3>
            <p className="text-muted-foreground">
              From simple websites to complex web applications, we create
              responsive and performant web solutions.
            </p>
          </div>

          {/* Service 3 */}
          <div className="group flex flex-col items-center space-y-4 rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm p-6 text-center transition-all duration-300 hover:border-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/5">
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-400 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-80"></div>
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm">
                <Code className="h-8 w-8 text-cyan-300" />
              </div>
            </div>
            <h3 className="text-xl font-bold">Custom Software</h3>
            <p className="text-muted-foreground">
              We develop bespoke software solutions tailored to your specific
              business needs and requirements.
            </p>
          </div>

          {/* Service 4 */}
          <div className="group flex flex-col items-center space-y-4 rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm p-6 text-center transition-all duration-300 hover:border-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/5">
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-400 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-80"></div>
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-cyan-300"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                  <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                  <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold">UI/UX Design</h3>
            <p className="text-muted-foreground">
              We create intuitive and visually appealing user interfaces that
              enhance user experience and engagement.
            </p>
          </div>

          {/* Service 5 */}
          <div className="group flex flex-col items-center space-y-4 rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm p-6 text-center transition-all duration-300 hover:border-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/5">
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-400 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-80"></div>
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-cyan-300"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
                  <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
                  <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold">Digital Strategy</h3>
            <p className="text-muted-foreground">
              We help businesses develop effective digital strategies to achieve
              their goals and stay ahead of the competition.
            </p>
          </div>

          {/* Service 6 */}
          <div className="group flex flex-col items-center space-y-4 rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm p-6 text-center transition-all duration-300 hover:border-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/5">
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-400 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-80"></div>
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-cyan-300"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold">Maintenance & Support</h3>
            <p className="text-muted-foreground">
              We provide ongoing maintenance and support services to ensure your
              software continues to perform optimally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
