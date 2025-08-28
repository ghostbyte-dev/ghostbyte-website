import Link from "next/link";
import DateFormatter from "./date-formatter";
import { Author } from "@/src/types/author";
import CoverImage from "./cover_image";
import Avatar from "./avatar";
import Image from "next/image";

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
      className="mb-20 md:mb-28 group flex flex-col h-full overflow-hidden rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br from-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />
      <div className="relative aspect-video overflow-hidden rounded-t-xl">
        <div className="absolute inset-0 z-10" />
        <Image
          src={coverImage}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 p-6">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">{title}</h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </Link>
  );
}
