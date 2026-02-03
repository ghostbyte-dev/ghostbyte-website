import Image from "next/image";
import type { Author } from "@/src/types/author";
import Avatar from "./avatar";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

export function PostHeader({ title, coverImage, date, author }: Props) {
  return (
    <>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold tracking-tighter leading-tight md:leading-none mb-2">
          {title}
        </h1>{" "}
        <p className="font-bold text-md md:text-xl text-gray-300 mb-10">
          A Ghostbyte Story
        </p>
        <div className="hidden md:block md:mb-12">
          <Avatar name={author.name} picture={author.picture} date={date} />
        </div>
      </div>

      <div className="mb-8 md:mb-16 sm:mx-0">
        <Image
          src={coverImage}
          alt={`Cover Image for ${title}`}
          className="w-full rounded-xl"
          width={1300}
          height={630}
        />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} date={date} />
        </div>
      </div>
    </>
  );
}
