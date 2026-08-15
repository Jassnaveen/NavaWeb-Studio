const items = [
  'WEBSITE DESIGN',
  'DEVELOPMENT',
  'E-COMMERCE',
  'BRAND EXPERIENCES',
  'AI-POWERED WORKFLOWS',
  'LANDING PAGES',
  'PORTFOLIOS',
  'MAINTENANCE',
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="relative w-full overflow-hidden border-y border-ink-800 bg-ink-950 py-4">
      <div className="flex w-max animate-marquee">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="px-6 font-display text-sm font-medium tracking-label text-ink-300">
              {item}
            </span>
            <span className="text-ember">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
