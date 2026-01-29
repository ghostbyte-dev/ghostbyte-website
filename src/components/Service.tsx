import type { ReactElement } from "react";

interface ServiceProps {
  icon: ReactElement;
  name: string;
  description: string;
}

export default function Service({ icon, name, description }: ServiceProps) {
  return (
    <div className="group flex flex-col items-end space-y-4 py-12">
      <div className="md:w-3/5">
        <h3 className="text-3xl mb-4 font-extrabold">{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
