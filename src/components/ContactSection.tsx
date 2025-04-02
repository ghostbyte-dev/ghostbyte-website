import {
  Send,
  Mail,
  Phone,
  MapPin,
  Clock,
  Calendar,
  Github,
  Twitter,
  Linkedin,
  MessageSquare,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 relative flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>

          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white">
                Get In Touch
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Have a project in mind? Send us a message and let's create something amazing together.
              </p>
            </div>

            <div className="mx-auto max-w-3xl">
              <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur-md p-8 relative">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-fuchsia-600 to-cyan-400"></div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-white">
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fuchsia-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-white">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fuchsia-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-white">
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fuchsia-500"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-white">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fuchsia-500"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <div className="flex flex-col space-y-4">
                    <button className="w-full h-10 rounded-md bg-gradient-to-r from-fuchsia-600 to-cyan-400 hover:from-fuchsia-500 hover:to-cyan-300 text-white border-0">
                      Send Message
                    </button>

                    <div className="text-center text-sm text-gray-400">
                      Or email us directly at{" "}
                      <a
                        href="mailto:info@ghostbyte.com"
                        className="text-fuchsia-400 hover:text-cyan-400 transition-colors"
                      >
                        info@ghostbyte.com
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
  );
}
