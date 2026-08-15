import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { processSteps } from '@/data/content';

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.6', 'end 0.6'],
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="process" ref={sectionRef} className="relative w-full bg-ink-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-20 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-ember" />
            <span className="text-label text-ink-300">PROCESS / 05 STEPS</span>
          </div>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-bold leading-[0.95] tracking-tight text-ink-50">
            HOW WE<br />
            <span className="text-ink-500">WORK.</span>
          </h2>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Base line */}
            <div className="absolute top-5 left-0 right-0 h-px bg-ink-700">
              <motion.div
                className="h-full bg-ember origin-left"
                style={{ scaleX: scrollYProgress }}
              />
            </div>

            <div className="relative grid grid-cols-5 gap-4">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="flex flex-col"
                >
                  <div className="relative z-10 mb-6 flex h-10 w-10 items-center justify-center rounded-full border border-ink-600 bg-ink-900">
                    <span className="font-mono text-xs text-ember">{step.number}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-ink-50">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-400">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden">
          <div className="relative ml-5 border-l border-ink-700">
            <motion.div
              className="absolute top-0 left-0 w-px bg-ember origin-top"
              style={{ scaleY: scrollYProgress }}
            />
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative mb-12 pl-8 last:mb-0"
              >
                <div className="absolute -left-[7px] top-0 h-3.5 w-3.5 rounded-full border border-ember bg-ink-900" />
                <h3 className="font-display text-lg font-semibold tracking-tight text-ink-50">
                  <span className="font-mono text-sm text-ember mr-2">{step.number}</span>
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
