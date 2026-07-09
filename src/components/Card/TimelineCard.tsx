type Props = {
  year: string;
  title: string;
  description: string;
};

export default function TimelineCard({
  year,
  title,
  description,
}: Props) {
  return (
    <div className="relative pl-12">
      {/* Timeline Dot */}
      <div className="absolute left-0 top-2 h-5 w-5 rounded-full border-4 border-[#050816] bg-cyan-400 shadow-lg shadow-cyan-500/40" />

      <span className="text-sm font-medium text-cyan-400">
        {year}
      </span>

      <div className="glass mt-3 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
        <h3 className="text-2xl font-semibold text-white">
          {title}
        </h3>

        <p className="mt-3 leading-7 text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
}