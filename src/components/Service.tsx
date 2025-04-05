import { ReactElement } from "react";

interface ServiceProps {
  icon: ReactElement;
  name: string;
  description: string;
}

export default function Service({ icon, name, description }: ServiceProps) {
  return (
    <div className="group flex flex-col items-center space-y-4 rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm p-6 text-center transition-all duration-300 hover:border-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/5">
      <div className="relative">
        <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-400 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-80"></div>
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold">{name}</h3>
      <p>{description}</p>
    </div>
  );
}
