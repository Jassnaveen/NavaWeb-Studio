import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/data/content';

export default function Portfolio() {
  return (
    <section id="work" className="relative w-full bg-ink-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-20 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-ember" />
            <span className="text-label text-ink-300">SELECTED WORK / 03</span>
          </div>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-bold leading-[0.95] tracking-tight text-ink-50">
            RECENT<br />
            <span className="text-ink-500">PROJECTS.</span>
          </h2>
        </div>

        {/* Project showcases */}
        <div className="space-y-24 sm:space-y-32">
          {projects.map((project, i) => (
            <ProjectShowcase key={project.number} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectShowcaseProps {
  project: typeof projects[0];
  index: number;
}

function ProjectShowcase({ project, index }: ProjectShowcaseProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const numberOpacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0.1, 1, 1, 0.1]);
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative">
      <div className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12`}>
        {/* Image */}
        <div className={`lg:col-span-7 ${isLeft ? 'lg:order-1' : 'lg:order-2'}`}>
          <a href={project.href} data-cursor="view" className="group block">
            <div className="relative overflow-hidden rounded-lg border border-ink-700">
              <motion.img
                src={project.image}
                alt={project.title}
                style={{ y: imageY }}
                className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          </a>
        </div>

        {/* Text */}
        <div className={`lg:col-span-5 ${isLeft ? 'lg:order-2' : 'lg:order-1'}`}>
          {/* Large project number */}
          <motion.div
            style={{ opacity: numberOpacity }}
            className="mb-4 font-display text-[clamp(4rem,10vw,8rem)] font-bold leading-none tracking-tightest text-ink-800"
          >
            {project.number}
          </motion.div>

          <span className="text-label text-ember">{project.category}</span>
          <h3 className="mt-3 font-display text-[clamp(1.5rem,3.5vw,2.5rem)] font-semibold leading-[1.05] tracking-tight text-ink-50">
            {project.title.toUpperCase()}
          </h3>
          <p className="mt-3 text-base text-ink-400">{project.description}</p>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-ink-700 px-3 py-1 text-xs text-ink-400"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={project.href}
            className="group mt-8 inline-flex items-center gap-2 border-b border-ink-600 pb-1 text-sm font-medium text-ink-100 transition-colors hover:border-ember hover:text-ember"
          >
            VIEW CASE STUDY
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
}
