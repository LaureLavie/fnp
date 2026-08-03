"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { QuizAnswer } from "./QuizContainer";
import type { ScoreMap, QuizOutcome } from "@/lib/quiz-scoring";
import {
  resultsContent,
  tie3Content,
  getTie2Content,
  type ResultContent,
  type Tie2Content,
} from "@/lib/quiz-results-content";

type SubmitStatus = "idle" | "sending" | "sent" | "error";

export default function QuizResult({
  answers,
  scores,
  outcome,
  onRestart,
}: {
  answers: QuizAnswer[];
  scores: ScoreMap;
  outcome: QuizOutcome;
  onRestart: () => void;
}) {
  const documentIdRef = useRef<string | null>(null);
  const hasLoggedRef = useRef(false);

  const [email, setEmail] = useState("");
  const [consentement, setConsentement] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>("idle");

  // Trace anonyme systématique dès l'affichage du résultat : la personne
  // voit son résultat sans aucune friction, et on garde quand même une
  // trace du passage du quiz même si elle ne laisse pas ses coordonnées.
  useEffect(() => {
    if (hasLoggedRef.current) return;
    hasLoggedRef.current = true;

    const profilResultat =
      outcome.type === "single"
        ? outcome.profil
        : outcome.type === "tie2"
        ? outcome.profils.join(" / ")
        : "Indécis";

    fetch("/api/quiz-orientation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reponses: answers, scores, profilResultat }),
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.documentId) documentIdRef.current = data.documentId;
      })
      .catch(() => {
        // Best-effort : un échec de journalisation ne doit jamais bloquer
        // l'affichage du résultat pour la personne qui passe le test.
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleEmailSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || !consentement) return;
    setStatus("sending");

    try {
      if (documentIdRef.current) {
        const res = await fetch(`/api/quiz-orientation/${documentIdRef.current}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, consentement }),
        });
        setStatus(res.ok ? "sent" : "error");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const emailBlock = (
    <EmailCaptureCard
      email={email}
      setEmail={setEmail}
      consentement={consentement}
      setConsentement={setConsentement}
      status={status}
      onSubmit={handleEmailSubmit}
    />
  );

  if (outcome.type === "tie3") {
    return (
      <SingleResultShell content={tie3Content} onRestart={onRestart} emailBlock={emailBlock} />
    );
  }

  if (outcome.type === "tie2") {
    const [a, b] = outcome.profils;
    return (
      <Tie2ResultShell
        content={getTie2Content(a, b)}
        onRestart={onRestart}
        emailBlock={emailBlock}
      />
    );
  }

  return (
    <SingleResultShell
      content={resultsContent[outcome.profil]}
      onRestart={onRestart}
      emailBlock={emailBlock}
    />
  );
}

function SingleResultShell({
  content,
  onRestart,
  emailBlock,
}: {
  content: ResultContent;
  onRestart: () => void;
  emailBlock: React.ReactNode;
}) {
  return (
    <div className="max-w-2xl mx-auto">
      <span className="badge badge-orange mb-4">{content.badge}</span>
      <h1 className="text-2xl md:text-3xl mb-4">{content.titre}</h1>
      <p className="text-lg text-ink-700 mb-6">{content.texte}</p>

      <div className="card bg-cyan-soft border-none mb-6">
        <p className="text-sm text-ink-900 mb-0 font-medium">{content.preuve}</p>
      </div>

      <div className="mb-10">
        <Link
          href={content.ctaHref}
          target={content.ctaHref.startsWith("http") ? "_blank" : undefined}
          rel={content.ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
          className="btn btn-accent"
        >
          {content.ctaLabel}
        </Link>
      </div>

      {emailBlock}

      <RestartButton onRestart={onRestart} />
    </div>
  );
}

function Tie2ResultShell({
  content,
  onRestart,
  emailBlock,
}: {
  content: Tie2Content;
  onRestart: () => void;
  emailBlock: React.ReactNode;
}) {
  return (
    <div className="max-w-2xl mx-auto">
      <span className="badge badge-orange mb-4">{content.badge}</span>
      <h1 className="text-2xl md:text-3xl mb-4">{content.titre}</h1>
      <p className="text-lg text-ink-700 mb-6">{content.texte}</p>

      <div className="card bg-cyan-soft border-none mb-6">
        <p className="text-sm text-ink-900 mb-0 font-medium">{content.preuve}</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-10">
        <Link href={content.ctaHref} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
          {content.ctaLabel}
        </Link>
        <Link
          href={content.secondaryCtaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-ink"
        >
          {content.secondaryCtaLabel}
        </Link>
      </div>

      {emailBlock}

      <RestartButton onRestart={onRestart} />
    </div>
  );
}

function EmailCaptureCard({
  email,
  setEmail,
  consentement,
  setConsentement,
  status,
  onSubmit,
}: {
  email: string;
  setEmail: (v: string) => void;
  consentement: boolean;
  setConsentement: (v: boolean) => void;
  status: SubmitStatus;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <div className="card mb-8">
      <h3 className="mb-2">Recevoir mon résultat par e-mail</h3>
      <p className="text-sm text-ink-700 mb-4">
        Facultatif : laisse ton e-mail si tu veux recevoir ce résultat et être
        recontacté(e) par notre équipe. Sinon, tu peux fermer cette page : ton
        test a bien été pris en compte.
      </p>

      {status === "sent" ? (
        <p className="text-sm text-success font-medium mb-0">
          Merci ! Ton e-mail a bien été enregistré. ✓
        </p>
      ) : (
        <form onSubmit={onSubmit} className="flex flex-col gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="prenom.nom@email.com"
            className="field"
          />
          <label className="flex items-start gap-3 text-sm text-ink-700">
            <input
              type="checkbox"
              checked={consentement}
              onChange={(e) => setConsentement(e.target.checked)}
              className="mt-1 shrink-0 accent-cyan w-4 h-4"
            />
            <span>
              J&apos;accepte d&apos;être recontacté(e) par la Fabrique Numérique
              Paloise au sujet de mon résultat, selon la{" "}
              <Link href="/mentions-legales">politique de confidentialité</Link>.
            </span>
          </label>
          <button
            type="submit"
            disabled={!email || !consentement || status === "sending"}
            className="btn btn-primary self-start disabled:opacity-60"
          >
            {status === "sending" ? "Envoi en cours…" : "Recevoir mon résultat"}
          </button>
          {status === "error" && (
            <p className="text-sm text-error mb-0">
              Une erreur est survenue, réessaie dans un instant.
            </p>
          )}
        </form>
      )}
    </div>
  );
}

function RestartButton({ onRestart }: { onRestart: () => void }) {
  return (
    <button
      type="button"
      onClick={onRestart}
      className="text-sm font-display font-semibold text-ink-500 hover:text-ink-900 transition-colors"
    >
      ↺ Refaire le test
    </button>
  );
}