export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur border-b border-border">
      <div className="container flex items-center justify-between py-4">
        <button
          type="button"
          aria-label="Ouvrir le menu"
          className="flex items-center justify-center w-10 h-10 rounded-full text-ink-900 hover:bg-ink-100 transition-colors"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        <a href="/" className="font-display font-extrabold text-lg text-ink-900 tracking-tight">
          FNP
        </a>

        <a
          href="/compte"
          aria-label="Mon compte"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo text-white hover:opacity-90 transition-opacity"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" />
          </svg>
        </a>
      </div>
    </header>
  );
}