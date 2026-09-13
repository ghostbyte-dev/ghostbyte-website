import Image from "next/image";
import Link from "next/link";
import type { ResolvedProjectData } from "../data/projects";

interface Props {
  projectDetails: ResolvedProjectData;
}

export default function Project({ projectDetails }: Props) {
  const { name, image, category, description, link } = projectDetails;

  return (
    <Link href={link} className="h-full">
      <div className="group flex flex-col h-full transition-all duration-300">
        <div className="relative aspect-5/3 overflow-hidden rounded-lg">
          <div className="absolute inset-0 z-10" />
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="pt-4">
          <div className="flex items-center space-x-3 mb-1">
            <div>
              <h3 className="text-2xl font-bold">{name}</h3>
            </div>
          </div>

          <p className="text-md">{description}</p>
          <div className="mt-4 flex justify-end"></div>
        </div>
      </div>
    </Link>
  );
}
