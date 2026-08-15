import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FeaturedProject() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.15, 0.3]);

  return (
    <section className="relative w-full overflow-hidden bg-ink-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <span className="h-px w-8 bg-ember" />
          <span className="text-label text-ink-300">FEATURED WORK</span>
        </div>

        <div ref={ref} className="relative overflow-hidden rounded-xl border border-ink-700">
          <motion.img
            src="https://images.pexels.com/photos/34307855/pexels-photo-34307855.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="PS Catering & Events"
            style={{ y: imageY }}
            className="h-[400px] w-full scale-110 object-cover sm:h-[600px]"
            loading="lazy"
          />
          <motion.div
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/50 to-ink-950/20"
          />

          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-12 lg:p-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-label text-ember">PS CATERING & EVENTS</span>
              <h2 className="mt-3 max-w-2xl font-display text-[clamp(1.75rem,5vw,4rem)] font-bold leading-[1] tracking-tight text-ink-50">
                A website built to turn<br />visitors into enquiries.
              </h2>
              <a
                href="#work"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3.5 text-sm font-medium text-ink-950 transition-all hover:bg-ember-light"
              >
                VIEW PROJECT
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
