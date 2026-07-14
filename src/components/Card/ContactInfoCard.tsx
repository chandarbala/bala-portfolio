type Props = {
  title: string;
  value: string;
};

export default function ContactInfoCard({
  title,
  value,
}: Props) {
  return (
    <div className="glass rounded-2xl p-5 transition-all duration-300 hover:border-cyan-500/30">
      <h3 className="text-cyan-400 font-semibold">
        {title}
      </h3>

      <p className="mt-2 break-words text-slate-300">
        {value}
      </p>
    </div>
  );
}