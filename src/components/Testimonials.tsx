import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '@/data/content';

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative w-full bg-ink-900 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-ember" />
            <span className="text-label text-ink-300">CLIENT WORDS</span>
          </div>
        </div>

        {/* Large quotation */}
        <div className="relative min-h-[280px] sm:min-h-[240px]">
          <span className="absolute -top-8 -left-2 font-display text-8xl text-ink-800 sm:text-9xl">
            "
          </span>

          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <p className="font-display text-[clamp(1.5rem,4vw,3rem)] font-medium leading-[1.2] tracking-tight text-ink-50">
                {testimonials[active].quote}
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="h-px w-12 bg-ember" />
                <div>
                  <div className="text-sm font-medium text-ink-100">
                    {testimonials[active].name}
                  </div>
                  <div className="text-sm text-ink-400">
                    {testimonials[active].business}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-ember">
                    {testimonials[active].location}
                  </div>
                </div>
              </div>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        <div className="mt-12 flex items-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? 'w-8 bg-ember' : 'w-1.5 bg-ink-600 hover:bg-ink-400'
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
