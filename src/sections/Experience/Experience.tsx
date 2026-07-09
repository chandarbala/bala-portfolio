import TimelineCard from "../../components/Card/TimelineCard";
import { experiences } from "../../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="text-center">
        <h2 className="gradient-text text-5xl font-bold">
          Experience
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          My journey in building enterprise applications, automation
          platforms, and data-driven solutions.
        </p>
      </div>

      <div className="relative mx-auto mt-16 max-w-4xl">
        {/* Vertical Line */}
        <div className="absolute left-2 top-0 h-full w-0.5 bg-white/10" />

        <div className="space-y-12">
          {experiences.map((experience) => (
            <TimelineCard
              key={experience.title}
              year={experience.year}
              title={experience.title}
              description={experience.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}