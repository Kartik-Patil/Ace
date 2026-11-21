import React from "react";
import { contact } from "@/data/ace";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

function WhatsAppIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.83a8.21 8.21 0 0 1-5.82 2.41c-1.45 0-2.88-.38-4.14-1.11l-.3-.17-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.43c0-4.54 3.7-8.24 8.24-8.24m4.53 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.42 1.44.54.6.19 1.15.17 1.59.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.1-.23-.17-.48-.29" />
    </svg>
  );
}

export function FloatingActions() {
  const { openModal } = useEnquiryModal();

  const handleEnquireClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    openModal();
  };

  return (
    <aside
      aria-label="Quick Contact and Enquiry"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 sm:gap-3 filter drop-shadow-xl"
    >
      {/* WhatsApp Button */}
      <a
        href={contact.whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-full bg-white px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm font-bold text-primary shadow-lg border border-slate-200/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-emerald-500 hover:text-emerald-600 active:scale-95"
        title={`WhatsApp ${contact.phoneDisplay}`}
        aria-label="WhatsApp Us"
      >
        <span className="grid size-6 sm:size-7 place-items-center rounded-full bg-[#25D366] text-white shadow-xs">
          <WhatsAppIcon className="size-3.5 sm:size-4" />
        </span>
        <span className="font-extrabold tracking-tight">WhatsApp</span>
      </a>

      {/* Enquire Now Button */}
      <button
        type="button"
        onClick={handleEnquireClick}
        className="flex items-center gap-1.5 rounded-full bg-gold px-4 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-black text-gold-foreground shadow-lg border border-gold/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:brightness-105 active:scale-95 whitespace-nowrap cursor-pointer"
        aria-label="Enquire Now"
      >
        <span>Enquire Now</span>
      </button>
    </aside>
  );
}
