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
        className="w-12 h-12 rounded-full mr-4"
        alt={name}
      />
      <div className="flex flex-col justify-center">
        <div className="text-xl font-bold">{name}</div>

        {date && (
          <div className="text-sm text-gray-300">
            Published on <DateFormatter dateString={date} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Avatar;
