import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { openWhatsApp } from '@/data/content';
import HeroVisual from './HeroVisual';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const labelY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const numberY1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const numberY2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const numberY3 = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const scrollToServices = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-ink-950 pt-28"
    >
      {/* Floating labels - left side */}
      <motion.div
        style={{ y: numberY1 }}
        className="absolute left-4 top-[28%] z-10 hidden lg:block"
      >
        <div className="flex items-center gap-2 text-ink-500">
          <span className="font-mono text-xs text-ember">01</span>
          <span className="text-label">DESIGN</span>
        </div>
      </motion.div>
      <motion.div
        style={{ y: numberY2 }}
        className="absolute left-4 top-[52%] z-10 hidden lg:block"
      >
        <div className="flex items-center gap-2 text-ink-500">
          <span className="font-mono text-xs text-ember">02</span>
          <span className="text-label">DEVELOP</span>
        </div>
      </motion.div>
      <motion.div
        style={{ y: numberY3 }}
        className="absolute left-4 top-[72%] z-10 hidden lg:block"
      >
        <div className="flex items-center gap-2 text-ink-500">
          <span className="font-mono text-xs text-ember">03</span>
          <span className="text-label">DEPLOY</span>
        </div>
      </motion.div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 lg:grid-cols-12 lg:gap-4">
        {/* Left side */}
        <motion.div
          style={{ opacity: headlineOpacity }}
          className="lg:col-span-7 flex flex-col justify-center min-h-[80vh]"
        >
          <motion.div
            style={{ y: labelY }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-8 bg-ember" />
            <span className="text-label text-ink-300">
              MADURAI / INDIA — DIGITAL STUDIO
            </span>
          </motion.div>

          <h1 className="mt-6 font-display text-[clamp(2.75rem,8vw,7.5rem)] font-bold leading-[0.9] tracking-tightest text-ink-50">
            {['WE TURN', 'IDEAS', 'INTO', 'DIGITAL', 'EXPERIENCES.'].map((word, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  className={`block ${word === 'DIGITAL' ? 'gradient-text-ember' : ''}`}
                  initial={{ y: '100%' }}
                  animate={{ y: '0%' }}
                  transition={{
                    duration: 0.7,
                    delay: 0.3 + i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8 max-w-md text-base leading-relaxed text-ink-300 sm:text-lg"
          >
            AI-assisted design and development for ambitious businesses, brands and creators.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={openWhatsApp}
              className="group flex items-center gap-2 rounded-full bg-ember px-6 py-3.5 text-sm font-medium text-ink-950 transition-all hover:bg-ember-light"
            >
              START A PROJECT
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={scrollToServices}
              className="group flex items-center gap-2 rounded-full border border-ink-600 px-6 py-3.5 text-sm font-medium text-ink-100 transition-all hover:border-ink-400"
            >
              VIEW OUR WORK
              <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
            </button>
          </motion.div>
        </motion.div>

        {/* Right side - animated visual */}
        <motion.div
          style={{ y: visualY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="lg:col-span-5 relative min-h-[300px] lg:min-h-[80vh]"
        >
          <div className="relative h-full w-full overflow-hidden rounded-lg border border-ink-800">
            <HeroVisual />
            <div className="absolute bottom-4 left-4 z-10">
              <span className="text-label text-ink-400">BUILDING FROM</span>
              <br />
              <span className="text-label text-ember">MADURAI → WORLDWIDE</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
