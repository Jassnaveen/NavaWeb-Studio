import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { openWhatsApp } from '@/data/content';

export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const yVal = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.15}px, ${yVal * 0.15}px)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = 'translate(0, 0)';
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="relative w-full overflow-hidden bg-ink-950 py-32 sm:py-40"
    >
      {/* Background grid */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 opacity-[0.04]"
      >
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(217,119,66,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(217,119,66,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-label text-ember">LET'S WORK TOGETHER</span>
        </motion.div>

        <h2 className="mt-8 font-display text-[clamp(3rem,12vw,11rem)] font-bold leading-[0.85] tracking-tightest text-ink-50">
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            HAVE AN IDEA?
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="block gradient-text-ember"
          >
            LET'S BUILD IT.
          </motion.span>
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 flex flex-col items-center gap-6"
        >
          <button
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={openWhatsApp}
            className="group flex items-center gap-3 rounded-full bg-ember px-10 py-5 text-base font-medium text-ink-950 transition-colors hover:bg-ember-light sm:px-12 sm:py-6 sm:text-lg"
            style={{ transition: 'transform 0.3s ease, background-color 0.3s ease' }}
          >
            START A PROJECT
            <ArrowRight size={22} className="transition-transform group-hover:translate-x-1" />
          </button>

<a
  href="mailto:naveen24505@gmail.com"
  className="text-sm text-ink-400 underline-offset-4 hover:text-ink-200 hover:underline"
>
  naveen24505@gmail.com
</a>
        </motion.div>
      </div>
    </section>
  );
}
