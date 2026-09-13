"use client";
import {
  GithubIcon,
  Globe02Icon,
  InstagramIcon,
  Linkedin01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
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
        <div className="relative w-full aspect-6/7">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover rounded-2xl lg:rounded-none"
          />
        </div>

        {/* Info */}
        <div className="space-y-1 w-full">
          <h3 className="text-2xl">{name}</h3>
          <p className="text-md">{job}</p>
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-">
          {links?.github && (
            <Link
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              <HugeiconsIcon icon={GithubIcon} className="h-5 w-5" />
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
              <HugeiconsIcon icon={InstagramIcon} className="h-5 w-5" />
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
              <HugeiconsIcon icon={Linkedin01Icon} className="h-5 w-5" />
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
              <HugeiconsIcon icon={Globe02Icon} className="h-5 w-5" />
              <span className="sr-only">Website</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
