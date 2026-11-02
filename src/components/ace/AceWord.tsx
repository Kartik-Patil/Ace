import type { HTMLAttributes } from "react";

export interface AceWordProps extends HTMLAttributes<HTMLSpanElement> {
  dark?: boolean;
}

/**
 * Renders the brand name "ACE" in uppercase standard brand styling.
 */
export function AceWord({ dark, className = "", ...props }: AceWordProps) {
  return (
    <span className={`inline-block font-bold tracking-tight select-none ${className}`} {...props}>
      ACE
    </span>
  );
}

export const Ace = AceWord;
