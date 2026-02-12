import Link from "next/link";

interface ProjectHeroProps {
  title: string;
  url: string;
  urlLabel?: string;
}

const ProjectHero = ({ title, url, urlLabel }: ProjectHeroProps) => {
  return (
    <section className="w-full">
      <div className="container">
        <div className="mt-40 md:mt-52 mb-20 max-w-3xl">
          <h1 className="font-extrabold text-neutral-800 text-3xl sm:text-4xl md:text-4xl lg:text-5xl mt-16 mb-3 leading-tight">
            {title}
          </h1>
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold hover:text-neutral-600 transition-colors"
          >
            {urlLabel || url.replace(/^https?:\/\//, "")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
