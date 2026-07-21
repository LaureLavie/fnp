import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getArticleBySlug, getStrapiMedia, type StrapiBlock } from "@/lib/strapi";

export const revalidate = 60;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return { title: "Article — Fabrique Numérique Paloise" };
  return {
    title: `${article.titre} — Fabrique Numérique Paloise`,
    description: article.chapo,
  };
}

function formatDate(iso?: string) {
  if (!iso) return "";
  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}

/** Rendu minimal du format "Blocks" de Strapi, sans dépendance externe. */
function BlocksContent({ blocks }: { blocks?: StrapiBlock[] }) {
  if (!blocks || blocks.length === 0) return null;

  return (
    <div className="flex flex-col gap-4">
      {blocks.map((block, i) => {
        const text = block.children?.map((c) => c.text ?? "").join("") ?? "";
        if (block.type === "heading") {
          const level = block.level ?? 3;
          if (level <= 2) return <h2 key={i}>{text}</h2>;
          return <h3 key={i}>{text}</h3>;
        }
        if (block.type === "list") {
          return (
            <ul key={i} className="list-disc pl-5 flex flex-col gap-1 text-ink-700">
              {block.children?.map((item, j) => (
                <li key={j}>{item.text}</li>
              ))}
            </ul>
          );
        }
        return <p key={i}>{text}</p>;
      })}
    </div>
  );
}

export default async function ArticleDetail({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <article className="section">
          <div className="container max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm font-display font-semibold text-ink-700 hover:text-primary mb-6"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              Retour au blog
            </Link>

            <span className="badge badge-cyan mb-4">{article.categorie}</span>
            <h1 className="text-3xl md:text-4xl mb-3">{article.titre}</h1>

            <div className="flex flex-wrap items-center gap-3 text-sm text-ink-500 mb-8">
              <span>{formatDate(article.datePublication)}</span>
              {article.auteur && <span>· {article.auteur}</span>}
              {article.tempsLecture && <span>· {article.tempsLecture}</span>}
            </div>

            {getStrapiMedia(article.image?.url) && (
              <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden mb-10 shadow-md">
                <Image
                  src={getStrapiMedia(article.image?.url) as string}
                  alt={article.image?.alternativeText || article.titre}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            <p className="text-lg text-ink-700 mb-8">{article.chapo}</p>

            <BlocksContent blocks={article.contenu} />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}