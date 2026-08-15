import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-ink-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left - headline */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-ember" />
              <span className="text-label text-ink-300">ABOUT</span>
            </div>
            <h2 className="mt-6 font-display text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[0.9] tracking-tightest text-ink-50">
              SMALL STUDIO.<br />
              <span className="text-ink-500">BIG IDEAS.</span>
            </h2>
          </div>

          {/* Right - founder section */}
          <div className="flex flex-col justify-end lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-lg border border-ink-700 bg-ink-900 p-6 sm:p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-ink-600 bg-ink-950">
                    <span className="font-display text-xl font-bold text-ember">N</span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink-50">
                      Naveen Kumar
                    </h3>
                    <p className="text-sm text-ink-400">
                      Founder / Web Developer
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-base leading-relaxed text-ink-300">
                  I started NavaWeb Studio to bring premium-level websites to businesses that deserve them — without the agency price tag. Every project gets my full attention, from first sketch to final deploy.
                </p>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-ink-700 pt-6">
                  {['React', 'TypeScript', 'Supabase', 'Tailwind', 'Framer Motion', 'Node.js'].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-ink-700 px-3 py-1 text-xs text-ink-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
