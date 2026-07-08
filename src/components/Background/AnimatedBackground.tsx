export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Blue Orb */}
      <div className="animate-float absolute left-20 top-24 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />

      {/* Cyan Orb */}
      <div className="animate-float-delay absolute right-20 top-40 h-80 w-80 rounded-full bg-cyan-500/20 blur-[140px]" />

      {/* Purple Orb */}
      <div className="animate-float-slow absolute bottom-10 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[160px]" />

    </div>
  );
}