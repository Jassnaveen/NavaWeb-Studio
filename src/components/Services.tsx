import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ArrowUpRight } from 'lucide-react';
import { services } from '@/data/content';

export default function Services() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="services" className="relative w-full bg-ink-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-ember" />
            <span className="text-label text-ink-300">SERVICES / 06</span>
          </div>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-bold leading-[0.95] tracking-tight text-ink-50">
            WHAT WE<br />
            <span className="text-ink-500">DO.</span>
          </h2>
        </div>

        {/* Service list */}
        <div className="border-t border-ink-800">
          {services.map((service, i) => {
            const isOpen = expanded === i;
            return (
              <div
                key={service.number}
                className="border-b border-ink-800 transition-colors hover:bg-ink-900/40"
              >
                <button
                  onClick={() => setExpanded(isOpen ? null : i)}
                  className="flex w-full items-center justify-between py-6 text-left sm:py-8"
                  data-cursor="link"
                >
                  <div className="flex items-center gap-6 sm:gap-12">
                    <span
                      className={`font-mono text-sm transition-colors ${
                        isOpen ? 'text-ember' : 'text-ink-500'
                      }`}
                    >
                      {service.number}
                    </span>
                    <span
                      className={`font-display text-xl font-semibold tracking-tight transition-all sm:text-3xl lg:text-4xl ${
                        isOpen
                          ? 'text-ink-50 translate-x-2'
                          : 'text-ink-200'
                      }`}
                    >
                      {service.title.toUpperCase()}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink-700"
                  >
                    <Plus size={18} className={isOpen ? 'text-ember' : 'text-ink-400'} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 gap-6 pb-8 pl-0 sm:grid-cols-12 sm:pl-20">
                        <p className="text-base leading-relaxed text-ink-300 sm:col-span-6 lg:col-span-5">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2 sm:col-span-5 lg:col-start-8">
                          {service.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-ink-700 px-3 py-1 text-xs text-ink-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
