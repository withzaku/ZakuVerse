"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { WHATSAPP_URL } from "@/lib/contact";

export function FloatingWhatsAppButton() {
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    /* Bounce-in entrance */
    gsap.fromTo(btnRef.current,
      { scale: 0, autoAlpha: 0 },
      { scale: 1, autoAlpha: 1, duration: 0.65, ease: "back.out(1.8)", delay: 1.2 },
    );
    /* Pulse ring */
    gsap.to(btnRef.current, {
      boxShadow: "0 0 0 12px rgba(51,221,102,0)",
      duration: 1.6, repeat: -1, ease: "power2.out",
    });
  }, []);

  return (
    <a
      ref={btnRef}
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with ZakuVerse on WhatsApp"
      className="fixed bottom-6 right-6 z-[70] inline-flex items-center gap-2.5 rounded-full border border-primary/60 bg-primary/14 px-5 py-3 text-sm font-semibold text-primary shadow-[0_0_24px_rgba(51,221,102,0.32)] backdrop-blur-sm transition-all duration-300 hover:bg-primary hover:text-black hover:shadow-[0_0_40px_rgba(51,221,102,0.55)]"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden>
        <path d="M20.5 3.5A11 11 0 0 0 3.24 16.8L2 22l5.34-1.2A11 11 0 1 0 20.5 3.5Zm-8.47 17.03a9.15 9.15 0 0 1-4.66-1.27l-.33-.2-3.17.71.75-3.09-.22-.32a9.16 9.16 0 1 1 7.63 4.17Zm5.02-6.83c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.62.14-.18.27-.7.88-.85 1.06-.16.18-.3.2-.57.07-.27-.14-1.13-.42-2.15-1.33-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.3.41-.45.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.06-.22-.52-.45-.45-.62-.46h-.53c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.34.99 2.64 1.13 2.82.14.18 1.95 2.97 4.73 4.16.66.28 1.18.45 1.59.58.67.21 1.27.18 1.75.11.53-.08 1.6-.65 1.82-1.27.23-.61.23-1.14.16-1.25-.07-.11-.25-.18-.52-.32Z"/>
      </svg>
      WhatsApp
    </a>
  );
}
