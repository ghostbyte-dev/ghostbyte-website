import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  image: string;
  logo: string;
  name: string;
  category: string;
  description: string;
  link: string;
  gradientColor: string;
}

export default function Project({
  image,
  logo,
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
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-3">
            <Image
              src={logo}
              width={40}
              height={40}
              className="w-12 h-12 rounded-xl"
              alt=""
            />
            <div>
              <h3 className="mt-2 text-xl font-bold">{name}</h3>
              <p className="text-sm mb-2 text-white/80">{category}</p>
            </div>
          </div>

          <p className="text-sm">{description}</p>
          <div className="mt-4 flex justify-end"></div>
        </div>
      </div>
    </Link>
  );
}
