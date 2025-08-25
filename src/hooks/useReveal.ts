import { useEffect } from 'react';
import { useAnimate } from 'framer-motion';

export function useReveal<T extends HTMLElement>() {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    const el = scope.current as T | null;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(el, { opacity: [0, 1], y: [12, 0] }, { duration: 0.6, ease: 'easeOut' });
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [animate, scope]);
  return scope;
}
