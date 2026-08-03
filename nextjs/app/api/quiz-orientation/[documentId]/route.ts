import { NextResponse } from "next/server";

// On passe par cette route serveur (plutôt que d'appeler Strapi directement
// depuis le navigateur) car les permissions publiques Strapi ne sont pas
// encore configurées, et il est de toute façon plus sûr de ne pas exposer
// de droit d'écriture public : seul ce serveur détient le token Strapi.
const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL?.replace(/\/$/, "") || "http://localhost:1337";
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

export async function POST(request: Request) {
  const body = await request.json();

  if (!STRAPI_API_TOKEN) {
    console.error(
      "STRAPI_API_TOKEN manquant : la réponse au quiz n'a pas pu être enregistrée dans Strapi."
    );
    // On répond quand même 202 : la personne a déjà vu son résultat à l'écran,
    // un souci de journalisation ne doit jamais lui être visible ni bloquant.
    return NextResponse.json({ documentId: null }, { status: 202 });
  }

  try {
    const res = await fetch(`${STRAPI_URL}/api/reponses-quiz`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      },
      body: JSON.stringify({
        data: {
          reponses: body.reponses,
          scores: body.scores,
          profilResultat: body.profilResultat,
        },
      }),
    });

    if (!res.ok) {
      console.error("Strapi a refusé l'enregistrement du quiz :", res.status);
      return NextResponse.json({ documentId: null }, { status: 202 });
    }

    const json = await res.json();
    return NextResponse.json({ documentId: json.data?.documentId ?? null });
  } catch (error) {
    console.error("Erreur de connexion à Strapi (quiz-orientation) :", error);
    return NextResponse.json({ documentId: null }, { status: 202 });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ documentId: string }> }
) {
  const { documentId } = await params;
  const body = await request.json();

  if (!STRAPI_API_TOKEN) {
    return NextResponse.json({ ok: false }, { status: 202 });
  }

  try {
    const res = await fetch(`${STRAPI_URL}/api/reponses-quiz/${documentId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      },
      body: JSON.stringify({
        data: {
          email: body.email,
          consentementContact: body.consentement,
        },
      }),
    });

    return NextResponse.json({ ok: res.ok }, { status: res.ok ? 200 : 202 });
  } catch (error) {
    console.error("Erreur de connexion à Strapi (mise à jour email quiz) :", error);
    return NextResponse.json({ ok: false }, { status: 202 });
  }
}