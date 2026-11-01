import type { HTMLAttributes } from "react";

export interface AceWordProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Set true when displayed over dark backgrounds (e.g. navy hero, dark cards, footer)
   * so the blue and yellow letters maintain optimal contrast.
   */
  dark?: boolean;
}

/**
 * Renders the brand name "ace" following the official logo:
 * - All lowercase letters: "ace"
 * - 'a' in blue
 * - 'c' in yellow
 * - 'e' in blue
 * - Optically scaled up (text-[1.18em] font-black) so the lowercase letters
 *   stand out prominently and visually match surrounding capitalized words.
 */
export function AceWord({ dark, className = "", ...props }: AceWordProps) {
  // Logo brand colors:
  // Blue: Deep royal/indigo #2a2273 on light backgrounds, bright azure/sky #38bdf8 on dark
  // Yellow: Warm golden yellow #fdb435 on dark, vibrant amber/gold #d97706 on light
  const blueStyle = dark ? "text-sky-400" : "text-[#2a2273] dark:text-sky-400";
  const yellowStyle = dark ? "text-[#fdb435]" : "text-[#d97706] dark:text-[#fdb435]";

  return (
    <span
      className={`inline-block lowercase font-black text-[1.18em] leading-none tracking-tight align-baseline select-none ${className}`}
      {...props}
    >
      <span className={blueStyle}>a</span>
      <span className={yellowStyle}>c</span>
      <span className={blueStyle}>e</span>
    </span>
  );
}

export const Ace = AceWord;
