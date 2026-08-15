import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const duration = 1400;
    const interval = 20;
    const steps = duration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      const pct = Math.round((current / steps) * 100);
      setProgress(Math.min(pct, 100));
      if (pct >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setVisible(false);
          onComplete();
        }, 250);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink-950"
          exit={{ opacity: 0, transition: { duration: 0.4, ease: 'easeInOut' } }}
        >
          <div className="flex items-center gap-2 overflow-hidden">
            <motion.span
              className="font-display text-4xl font-bold tracking-tightest text-ink-50 sm:text-5xl"
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              NAVA
            </motion.span>
            <motion.span
              className="font-display text-4xl font-bold tracking-tightest text-ember sm:text-5xl"
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              WEB
            </motion.span>
          </div>
          <div className="mt-8 h-px w-48 overflow-hidden bg-ink-700 sm:w-64">
            <motion.div
              className="h-full bg-ember"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="mt-3 font-mono text-xs text-ink-400">
            {String(progress).padStart(3, '0')}%
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
