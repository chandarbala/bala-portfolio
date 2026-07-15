import ProjectCard from "../../components/Card/ProjectCard";
import { projects } from "../../data/projects";
import SectionHeader from "../../components/common/SectionHeader";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeader
        badge="Showcase"
        title="Featured Projects"
        subtitle="A selection of enterprise applications, automation tools, and data-driven solutions that I've designed and developed."
      />
      {/* <div className="text-center">
        <h2 className="gradient-text text-5xl font-bold">
          Featured Projects
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          A selection of enterprise applications, automation tools,
          and data-driven solutions that I've designed and developed.
        </p>
      </div> */}

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
          />
        ))}
      </div>
    </section>
  );
}