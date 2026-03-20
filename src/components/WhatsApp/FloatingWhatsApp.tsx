"use client";

import React, { useMemo } from "react";

function digitsOnly(input: string) {
  return input.replace(/[^\d]/g, "");
}

function getWhatsAppHref(): string | null {
  // Support both formats:
  // 1) Raw number in env: "54911xxxxxx"  -> https://wa.me/54911xxxxxx
  // 2) Full URL in env: "https://wa.me/54911xxxxxx?text=" -> use as-is
  const raw =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ??
    process.env.NEXT_PUBLIC_WHATSAPP ??
    "";

  const value = raw.trim();
  if (!value) return null;

  if (value.includes("wa.me")) return value;

  const phone = digitsOnly(value);
  if (!phone) return null;

  return `https://wa.me/${phone}`;
}

const WhatsAppIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 32 32"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19.08 18.53c-.52-.26-2.8-1.37-3.23-1.54-.43-.17-.74-.26-.9.26-.17.52-.94 1.3-1.15 1.57-.22.26-.43.3-.95.04-.52-.26-2.2-.81-4.2-2.58-1.55-1.38-2.6-3.08-2.9-3.6-.3-.52-.03-.8.22-1.05.2-.2.44-.5.66-.75.22-.25.29-.43.43-.72.14-.3.07-.55-.03-.81-.1-.26-.9-2.17-1.23-2.98-.32-.78-.65-.68-.9-.69h-.77c-.26 0-.68.1-1.04.52-.36.41-1.37 1.34-1.37 3.26 0 1.91 1.41 3.74 1.61 3.99.2.25 2.78 4.25 6.74 5.96.94.41 1.67.65 2.24.83.94.3 1.8.26 2.47.16.75-.11 2.3-.93 2.62-1.83.32-.9.32-1.67.22-1.83-.1-.16-.36-.26-.88-.52z" />
    <path d="M16 3C8.82 3 3 8.82 3 16c0 2.86.93 5.5 2.5 7.66L5 29l5.5-1.47c2.13 1.22 4.63 1.92 7.5 1.92 7.18 0 13-5.82 13-13S23.18 3 16 3zm0 24.5c-2.6 0-5-0.72-7-2l-.5-.3-3 0.8 0.8-3-.3-.5c-1.3-2-2-4.4-2-7 0-5.8 4.7-10.5 10.5-10.5S26.5 10.2 26.5 16 21.8 27.5 16 27.5z" />
  </svg>
);

const FloatingWhatsApp = () => {
  const href = useMemo(() => getWhatsAppHref(), []);
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      // Move above the "scroll to top" button (which is fixed at right-8 bottom-8).
      className="fixed bottom-20 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.35)] transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
};

export default FloatingWhatsApp;

