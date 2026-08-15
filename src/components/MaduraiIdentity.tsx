import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function MaduraiIdentity() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const lineX = useTransform(scrollYProgress, [0, 1], ['-50%', '50%']);
  const labelY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-ink-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left - headline */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-ember" />
              <span className="text-label text-ink-300">LOCAL / GLOBAL</span>
            </div>
            <h2 className="mt-6 font-display text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[0.9] tracking-tightest text-ink-50">
              MADE IN<br />
              <span className="text-ember">MADURAI.</span><br />
              BUILT FOR<br />
              <span className="text-ink-500">EVERYWHERE.</span>
            </h2>
          </div>

          {/* Right - supporting text + animated coordinate grid */}
          <div className="flex flex-col justify-end lg:col-span-5">
            <motion.div
              style={{ y: labelY }}
              className="mb-8 rounded-lg border border-ink-700 bg-ink-950 p-6"
            >
              <div className="font-mono text-xs text-ink-500">
                COORDINATES
              </div>
              <div className="mt-2 font-mono text-2xl text-ink-100">
                9.9252°N, 78.1197°E
              </div>
              <div className="mt-1 text-sm text-ink-400">
                Madurai, Tamil Nadu, India
              </div>
              <div className="mt-4 flex gap-1">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="h-6 w-px bg-ink-600"
                    animate={{ scaleY: [1, 0.3, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.05,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </div>
              <div className="mt-2 font-mono text-xs text-ember">
                ◉ SIGNAL ACTIVE
              </div>
            </motion.div>

            <p className="text-base leading-relaxed text-ink-300 sm:text-lg">
              We work with businesses in Madurai and clients beyond it, combining local understanding with modern digital execution.
            </p>
          </div>
        </div>

        {/* Animated coordinate line */}
        <motion.div
          style={{ x: lineX }}
          className="mt-16 flex items-center gap-4 whitespace-nowrap"
        >
          <span className="font-mono text-xs text-ink-700">9.9252°N 78.1197°E → ∞</span>
          <span className="h-px w-full bg-gradient-to-r from-transparent via-ink-700 to-transparent" />
          <span className="font-mono text-xs text-ink-700">MADURAI → WORLDWIDE</span>
        </motion.div>
      </div>
    </section>
  );
}
