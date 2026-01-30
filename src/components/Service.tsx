import type { LucideIcon } from "lucide-react";

interface ServiceProps {
  icon: LucideIcon;
  name: string;
  description: string;
}

export default function Service({
  icon: Icon,
  name,
  description,
}: ServiceProps) {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1 text-neutral-800 flex items-center justify-center">
        <Icon className="h-14 w-14" />
      </div>
      <div className="group flex flex-col space-y-4 py-12 col-span-4">
        <h3 className="text-3xl mb-4 font-extrabold">{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
