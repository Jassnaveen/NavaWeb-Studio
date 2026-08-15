import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { workflowSteps } from '@/data/content';

export default function AIWorkflow() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.8', 'end 0.4'],
  });

  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={sectionRef} className="relative w-full bg-ink-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-20 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-ember" />
              <span className="text-label text-ink-300">BUILT DIFFERENT</span>
            </div>
            <h2 className="mt-6 font-display text-[clamp(2rem,5vw,4rem)] font-bold leading-[0.95] tracking-tight text-ink-50">
              AI HELPS US<br />
              <span className="text-ink-500">MOVE FASTER.</span>
            </h2>
          </div>
          <div className="flex items-end lg:col-span-5 lg:col-start-8">
            <p className="text-lg leading-relaxed text-ink-300">
              Human thinking makes the result matter. We use AI to accelerate the process — not replace the craft.
            </p>
          </div>
        </div>

        {/* Vertical workflow on mobile, horizontal on desktop */}
        <div className="hidden lg:block">
          <div className="relative flex items-start justify-between">
            {/* Horizontal progress line */}
            <div className="absolute top-6 left-0 right-0 h-px bg-ink-700">
              <motion.div
                className="h-full bg-ember origin-left"
                style={{ scaleX: lineScaleY }}
              />
            </div>

            {workflowSteps.map((step, i) => (
              <div key={i} className="relative z-10 flex w-1/5 flex-col items-center px-2">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: i * 0.15, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-ink-600 bg-ink-950"
                >
                  <span className="font-mono text-xs text-ember">0{i + 1}</span>
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.2 }}
                  className="mt-5 text-center font-display text-lg font-semibold tracking-tight text-ink-50"
                >
                  {step.label}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.3 }}
                  className="mt-2 text-center text-sm text-ink-400"
                >
                  {step.description}
                </motion.p>
                {i < workflowSteps.length - 1 && (
                  <span className="mt-3 text-ink-600">→</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="lg:hidden">
          <div className="relative ml-6 border-l border-ink-700">
            <motion.div
              className="absolute top-0 left-0 w-px bg-ember origin-top"
              style={{ scaleY: lineScaleY }}
            />
            {workflowSteps.map((step, i) => (
              <div key={i} className="relative pb-12 pl-8 last:pb-0">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="absolute -left-[7px] top-0 flex h-3.5 w-3.5 items-center justify-center rounded-full border border-ember bg-ink-950"
                />
                <h3 className="font-display text-lg font-semibold tracking-tight text-ink-50">
                  {step.label}
                </h3>
                <p className="mt-1 text-sm text-ink-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
