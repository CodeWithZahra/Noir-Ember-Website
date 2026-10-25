import { useEffect, useRef, useState } from 'react';

// Scroll reveal (same behaviour as the original IntersectionObserver script).
// Usage: const [ref, cls] = useReveal(); <div ref={ref} className={cls} />
export default function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, visible ? 'animate-reveal' : 'opacity-0'];
}
