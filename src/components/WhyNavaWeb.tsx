import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const statements = [
  {
    title: ['WE THINK ABOUT', 'YOUR CUSTOMER.'],
    body: 'Every decision starts with the person on the other side of the screen. What do they need? What builds trust? What makes them act?',
  },
  {
    title: ['WE DESIGN FOR', 'YOUR BUSINESS.'],
    body: 'Beautiful is the baseline. We design with your goals wired in — enquiries, sales, sign-ups, whatever success looks like for you.',
  },
  {
    title: ['WE BUILD FOR', 'THE REAL WORLD.'],
    body: 'Fast loading, mobile-ready, easy to manage. Your website should work hard long after we hand it over — not just look good in a portfolio.',
  },
];

export default function WhyNavaWeb() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%']);

  return (
    <section ref={sectionRef} className="relative w-full bg-ink-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Main heading */}
        <div className="mb-20 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-ember" />
            <span className="text-label text-ink-300">WHY NAVAWEB</span>
          </div>
          <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[0.9] tracking-tightest text-ink-50">
            NOT JUST<br />
            <span className="text-ink-500">A WEBSITE.</span>
          </h2>
        </div>

        {/* Progressive statements with scroll line */}
        <div className="relative pl-8 sm:pl-16">
          {/* Vertical progress line */}
          <div className="absolute left-0 top-0 h-full w-px bg-ink-700">
            <motion.div
              className="absolute top-0 left-0 w-full bg-ember"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-20 sm:space-y-28">
            {statements.map((stmt, i) => (
              <ScrollReveal key={i} index={i}>
                <div className="flex flex-col gap-6">
                  <div className="font-mono text-sm text-ember">
                    0{i + 1}
                  </div>
                  <h3 className="font-display text-[clamp(1.75rem,4.5vw,3.5rem)] font-semibold leading-[1] tracking-tight text-ink-50">
                    {stmt.title[0]}<br />
                    <span className="text-ink-300">{stmt.title[1]}</span>
                  </h3>
                  <p className="max-w-lg text-base leading-relaxed text-ink-400 sm:text-lg">
                    {stmt.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ScrollReveal({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'start 0.4'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.15, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      transition={{ delay: index * 0.1 }}
    >
      {children}
    </motion.div>
  );
}
