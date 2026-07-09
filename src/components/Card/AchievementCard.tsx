type Props = {
  value: string;
  title: string;
};

export default function AchievementCard({
  value,
  title,
}: Props) {
  return (
    <div className="glass rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10">
      <h3 className="gradient-text text-5xl font-black">
        {value}
      </h3>

      <p className="mt-4 text-slate-400">
        {title}
      </p>
    </div>
  );
}