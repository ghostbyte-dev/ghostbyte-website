import Image from "next/image";
import Link from "next/link";
import type { Author } from "@/src/types/author";
import Avatar from "./avatar";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
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
      className="group flex flex-col h-full overflow-hidden"
    >
      <div className="relative aspect-video overflow-hidden rounded-xl">
        <div className="absolute inset-0 z-10" />
        <Image
          src={coverImage}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="pt-5">
        <h3 className="text-2xl font-bold text-neutral-800">{title}</h3>

        <p className="text-l font-light text-neutral-600 mb-5 mt-1">
          {excerpt}
        </p>
        {/* <Avatar name={author.name} picture={author.picture} date={date} /> */}
      </div>
    </Link>
  );
}
