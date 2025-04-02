import Link from "next/link";
import Image from "next/image";
import {
  Code,
  Smartphone,
  Globe,
  Music,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  Menu,
  X,
  ChevronRight,
  Send,
  MessageSquare,
  Clock,
  Calendar,
} from "lucide-react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";
import TeamSection from "../components/TeamSection";
import ServiceSection from "../components/ServicesSection";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import TestimonialsSection from "../components/TestimonialsSection";

export default function LandingPage() {
  return (
    <div className="dark bg-[#030014] pt-16">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-br from-fuchsia-600/30 via-transparent to-transparent blur-[120px] opacity-40"></div>
        <div className="absolute bottom-0 right-0 left-0 h-[500px] bg-gradient-to-tr from-cyan-500/30 via-transparent to-transparent blur-[120px] opacity-40"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-[0.02]"></div>
      </div>

      <Navbar />

      <main className="flex-1 relative z-10">
        <HeroSection />

        <ProjectsSection />

        <ServiceSection />

        <TeamSection />

        {/* <TestimonialsSection /> */}

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
