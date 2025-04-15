import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  image: string;
  name: string;
  category: string;
  description: string;
  link: string;
  gradientColor: string;
}

export default function Project({
  image,
  name,
  category,
  description,
  link,
  gradientColor,
}: ProjectProps) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="h-full"
    >
      <div className="group flex flex-col h-full overflow-hidden rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradientColor} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />
        <div className="relative aspect-video overflow-hidden rounded-t-xl">
          <div className="absolute inset-0 z-10" />
          <Image
            src={image}
            alt="Pixelix App"
            fill
            objectFit="cover"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-6">
          <h3 className="mt-2 text-xl font-bold">{name}</h3>
          <p className="text-sm mb-2 text-white/80">{category}</p>

          <p className="text-sm">{description}</p>
          <div className="mt-4 flex justify-end">
            {/* <Link
            href={link}
            className="bg-transparent hover:bg-white/5 text-white group/btn flex items-center"
          >
            <span>View Project</span>
            <LinkrrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link> */}
          </div>
        </div>
      </div>
    </Link>
  );
}
