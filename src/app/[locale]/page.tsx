import type { Locale } from "@/i18n-config";
import SocialMediaSection from "@/src/components/SocialMediaSection";
import TeamSection from "@/src/components/TeamSection";
import ContactSection from "../../components/ContactSection";
import HeroSection from "../../components/HeroSection";
import ProjectsSection from "../../components/ProjectsSection";
import ServiceSection from "../../components/ServicesSection";

export default async function LandingPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  return (
    <div className="dark pt-16">
      <main className="flex-1 relative z-10">
        <HeroSection lang={lang} />

        <ProjectsSection lang={lang} />

        {/* <SocialMediaSection lang={lang} /> */}

        <ServiceSection lang={lang} />

        <TeamSection lang={lang} />

        {/* <TestimonialsSection /> */}

        <ContactSection />
      </main>
    </div>
  );
}
