export default function QuizProgress({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  const pct = Math.min(100, Math.round((current / total) * 100));

  return (
    <div
      className="w-full h-1.5 bg-ink-100 rounded-full overflow-hidden"
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`Progression du quiz : ${current} question(s) sur ${total}`}
    >
      <div
        className="h-full bg-cyan transition-all duration-300 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}