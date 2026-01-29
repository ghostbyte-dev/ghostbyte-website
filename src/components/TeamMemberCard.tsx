// components/TeamMemberCard.tsx
"use client";

import { Github, Globe, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface TeamMemberCardProps {
  name: string;
  image: string;
  job: string;
  jobColor?: string;
  description: string;
  gradientFrom?: string;
  gradientTo?: string;
  links?: {
    github?: string;
    instagram?: string;
    linkedin?: string;
    website?: string;
  };
}

export default function TeamMemberCard({
  name,
  image,
  job,
  links,
}: TeamMemberCardProps) {
  return (
    <div className="">
      <div className="flex flex-col space-y-4 relative z-10">
        {/* Avatar */}
        <div className="relative w-full aspect-[6/7]">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>

        {/* Info */}
        <div className="space-y-1 w-full">
          <h3 className="text-2xl">{name}</h3>
          <p className="text-md">{job}</p>
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-2">
          {links?.github && (
            <Link
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          )}
          {links?.instagram && (
            <Link
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          )}
          {links?.linkedin && (
            <Link
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          )}
          {links?.website && (
            <Link
              href={links.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              <Globe className="h-5 w-5" />
              <span className="sr-only">Website</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
