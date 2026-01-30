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
      {/* <div className="fixed top-0 bottom-0 right-0 left-0 flex items-center justify-center">
        <img
          src="/img/ghostbyte_logo_black.svg"
          alt=""
          className="h-96 opacity-5"
        />
      </div> */}
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
