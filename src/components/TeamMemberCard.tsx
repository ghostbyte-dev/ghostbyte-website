// components/TeamMemberCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Instagram, Linkedin, Globe } from "lucide-react";

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
  jobColor = "text-purple-400",
  description,
  gradientFrom = "from-purple-600",
  gradientTo = "to-cyan-400",
  links,
}: TeamMemberCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm py-12 px-6 transition-all duration-300 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="flex flex-col items-center text-center space-y-6 relative z-10">
        {/* Avatar */}
        <div className="relative">
          <div
            className={`absolute -inset-1 rounded-full bg-gradient-to-r ${gradientFrom} ${gradientTo} opacity-70 blur-sm`}
          />
          <div className="relative h-32 w-32 rounded-full overflow-hidden border-2 border-white/10">
            <Image
              src={image}
              alt={name}
              width={128}
              height={128}
              className="object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">{name}</h3>
          <p className={`text-md font-medium ${jobColor}`}>{job}</p>
          <p className="text-md text-gray-400">{description}</p>
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-2">
          {links?.github && (
            <Link
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
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
              className="text-gray-400 hover:text-purple-400 transition-colors"
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
              className="text-gray-400 hover:text-purple-400 transition-colors"
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
              className="text-gray-400 hover:text-purple-400 transition-colors"
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
