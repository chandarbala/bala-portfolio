type CardProps = {
  title: string;
  value: string;
};

export default function Card({ title, value }: CardProps) {
  return (
    <div className="glass rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30">
      <h3 className="text-4xl font-bold text-cyan-400">
        {value}
      </h3>

      <p className="mt-2 text-slate-400">
        {title}
      </p>
    </div>
  );
}