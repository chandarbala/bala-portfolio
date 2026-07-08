type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
};

export default function Button({
  children,
  variant = "primary",
  onClick,
}: ButtonProps) {
  // const base =
  //   "px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer";
  const base =
      "px-7 py-3 rounded-2xl font-semibold transition-all duration-300 cursor-pointer hover:-translate-y-1";
  const styles = {
    primary:
      "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-lg hover:shadow-cyan-500/40",

    secondary:
      "bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white shadow-lg hover:shadow-violet-500/40",

    outline:
      "border border-white/10 bg-white/5 hover:bg-white/10 text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </button>
  );
}