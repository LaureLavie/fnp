"use client";

import { useMemo, useState } from "react";
import { quizQuestions, type ProfilFormation } from "@/lib/quiz-data";
import { computeScores, resolveOutcome } from "@/lib/quiz-scoring";
import QuizProgress from "./QuizProgress";
import QuizOptionCard from "./QuizOptionCard";
import QuizResult from "./QuizResult";

export type QuizAnswer = {
  questionId: number;
  label: string;
  profil: ProfilFormation;
};

export default function QuizContainer() {
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const totalQuestions = quizQuestions.length;
  const currentIndex = answers.length;
  const isFinished = currentIndex >= totalQuestions;

  const outcome = useMemo(() => {
    if (!isFinished) return null;
    const scores = computeScores(answers.map((a) => a.profil));
    return { scores, resolved: resolveOutcome(scores) };
  }, [isFinished, answers]);

  function handleSelect(label: string, profil: ProfilFormation) {
    const question = quizQuestions[currentIndex];
    setAnswers((prev) => [...prev, { questionId: question.id, label, profil }]);
  }

  function handleBack() {
    setAnswers((prev) => prev.slice(0, -1));
  }

  function handleRestart() {
    setAnswers([]);
  }

  if (isFinished && outcome) {
    return (
      <QuizResult
        answers={answers}
        scores={outcome.scores}
        outcome={outcome.resolved}
        onRestart={handleRestart}
      />
    );
  }

  const question = quizQuestions[currentIndex];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between gap-4 mb-4">
        <span className="badge badge-orange">
          Question {currentIndex + 1} sur {totalQuestions}
        </span>
        {currentIndex > 0 && (
          <button
            type="button"
            onClick={handleBack}
            className="text-sm font-display font-semibold text-ink-500 hover:text-ink-900 transition-colors shrink-0"
          >
            ← Question précédente
          </button>
        )}
      </div>

      <QuizProgress current={currentIndex} total={totalQuestions} />

      <h1 className="text-2xl md:text-3xl mt-6 mb-8">{question.question}</h1>

      <div className="flex flex-col gap-4">
        {question.options.map((option) => (
          <QuizOptionCard
            key={option.label}
            label={option.label}
            profil={option.profil}
            onSelect={() => handleSelect(option.label, option.profil)}
          />
        ))}
      </div>
    </div>
  );
}