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
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>

      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white">
            Let's Build Something Amazing Together
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Ready to transform your ideas into reality? Get in touch with our
            team today.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Contact Form - 3 columns */}
            <div className="lg:col-span-3 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-fuchsia-600 to-cyan-400"></div>
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-fuchsia-600/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-600/20 rounded-full blur-3xl"></div>

              <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Send Us a Message
              </h3>

              <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-white"
                    >
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        id="name"
                        className="flex h-12 w-full rounded-md border border-white/10 bg-black/20 px-4 py-2 text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-white"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        type="email"
                        className="flex h-12 w-full rounded-md border border-white/10 bg-black/20 px-4 py-2 text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-white"
                  >
                    Subject
                  </label>
                  <div className="relative">
                    <input
                      id="subject"
                      className="flex h-12 w-full rounded-md border border-white/10 bg-black/20 px-4 py-2 text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="How can we help you?"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-white"
                  >
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      className="flex min-h-[160px] w-full rounded-md border border-white/10 bg-black/20 px-4 py-3 text-white ring-offset-background placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                </div>

                <button className="w-full h-12 bg-gradient-to-r from-fuchsia-600 to-cyan-400 hover:from-fuchsia-500 hover:to-cyan-300 text-white border-0 flex items-center justify-center gap-2">
                  <Send className="h-4 w-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Info - 2 columns */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Contact */}
              <div className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-600"></div>
                <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  Quick Contact
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="relative mt-1">
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-400 opacity-70 blur-sm"></div>
                      <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-black">
                        <Mail className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-white">
                        Email Us
                      </h4>
                      <a
                        href="mailto:info@ghostbyte.com"
                        className="text-sm text-gray-400 hover:text-fuchsia-400 transition-colors"
                      >
                        info@ghostbyte.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="relative mt-1">
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-400 opacity-70 blur-sm"></div>
                      <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-black">
                        <Phone className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-white">
                        Call Us
                      </h4>
                      <a
                        href="tel:+15551234567"
                        className="text-sm text-gray-400 hover:text-fuchsia-400 transition-colors"
                      >
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="relative mt-1">
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-400 opacity-70 blur-sm"></div>
                      <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-black">
                        <MapPin className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-white">
                        Visit Us
                      </h4>
                      <p className="text-sm text-gray-400">
                        123 Tech Lane, San Francisco
                        <br />
                        CA 94107, USA
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-600"></div>
                <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  Business Hours
                </h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-4">
                    <div className="relative mt-1">
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-400 opacity-70 blur-sm"></div>
                      <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-black">
                        <Clock className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-white">
                        Weekdays
                      </h4>
                      <p className="text-sm text-gray-400">
                        Monday - Friday
                        <br />
                        9:00 AM - 6:00 PM PST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="relative mt-1">
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-400 opacity-70 blur-sm"></div>
                      <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-black">
                        <Calendar className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-white">
                        Weekends
                      </h4>
                      <p className="text-sm text-gray-400">
                        Saturday
                        <br />
                        10:00 AM - 2:00 PM PST
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-600"></div>
                <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  Connect With Us
                </h3>

                <div className="flex gap-4">
                  <a href="#" className="group relative">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-400 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-70"></div>
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                      <Github className="h-5 w-5 text-white" />
                    </div>
                  </a>
                  <a href="#" className="group relative">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-400 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-70"></div>
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                      <Twitter className="h-5 w-5 text-white" />
                    </div>
                  </a>
                  <a href="#" className="group relative">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-400 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-70"></div>
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                      <Linkedin className="h-5 w-5 text-white" />
                    </div>
                  </a>
                  <a href="#" className="group relative">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-400 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-70"></div>
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                      <MessageSquare className="h-5 w-5 text-white" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
