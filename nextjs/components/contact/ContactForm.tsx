"use client";

import { useState } from "react";

const subjects = [
  "Information sur les formations",
  "Candidature à une formation",
  "Partenariat entreprise",
  "Autre demande",
];



export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // TODO : brancher sur l'API Strapi (content-type "Contact") ou Brevo
    // une fois le formulaire de collecte défini côté CMS.
    setTimeout(() => setStatus("sent"), 600);
  }

  return (
    <section className="section pt-0">
      <div className="container max-w-2xl">
        <div className="card">
          <h2 className="mb-2">
            Envoie-nous <span className="text-terracotta">un message</span>
          </h2>
          <p className="max-w-lg">
            Notre équipe administrative te répondra sous 48 heures ouvrées.
            N&apos;hésite pas à être précis dans ta demande pour une
            meilleure prise en charge.
          </p>
          

          <form onSubmit={handleSubmit} className="grid gap-5">
            <div>
              <label
                htmlFor="nom"
                className="block text-sm font-medium text-ink-900 mb-1"
              >
                Nom complet
              </label>
              <input
                id="nom"
                name="nom"
                type="text"
                required
                placeholder="Jean Dupont"
                className="field"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-ink-900 mb-1"
              >
                Adresse e-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="jean@example.com"
                className="field"
              />
            </div>

            <div>
              <label
                htmlFor="objet"
                className="block text-sm font-medium text-ink-900 mb-1"
              >
                Objet de ta demande
              </label>
              <select id="objet" name="objet" required defaultValue="" className="field">
                <option value="" disabled>
                  Choisis un objet
                </option>
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-ink-900 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Comment pouvons-nous t'aider ?"
                className="field"
              />
            </div>

            <label htmlFor="consentement" className="flex items-start gap-3 text-sm text-ink-700">
              <input
                id="consentement"
                name="consentement"
                type="checkbox"
                required
                className="mt-1 shrink-0 accent-cyan w-4 h-4"
              />
              <span>
                J&apos;accepte que mes données soient traitées pour répondre
                à ma demande selon la{" "}
                <a href="/mentions-legales">politique de confidentialité</a>.
              </span>
            </label>

            <button
              type="submit"
              disabled={status !== "idle"}
              className="btn bg-orange text-ink-900 justify-self-center disabled:opacity-60 hover:brightness-95"
            >
              {status === "idle" && (
                <>
                  Envoyer le message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </>
              )}
              {status === "sending" && "Envoi en cours…"}
              {status === "sent" && "Message envoyé ✓"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}