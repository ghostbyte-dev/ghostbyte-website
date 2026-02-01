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
    <div className="grid grid-cols-5 py-8 md:py-12 gap-y-5">
      <div className="hidden md:col-span-1 text-neutral-800 md:flex items-center justify-cente">
        <Icon className="h-12 md:h-14 w-12 md:w-14" />
      </div>
      <div className="group flex flex-col col-span-5 md:col-span-4">
        <h3 className="text-2xl mb-2 md:mb-4 font-extrabold">{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
