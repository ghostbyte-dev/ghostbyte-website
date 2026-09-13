import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";

interface ProjectStat {
  label: string;
  value: string;
  href?: string;
}

interface ProjectHeroProps {
  title: string;
  stats: ProjectStat[];
}

const ProjectHero = ({ title, stats }: ProjectHeroProps) => {
  return (
    <section className="w-full">
      <div className="container pt-32 md:pt-40 pb-10">
        <Link
          href="/work"
          className="flex items-center space-x-1.5 text-neutral-800"
        >
          <HugeiconsIcon icon={ArrowLeft01Icon} size={20} />
          <span className="font-medium">All projects</span>
        </Link>
        <div className="w-full">
          <h1 className="font-extrabold text-neutral-800 text-4xl sm:text-4xl md:text-4xl lg:text-5xl mt-10 mb-3 leading-tight">
            {title}
          </h1>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-6  w-full mt-10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h2 className="text-xl font-semibold">{stat.label}</h2>

              {stat.href ? (
                <Link
                  href={stat.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-neutral-600 transition-colors"
                >
                  {stat.value}
                </Link>
              ) : (
                <p>{stat.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
