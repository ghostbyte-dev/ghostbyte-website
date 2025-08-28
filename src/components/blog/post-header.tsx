import { Author } from "@/src/types/author";
import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import Image from "next/image";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

export function PostHeader({ title, coverImage, date, author }: Props) {
  return (
    <>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-4 text-center md:text-left">
        {title}
      </h1>{" "}
      <p className="font-bold text-lg md:text-xl text-gray-300 mb-10 text-center md:text-left">
        A Ghostbyte Story
      </p>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <Image
          src={coverImage}
          alt={`Cover Image for ${title}`}
          className="shadow-sm w-full rounded-xl"
          width={1300}
          height={630}
        />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
}
