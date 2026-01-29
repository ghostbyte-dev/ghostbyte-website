interface HeroProps {
  title: string;
  description: string;
}

export const Hero = ({ title, description }: HeroProps) => {
  return (
    <section className="w-full">
      <div className="container mx-auto">
        <div className="mt-52 mb-44 max-w-3xl">
          <h1 className="font-extrabold text-neutral-800 text-4xl md:text-6xl lg:text-8xl mt-16 uppercase leading-tight">
            {title}
          </h1>
          <p className="mt-3 text-lg md:text-xl font-light text-neutral-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};
