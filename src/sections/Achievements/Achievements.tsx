import AchievementCard from "../../components/Card/AchievementCard";
import { achievements } from "../../data/achievements";
import SectionHeader from "../../components/common/SectionHeader";

export default function Achievements() {
  return (
    <section id="achievements" className="section">

      <SectionHeader
        badge="Recognitions"
        title="Achievements"
        subtitle="Delivering enterprise software, automation solutions, and scalable data platforms with a focus on performance and reliability."
      />
      {/* <div className="text-center">
        <h2 className="gradient-text text-5xl font-bold">
          Achievements
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Delivering enterprise software, automation solutions, and
          scalable data platforms with a focus on performance and
          reliability.
        </p>
      </div> */}

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {achievements.map((item) => (
          <AchievementCard
            key={item.title}
            value={item.value}
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
}