import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { pricingTiers } from '@/data/content';

export default function Pricing() {
  return (
    <section id="pricing" className="relative w-full bg-ink-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-ember" />
            <span className="text-label text-ink-300">PRICING / 03 TIERS</span>
          </div>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-bold leading-[0.95] tracking-tight text-ink-50">
            CHOOSE YOUR<br />
            <span className="text-ink-500">PLAN.</span>
          </h2>
        </div>

        {/* Editorial comparison layout */}
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-ink-800 bg-ink-800 md:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`flex flex-col p-8 sm:p-10 ${
                tier.highlighted ? 'bg-ink-900' : 'bg-ink-950'
              }`}
            >
              {tier.highlighted && (
                <span className="mb-4 w-fit rounded-full bg-ember/10 px-3 py-1 text-xs font-medium text-ember">
                  MOST POPULAR
                </span>
              )}

              <h3 className="font-display text-sm font-semibold tracking-label text-ink-100">
                {tier.name.toUpperCase()}
              </h3>

              <div className="mt-4 flex items-baseline gap-1">
                <span className={`font-display text-4xl font-bold tracking-tight sm:text-5xl ${tier.highlighted ? 'text-ember' : 'text-ink-50'}`}>
                  {tier.price}
                </span>
                <span className="text-2xl text-ink-500">{tier.suffix}</span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-ink-400">
                {tier.description}
              </p>

              <ul className="mt-8 space-y-3 border-t border-ink-800 pt-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-ink-300">
                    <Check size={16} className={`mt-0.5 shrink-0 ${tier.highlighted ? 'text-ember' : 'text-ink-500'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`mt-8 flex items-center justify-center gap-2 rounded-full py-3 text-sm font-medium transition-all ${
                  tier.highlighted
                    ? 'bg-ember text-ink-950 hover:bg-ember-light'
                    : 'border border-ink-700 text-ink-100 hover:border-ink-500'
                }`}
              >
                GET STARTED
                <ArrowRight size={15} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Custom project CTA */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 border-t border-ink-800 pt-12 text-center">
          <p className="font-display text-xl font-medium text-ink-200 sm:text-2xl">
            CUSTOM PROJECT?
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-base font-medium text-ember transition-colors hover:text-ember-light"
          >
            LET'S TALK
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
