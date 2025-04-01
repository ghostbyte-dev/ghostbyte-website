import { Code, Github, Twitter, Linkedin, ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black/70 backdrop-blur-sm py-12 relative z-10 flex justify-center">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-400 opacity-80 blur-sm"></div>
                <div className="relative flex items-center justify-center rounded-full bg-black p-1.5">
                  <Code className="h-5 w-5 text-white" />
                </div>
              </div>
              <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-cyan-300">
                Ghostbyte
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Transforming ideas into digital reality since 2018. We specialize
              in creating exceptional software solutions for businesses of all
              sizes.
            </p>
            <div className="flex gap-4">
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

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-fuchsia-400 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="h-3 w-3" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-sm text-gray-400 hover:text-fuchsia-400 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="h-3 w-3" />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm text-gray-400 hover:text-fuchsia-400 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="h-3 w-3" />
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-sm text-gray-400 hover:text-fuchsia-400 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="h-3 w-3" />
                  <span>Projects</span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-gray-400 hover:text-fuchsia-400 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="h-3 w-3" />
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-fuchsia-400 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="h-3 w-3" />
                  <span>Mobile Development</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-fuchsia-400 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="h-3 w-3" />
                  <span>Web Development</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-fuchsia-400 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="h-3 w-3" />
                  <span>Custom Software</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-fuchsia-400 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="h-3 w-3" />
                  <span>UI/UX Design</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-fuchsia-400 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="h-3 w-3" />
                  <span>Digital Strategy</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Stay Updated</h3>
            <p className="text-sm text-gray-400">
              Subscribe to our newsletter to receive the latest updates and
              news.
            </p>
            <form className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex h-10 w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <button className="w-full h-10 bg-gradient-to-r from-fuchsia-600 to-cyan-400 hover:from-fuchsia-500 hover:to-cyan-300 text-white border-0 text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center text-sm text-gray-400 md:text-left">
            &copy; {new Date().getFullYear()} Ghostbyte. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-fuchsia-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-fuchsia-400 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-fuchsia-400 transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
