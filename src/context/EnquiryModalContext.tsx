import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

interface EnquiryModalContextValue {
  isOpen: boolean;
  defaultProgram: string;
  openModal: (program?: string) => void;
  closeModal: () => void;
}

const EnquiryModalContext = createContext<EnquiryModalContextValue | null>(null);

export function EnquiryModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultProgram, setDefaultProgram] = useState("");

  const openModal = (program = "") => {
    setDefaultProgram(program);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // Support global custom event and any href="#enquire" click so any link/button can open the modal
  useEffect(() => {
    const handleGlobalOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ program?: string }>;
      openModal(customEvent.detail?.program || "");
    };

    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a[href="#enquire"], a[href$="#enquire"]');
      if (target) {
        e.preventDefault();
        openModal();
      }
    };

    window.addEventListener("open-enquiry-modal", handleGlobalOpen);
    document.addEventListener("click", handleAnchorClick);

    // If user lands with #enquire, open the modal smoothly
    if (typeof window !== "undefined" && window.location.hash === "#enquire") {
      openModal();
    }

    return () => {
      window.removeEventListener("open-enquiry-modal", handleGlobalOpen);
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <EnquiryModalContext.Provider value={{ isOpen, defaultProgram, openModal, closeModal }}>
      {children}
    </EnquiryModalContext.Provider>
  );
}

export function useEnquiryModal() {
  const ctx = useContext(EnquiryModalContext);
  if (!ctx) {
    // Graceful fallback for components outside provider
    return {
      isOpen: false,
      defaultProgram: "",
      openModal: (program = "") => {
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("open-enquiry-modal", { detail: { program } }));
        }
      },
      closeModal: () => {},
    };
  }
  return ctx;
}
