import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks, siteConfig, openWhatsApp } from '@/data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 40);
  });

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-[150] px-4 pt-4"
      >
        <nav
          className={`mx-auto flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
            scrolled
              ? 'max-w-3xl bg-ink-900/80 backdrop-blur-xl border border-ink-700/60 py-2.5'
              : 'max-w-5xl bg-ink-900/30 backdrop-blur-md border border-ink-700/30'
          }`}
        >
          <button
            onClick={() => handleNavClick('#home')}
            className="font-display text-sm font-bold tracking-tighter text-ink-50"
          >
            {siteConfig.shortName}
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const active = activeSection === id;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="relative px-3 py-1.5 text-sm transition-colors"
                >
                  <span className={active ? 'text-ink-50' : 'text-ink-400 hover:text-ink-200'}>
                    {link.label}
                  </span>
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-0.5 left-1/2 h-px w-4 -translate-x-1/2 bg-ember"
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={openWhatsApp}
              className="group hidden items-center gap-2 rounded-full bg-ember px-4 py-2 text-sm font-medium text-ink-950 transition-all hover:bg-ember-light md:flex"
            >
              START A PROJECT
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-700 text-ink-100 md:hidden"
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[180] flex flex-col bg-ink-950 md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-display text-sm font-bold tracking-tighter text-ink-50">
                {siteConfig.shortName}
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-700 text-ink-100"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-2 px-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  onClick={() => handleNavClick(link.href)}
                  className="border-b border-ink-800 py-4 text-left font-display text-3xl font-semibold tracking-tight text-ink-100"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={openWhatsApp}
                className="mt-8 flex items-center justify-center gap-2 rounded-full bg-ember px-6 py-4 text-base font-medium text-ink-950"
              >
                START A PROJECT →
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
