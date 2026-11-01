import { type ReactNode, type CSSProperties, type ElementType } from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

export type RevealVariant = "fade-up" | "fade-in" | "slide-left" | "slide-right" | "zoom-in" | "blur-in";

interface RevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
  as?: ElementType;
  threshold?: number;
}

export function Reveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 600,
  className,
  as: Tag = "div",
  threshold,
}: RevealProps) {
  const { ref, inView } = useInView({ threshold: threshold ?? 0.12 });

  const style: CSSProperties = {
    transitionDuration: `${duration}ms`,
    transitionDelay: inView ? `${delay}ms` : "0ms",
  };

  return (
    <Tag
      ref={ref}
      className={cn("reveal", `reveal-${variant}`, inView && "reveal-visible", className)}
      style={style}
    >
      {children}
    </Tag>
  );
}
