type SectionHeaderProps = {
  badge: string;
  title: string;
  subtitle: string;
};

export default function SectionHeader({
  badge,
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
        {badge && (
          <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-400">
            {badge}
          </span>
        )}

      <h2 className="mt-5 text-5xl font-extrabold tracking-tight">
        <span className="gradient-text">{title}</span>
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-400">
        {subtitle}
      </p>
    </div>
  );
}