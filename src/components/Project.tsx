import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  image: string;
  logo: string;
  name: string;
  category: string;
  description: string;
  link: string;
}

export default function Project({
  image,
  logo,
  name,
  category,
  description,
  link,
}: ProjectProps) {
  return (
    <Link href={link} className="h-full">
      <div className="group flex flex-col h-full transition-all duration-300">
        <div className="relative aspect-[5/3] overflow-hidden rounded-lg">
          <div className="absolute inset-0 z-10" />
          <Image
            src={image}
            alt="Pixelix App"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="pt-4">
          <div className="flex items-center space-x-3 mb-1">
            {/* <Image
              src={logo}
              width={40}
              height={40}
              className="w-12 h-12 rounded-xl"
              alt=""
            /> */}
            <div>
              <h3 className=" text-2xl">{name}</h3>
              {/*  <p className="text-sm mb-2 ">{category}</p> */}
            </div>
          </div>

          <p className="text-md">{description}</p>
          <div className="mt-4 flex justify-end"></div>
        </div>
      </div>
    </Link>
  );
}
