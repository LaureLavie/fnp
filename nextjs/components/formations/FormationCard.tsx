import Link from "next/link";
import {Formation} from "../formations/data";

const badgeClass = {
  cyan: "badge-cyan",
  terracotta: "badge-terracotta",
  orange: "badge-orange",
} as const;

const statusClass = {
  cyan: "text-cyan",
  orange: "text-orange",
} as const;

export default function FormationCard({ formation }: { formation: Formation }) {
  return (
    <article className="card p-0 overflow-hidden">
      <div className="relative aspect-[16/10]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={formation.image}
          alt={formation.imageAlt}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className={`badge ${badgeClass[formation.badgeColor]}`}>
            {formation.badge}
          </span>
          <span className="text-sm font-display font-semibold text-cyan">
            {formation.level}
          </span>
        </div>

        <h3 className="mb-2">{formation.title}</h3>
        <p className="text-ink-700">{formation.description}</p>

        <hr className="my-4" />

        <div className="flex items-center justify-between">
          <span
            className={`text-sm font-display font-semibold ${statusClass[formation.statusColor]}`}
          >
            {formation.status}
          </span>
          <Link href={formation.link} passHref>
            <a className="inline-flex items-center gap-1 text-sm font-display font-semibold text-ink-900 hover:text-primary">
              En savoir plus
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </article>
  );
}