"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Nos formations", href: "/formations" },
  { label: "Notre École", href: "/ecole" },
  { label: "Actualités & Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
  }

  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur border-b border-border">
      <div className="container flex items-center justify-between py-4">
        {/* Bouton menu mobile */}
        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="flex md:hidden items-center justify-center w-10 h-10 rounded-full text-ink-900 hover:bg-ink-100 transition-colors"
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

        {/* Logo */}
        <a href="/" className="">
          <img src="/image/logo-rond.webp" alt="Logo FNP" className="h-24 w-auto" />
        </a>

        {/* Navigation desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`link-underline text-lg font-medium ${
                isActive(link.href) ? "text-primary" : "text-ink-900"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="/candidater" className="btn btn-accent py-2 px-5 text-sm">
            Candidater
          </a>      
          </div>
      </div>

      {/* Panneau menu mobile */}
      <nav
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out border-t border-border ${
          open ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <div className="container flex flex-col py-4 gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`py-3 px-2 rounded-md text-base font-medium ${
                isActive(link.href)
                  ? "text-primary bg-cyan-soft"
                  : "text-ink-900 hover:bg-ink-100"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/candidater"
            onClick={() => setOpen(false)}
            className="btn btn-accent mt-3 justify-center"
          >
            Candidater
          </a>
        </div>
      </nav>
    </header>
  );
}