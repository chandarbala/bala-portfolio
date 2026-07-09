const navItems = [
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Github",
  "Contact",
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="mx-auto mt-4 flex w-[95%] max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4 shadow-lg shadow-black/20 backdrop-blur-xl">

        {/* Logo */}
        <a
          href="#hero"
          className="text-xl font-bold tracking-wide"
        >
          <span className="gradient-text">Bala</span>
          <span className="text-white">Chandar</span>
        </a>

        {/* Navigation */}
        <ul className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-slate-300 transition-all duration-300 hover:text-white"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}