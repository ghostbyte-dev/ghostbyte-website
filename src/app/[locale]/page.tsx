import HeroSection from "../../components/HeroSection";
import ProjectsSection from "../../components/ProjectsSection";
import TeamSection from "../../components/TeamSection";
import ServiceSection from "../../components/ServicesSection";
import ContactSection from "../../components/ContactSection";
import type { Locale } from "@/i18n-config";

export default function LandingPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  return (
    <div className="dark bg-[#030014] pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-br from-fuchsia-600/30 via-transparent to-transparent blur-[120px] opacity-40" />
        <div className="absolute bottom-0 right-0 left-0 h-[500px] bg-gradient-to-tr from-cyan-500/30 via-transparent to-transparent blur-[120px] opacity-40" />
      </div>

      <main className="flex-1 relative z-10">
        <HeroSection />

        <ProjectsSection />

        <ServiceSection />

        <TeamSection />

        {/* <TestimonialsSection /> */}

        <ContactSection />
      </main>
    </div>
  );
}
