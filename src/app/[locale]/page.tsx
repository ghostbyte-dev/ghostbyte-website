import HeroSection from "../../components/HeroSection";
import ProjectsSection from "../../components/ProjectsSection";
import TeamSection from "../../components/TeamSection";
import ServiceSection from "../../components/ServicesSection";
import ContactSection from "../../components/ContactSection";
import type { Locale } from "@/i18n-config";

export default async function LandingPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  return (
    <div className="dark pt-16">
      <main className="flex-1 relative z-10">
        <HeroSection lang={lang} />

        <ProjectsSection lang={lang} />

        <ServiceSection lang={lang} />

        <TeamSection lang={lang} />

        {/* <TestimonialsSection /> */}

        <div className="bg-indigo-500 py-20 flex items-center justify-center text-center text-black">
          <p>fief fuuf</p>
        </div>

        <ContactSection />
      </main>
    </div>
  );
}
