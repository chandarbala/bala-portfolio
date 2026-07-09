type Props = {
  title: string;
  items: string[];
};

export default function SkillCard({ title, items }: Props) {
  return (
    <div className="glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10">
      <h3 className="mb-5 text-xl font-bold text-cyan-400">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300 transition-colors duration-300 hover:border-cyan-400 hover:text-white"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}