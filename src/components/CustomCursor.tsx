import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [variant, setVariant] = useState<'default' | 'link' | 'view'>('default');
  const [visible, setVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 28, stiffness: 350, mass: 0.3 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (isTouch) return;

    const move = (e: MouseEvent) => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      });

      const target = e.target as HTMLElement;
      if (!target) return;

      if (target.closest('[data-cursor="view"]')) {
        setVariant('view');
      } else if (target.closest('a, button, [data-cursor="link"]')) {
        setVariant('link');
      } else {
        setVariant('default');
      }
    };

    const enter = () => setVisible(true);
    const leave = () => setVisible(false);

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseenter', enter);
    document.addEventListener('mouseleave', leave);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseenter', enter);
      document.removeEventListener('mouseleave', leave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [cursorX, cursorY]);

  if (!visible && cursorX.get() === -100) return null;

  const size = variant === 'view' ? 64 : variant === 'link' ? 44 : 14;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[300] hidden md:flex items-center justify-center rounded-full"
      style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      animate={{
        width: size,
        height: size,
        backgroundColor: variant === 'default' ? 'rgba(234,234,234,0.5)' : 'rgba(217,119,66,0.1)',
        border: variant === 'default' ? '1px solid rgba(234,234,234,0.4)' : '1px solid rgba(217,119,66,0.5)',
      }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      {variant === 'view' && (
        <span className="text-label text-ember">VIEW</span>
      )}
    </motion.div>
  );
}
