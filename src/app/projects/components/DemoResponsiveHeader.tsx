"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type DemoNavLink = {
  href: string;
  label: string;
};

type Props = {
  brandName: string;
  links: DemoNavLink[];
  /** Optional CTA (e.g. landing Presupuesto) */
  cta?: {
    label: string;
    href: string;
    backgroundColor: string;
  };
};

function IconMenu({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function IconClose({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

function digitsOnly(input: string) {
  return input.replace(/[^\d]/g, "");
}

function getWhatsAppHref(): string | null {
  // Support both formats:
  // 1) Raw number in env: "54911xxxxxx"      -> https://wa.me/54911xxxxxx
  // 2) Full URL in env: "https://wa.me/549.." -> use as-is
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

const instagramHref = "https://www.instagram.com/code.craftz/";

function IconWhatsApp({ className }: { className?: string }) {
  return (
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
}

function IconMail({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="22,6 12,13 2,6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M16.5 7.5h.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function DemoResponsiveHeader({
  brandName,
  links,
  cta,
}: Props) {
  const [open, setOpen] = useState(false);

  const whatsappHref = getWhatsAppHref();
  const emailTo = process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(max-width: 767px)").matches) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [open]);

  const linkClass =
    "block rounded-lg px-3 py-3 text-sm text-body-color transition-colors hover:bg-black/5 dark:text-body-color-dark dark:hover:bg-white/10 md:inline md:px-0 md:py-0 md:hover:bg-transparent";

  const close = () => setOpen(false);

  return (
    <header className="sticky top-[41px] z-40 border-b border-stroke-stroke bg-white dark:border-stroke-dark dark:bg-[#0f0f11]">
      <div className="container relative flex h-16 items-center justify-between px-4">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <Image
            src="/images/logo/logo-rob.svg"
            alt=""
            width={32}
            height={32}
            className="h-8 w-auto shrink-0 dark:hidden"
            priority
          />
          <Image
            src="/images/logo/logo-rob-white.svg"
            alt=""
            width={32}
            height={32}
            className="hidden h-8 w-auto shrink-0 dark:block"
            priority
          />
          <span className="truncate font-semibold text-black dark:text-white">
            {brandName}
          </span>
        </div>

        <nav
          className="hidden items-center gap-6 text-sm text-body-color dark:text-body-color-dark md:flex"
          aria-label="Principal"
        >
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 transition-opacity hover:opacity-80"
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-4">
            {whatsappHref ? (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-body-color duration-300 hover:text-[#0ea5e9] dark:text-body-color-dark dark:hover:text-[#7dd3fc]"
              >
                <IconWhatsApp className="h-5 w-5" />
              </a>
            ) : null}
            {emailTo ? (
              <a
                href={`mailto:${emailTo}`}
                aria-label="Email"
                className="text-body-color duration-300 hover:text-[#0ea5e9] dark:text-body-color-dark dark:hover:text-[#7dd3fc]"
              >
                <IconMail />
              </a>
            ) : null}
            <a
              href={instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-body-color duration-300 hover:text-[#0ea5e9] dark:text-body-color-dark dark:hover:text-[#7dd3fc]"
            >
              <IconInstagram />
            </a>
          </div>
          {cta ? (
            <a
              href={cta.href}
              className="shrink-0 rounded-xl px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: cta.backgroundColor }}
            >
              {cta.label}
            </a>
          ) : null}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-stroke-stroke text-black dark:border-stroke-dark dark:text-white md:hidden"
          aria-expanded={open}
          aria-controls="demo-mobile-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {open ? (
        <div
          id="demo-mobile-menu"
          className="border-t border-stroke-stroke bg-white shadow-[0_12px_24px_-8px_rgba(0,0,0,0.15)] dark:border-stroke-dark dark:bg-[#0f0f11] md:hidden"
        >
          <nav
            className="container flex max-h-[min(70vh,calc(100dvh-8rem))] flex-col overflow-y-auto px-4 py-3"
            aria-label="Principal móvil"
          >
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={linkClass}
                onClick={close}
              >
                {item.label}
              </a>
            ))}
            {cta ? (
              <a
                href={cta.href}
                className="mt-2 rounded-xl px-4 py-3 text-center text-sm font-medium text-white"
                style={{ backgroundColor: cta.backgroundColor }}
                onClick={close}
              >
                {cta.label}
              </a>
            ) : null}

            <div className="mt-4 flex items-center gap-5">
              {whatsappHref ? (
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="text-body-color duration-300 hover:text-[#0ea5e9] dark:text-body-color-dark dark:hover:text-[#7dd3fc]"
                  onClick={close}
                >
                  <IconWhatsApp className="h-5 w-5" />
                </a>
              ) : null}
              {emailTo ? (
                <a
                  href={`mailto:${emailTo}`}
                  aria-label="Email"
                  className="text-body-color duration-300 hover:text-[#0ea5e9] dark:text-body-color-dark dark:hover:text-[#7dd3fc]"
                  onClick={close}
                >
                  <IconMail />
                </a>
              ) : null}
              <a
                href={instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-body-color duration-300 hover:text-[#0ea5e9] dark:text-body-color-dark dark:hover:text-[#7dd3fc]"
                onClick={close}
              >
                <IconInstagram />
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
