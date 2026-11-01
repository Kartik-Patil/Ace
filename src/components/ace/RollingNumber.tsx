import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

interface RollingNumberProps {
  value: string;
  className?: string;
  inView?: boolean;
  duration?: number;
}

/**
 * Single rolling digit column.
 * Cycles through 0-9 multiple times before settling on target digit,
 * creating an authentic mechanical odometer / countdown roll effect.
 */
function DigitColumn({
  target,
  inView,
  digitIndex,
  totalDigits,
  baseDuration = 1600,
}: {
  target: number;
  inView: boolean;
  digitIndex: number;
  totalDigits: number;
  baseDuration?: number;
}) {
  // Stagger cycle count so rightmost digits spin slightly longer
  const extraCycles = 2 + digitIndex * 0.4;
  const fullCycles = Math.floor(extraCycles);

  // Build the vertical strip of numbers
  // [0..9, 0..9, ... target]
  const sequence: number[] = [];
  for (let c = 0; c < fullCycles; c++) {
    for (let d = 0; d <= 9; d++) {
      sequence.push(d);
    }
  }
  // Add final run up to target
  for (let d = 0; d <= target; d++) {
    sequence.push(d);
  }

  const targetIndex = sequence.length - 1;
  const duration = baseDuration + digitIndex * 150;
  const delay = digitIndex * 60;

  return (
    <span className="relative inline-block h-[1.18em] overflow-hidden leading-[1.18em] tabular-nums align-top">
      <span
        className="flex flex-col will-change-transform"
        style={{
          transform: inView
            ? `translateY(-${(targetIndex / sequence.length) * 100}%)`
            : "translateY(0%)",
          transitionProperty: "transform",
          transitionDuration: `${duration}ms`,
          transitionDelay: `${delay}ms`,
          transitionTimingFunction: "cubic-bezier(0.12, 0.98, 0.24, 1)",
        }}
      >
        {sequence.map((num, i) => (
          <span
            key={i}
            className="flex h-[1.18em] items-center justify-center select-none"
            aria-hidden={i !== targetIndex}
          >
            {num}
          </span>
        ))}
      </span>
    </span>
  );
}

/**
 * RollingNumber Component
 * Splits strings like "500+", "2022", "3", "100%" into individual rolling reels for digits
 * and static inline elements for symbols (+, %, etc.), with smooth scroll-triggered roll.
 */
export function RollingNumber({
  value,
  className,
  inView: externalInView,
  duration = 1600,
}: RollingNumberProps) {
  const { ref, inView: internalInView } = useInView({ threshold: 0.2 });
  const inView = externalInView !== undefined ? externalInView : internalInView;

  // Split value into characters
  const chars = value.split("");

  // Count total digits for delay/duration calculation
  const totalDigits = chars.filter((c) => /\d/.test(c)).length;
  let digitCounter = 0;

  return (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-baseline justify-center tracking-tight",
        className
      )}
      aria-label={value}
    >
      {chars.map((char, idx) => {
        const isDigit = /\d/.test(char);

        if (isDigit) {
          const digit = parseInt(char, 10);
          const currentDigitIdx = digitCounter++;

          return (
            <DigitColumn
              key={idx}
              target={digit}
              inView={inView}
              digitIndex={currentDigitIdx}
              totalDigits={totalDigits}
              baseDuration={duration}
            />
          );
        }

        // Non-digit symbol (e.g. "+", "%")
        return (
          <span
            key={idx}
            className="inline-block transition-all duration-700 select-none"
            style={{
              opacity: inView ? 1 : 0.4,
              transform: inView ? "scale(1)" : "scale(0.85)",
              transitionDelay: `${duration + 100}ms`,
            }}
          >
            {char}
          </span>
        );
      })}
    </span>
  );
}

