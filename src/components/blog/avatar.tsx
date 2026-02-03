import Image from "next/image";
import DateFormatter from "./date-formatter";

type Props = {
  name: string;
  picture: string;
  date?: string;
};

const Avatar = ({ name, picture, date }: Props) => {
  return (
    <div className="flex items-center">
      <Image
        src={picture}
        height={48}
        width={48}
        className="w-8 h-8 rounded-full mr-2"
        alt={name}
      />
      <div className="flex flex-col justify-center">
        <div className="text-lg leading-tight font-semibold text-neutral-800">
          {name}
        </div>

        {date && (
          <div className="text-sm">
            Published on <DateFormatter dateString={date} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Avatar;
