import { useEffect, useRef, useState, type ImgHTMLAttributes, type ReactNode } from "react";

type Props = ImgHTMLAttributes<HTMLImageElement> & { fallback: ReactNode };

/** Renders an image, swapping to `fallback` if it fails (including failures before hydration). */
export function SafeImage({ fallback, onError, ...img }: Props) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, [img.src]);

  if (failed || !img.src) return <>{fallback}</>;
  return (
    <img
      ref={ref}
      {...img}
      onError={(e) => {
        setFailed(true);
        onError?.(e);
      }}
    />
  );
}

export function LogoFallback({ className = "", onDark = false }: { className?: string; onDark?: boolean }) {
  return (
    <span className={`inline-flex items-baseline gap-2 font-display leading-none ${className}`} role="img" aria-label="ACE – Education Redefined">
      <span className={`text-3xl font-bold ${onDark ? "text-gold" : "text-primary"}`}>ACE</span>
      <span className={`text-[0.65rem] font-semibold uppercase tracking-widest ${onDark ? "opacity-80" : "text-muted-foreground"}`}>Education Redefined</span>
    </span>
  );
}

export function initials(name: string) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]!.toUpperCase()).join("");
}
