"use client";

import { useState } from "react";

const infos = [
  {
    label: "Adresse",
    value: "Pôle Laherrère, 3 place Laherrère, 64000 Pau",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Téléphone",
    value: "09 72 65 78 93",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 3a2 2 0 0 1-.4 2.1L8 10.3a16 16 0 0 0 6 6l1.5-1.5a2 2 0 0 1 2.1-.4c1 .3 2 .5 3 .7a2 2 0 0 1 1.7 2Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "contact@fabriquenumerique.fr",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 6 10 7 10-7" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // TODO : brancher sur l'API Strapi (content-type "Contact") ou Brevo
    // une fois le formulaire de collecte défini côté CMS.
    setTimeout(() => setStatus("sent"), 600);
  }

  return (
    <section id="contact" className="section pt-0 scroll-mt-20">
      <div className="container">
        <span className="badge badge-cyan mb-4">Contacte-nous</span>
        <h2>Une question ? <span className="text-cyan">Parlons-en !</span></h2>

        <ul className="flex flex-col gap-4 mt-6 mb-10 list-none p-0">
          {infos.map((info) => (
            <li key={info.label} className="flex items-start gap-3">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-cyan-soft text-indigo shrink-0">
                {info.icon}
              </span>
              <span>
                <span className="block font-display font-semibold text-sm text-ink-900">
                  {info.label}
                </span>
                <span className="text-ink-700 text-sm">{info.value}</span>
              </span>
            </li>
          ))}
        </ul>

        <form onSubmit={handleSubmit} className="card grid gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="prenom" className="block text-sm font-medium text-ink-900 mb-1">
                Prénom
              </label>
              <input id="prenom" name="prenom" type="text" required placeholder="Jean" className="field field-pill" />
            </div>
            <div>
              <label htmlFor="nom" className="block text-sm font-medium text-ink-900 mb-1">
                Nom
              </label>
              <input id="nom" name="nom" type="text" required placeholder="Dupont" className="field field-pill" />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-ink-900 mb-1">
              Email
            </label>
            <input id="email" name="email" type="email" required placeholder="jean.dupont@email.com" className="field field-pill" />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-ink-900 mb-1">
              Message
            </label>
            <textarea id="message" name="message" required rows={4} placeholder="Comment pouvons-nous t'aider ?" className="field" />
          </div>

          <button type="submit" disabled={status !== "idle"} className="btn btn-accent justify-self-center disabled:opacity-60">
            {status === "idle" && "Envoyer le message"}
            {status === "sending" && "Envoi en cours…"}
            {status === "sent" && "Message envoyé ✓"}
          </button>
        </form>
      </div>
    </section>
  );
}