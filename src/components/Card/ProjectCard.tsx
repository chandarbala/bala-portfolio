type Project = {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  image: string;
  github: string;
  demo: string;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  features,
}: Project) {
  return (
    <div className="glass overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/30">

      {/* Image Placeholder */}
    <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-violet-950">

    <div className="absolute h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />

    <div className="absolute h-32 w-32 rounded-full bg-violet-500/20 blur-3xl right-10 top-10" />

    <span className="relative text-lg font-semibold text-slate-300">
        {title}
    </span>

    </div>

      <div className="p-8">

        <h3 className="text-2xl font-bold">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-slate-400">
          {description}
        </p>

        {/* Technology Badges */}
        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Features */}
        <ul className="mt-6 space-y-2">
          {features.map((feature) => (
            <li
              key={feature}
              className="text-slate-300"
            >
              • {feature}
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}