import Image from "next/image";
import Link from "next/link";
import type { Author } from "@/src/types/author";
import Avatar from "./avatar";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="mb-20 md:mb-28 group flex flex-col md:flex-row items-stretch gap-12 transition-all duration-300"
    >
      <div className="md:w-3/5">
        <div className="relative aspect-video w-full h-full overflow-hidden rounded-xl">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      <div className="md:w-2/5 flex flex-col justify-center">
        <div>
          <div className="mb-3 text-neutral-600 font-light text-sm">
            Published <DateFormatter dateString={date} />
          </div>
          <h3 className="mb-4 text-4xl lg:text-3xl font-bold text-neutral-800 group-hover:text-neutral-700 transition-colors">
            {title}
          </h3>
          <p className="text-lg mb-4 font-light text-neutral-600 leading-relaxed">
            {excerpt}
          </p>
        </div>

        <Avatar name={author.name} picture={author.picture} />
      </div>
    </Link>
  );
}
