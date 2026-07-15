// import SkillCard from "../../components/Card/SkillCard";
import SkillCard from "../../components/Card/SkillCard";
import { skills } from "../../data/skills";
import SectionHeader from "../../components/common/SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeader
        badge="Expertise"
        title="Skills"
        subtitle="Technologies and tools I use to build scalable, secure, and maintainable enterprise applications."
      />
      {/* <div className="text-center">
        <h2 className="gradient-text text-5xl font-bold">
          Skills
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Technologies and tools I use to build scalable, secure, and
          maintainable enterprise applications.
        </p>
      </div> */}

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <SkillCard
            key={skill.title}
            title={skill.title}
            items={skill.items}
          />
        ))}
      </div>
    </section>
  );
}