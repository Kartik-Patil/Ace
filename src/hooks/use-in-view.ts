import { useEffect, useRef, useState } from "react";

/**
 * Returns a ref and a boolean `inView`.
 * Once the element enters the viewport it stays `true` (fires once).
 */
export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          observer.disconnect(); // fire once
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px", ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView } as const;
}
