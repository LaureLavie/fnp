"use client";

import { useEffect, useState } from "react";

const tabs = [
  { id: "centre", label: "Centre" },
  { id: "equipe", label: "Équipe" },
  { id: "pedagogie", label: "Pédagogie" },
  { id: "engagements", label: "Engagements" },
] as const;

export default function EcoleTabs() {
  const [activeId, setActiveId] = useState<string>(tabs[0].id);

  useEffect(() => {
    const sections = tabs
      .map((tab) => document.getElementById(tab.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Sections de la page Notre École"
      className="bg-surface border-b border-border"
    >
      <div className="container overflow-x-auto">
        <ul className="flex gap-6 list-none p-0 m-0 whitespace-nowrap">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <a
                href={`#${tab.id}`}
                className={`inline-block py-4 text-base font-display font-medium border-b-2 -mb-px transition-colors ${
                  activeId === tab.id
                    ? "border-accent text-ink-900"
                    : "border-transparent text-ink-500 hover:text-ink-900"
                }`}
              >
                {tab.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}