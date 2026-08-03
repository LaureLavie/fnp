// Données du quiz d'orientation (/test-orientation).
// Chaque question a 3 options, chacune taguée avec le profil de formation
// qu'elle nourrit. Le scoring (voir quiz-scoring.ts) additionne simplement
// 1 point par réponse dans le profil correspondant.

export type ProfilFormation = "DWFS" | "CDA-IA" | "EISI";

export interface QuizOption {
  label: string;
  profil: ProfilFormation;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Où en es-tu aujourd'hui dans ton parcours ?",
    options: [
      { label: "Je débute, je découvre le numérique", profil: "DWFS" },
      {
        label: "J'ai déjà des bases (autodidacte, formation courte, expérience)",
        profil: "CDA-IA",
      },
      {
        label: "J'ai un diplôme/expérience solide et je veux passer un cap",
        profil: "EISI",
      },
    ],
  },
  {
    id: 2,
    question: "Qu'est-ce qui t'attire le plus dans le numérique ?",
    options: [
      { label: "Créer des choses concrètes (sites, applis)", profil: "DWFS" },
      {
        label: "Résoudre des problèmes complexes, imaginer des solutions intelligentes",
        profil: "CDA-IA",
      },
      {
        label: "Piloter des projets, faire le lien entre équipes et enjeux business",
        profil: "EISI",
      },
    ],
  },
  {
    id: 3,
    question: "Face à un bug ou un problème, tu as plutôt tendance à…",
    options: [
      { label: "Chercher pas à pas, tester, apprendre en faisant", profil: "DWFS" },
      { label: "Analyser la logique en profondeur avant d'agir", profil: "CDA-IA" },
      {
        label: "Prendre du recul et penser à l'impact global de la solution",
        profil: "EISI",
      },
    ],
  },
  {
    id: 4,
    question: "Tu préfères travailler…",
    options: [
      { label: "Seul(e), à ton rythme, sur des tâches bien définies", profil: "DWFS" },
      { label: "En petite équipe technique, sur un projet précis", profil: "CDA-IA" },
      { label: "En coordination avec plusieurs équipes/interlocuteurs", profil: "EISI" },
    ],
  },
  {
    id: 5,
    question:
      "Voici une situation : un site doit afficher la liste des produits d'une boutique. Qu'est-ce qui te semble le plus logique à faire en premier ?",
    options: [
      { label: "Créer la page qui affiche les produits", profil: "DWFS" },
      {
        label: "Réfléchir à comment structurer et automatiser la récupération des données",
        profil: "CDA-IA",
      },
      {
        label:
          "Définir l'architecture globale (base de données, API, sécurité) avant de coder quoi que ce soit",
        profil: "EISI",
      },
    ],
  },
  {
    id: 6,
    question: "Une entreprise te demande d'automatiser une tâche répétitive. Ta première réaction ?",
    options: [
      { label: "Je regarde comment coder un script simple pour ça", profil: "DWFS" },
      {
        label: "Je me demande si l'IA ou un algorithme pourrait aussi prédire ou optimiser la tâche",
        profil: "CDA-IA",
      },
      {
        label: "Je me demande quel est le vrai besoin métier derrière, avant de choisir un outil",
        profil: "EISI",
      },
    ],
  },
  {
    id: 7,
    question: "Quand tu apprends quelque chose de nouveau, tu préfères…",
    options: [
      { label: "Des étapes claires et progressives", profil: "DWFS" },
      { label: "Comprendre le \"pourquoi\" en profondeur, creuser la théorie", profil: "CDA-IA" },
      {
        label: "Une vision d'ensemble, comprendre comment ça s'articule avec le reste",
        profil: "EISI",
      },
    ],
  },
  {
    id: 8,
    question: "L'intelligence artificielle, pour toi c'est…",
    options: [
      {
        label: "Un sujet qui m'intéresse mais pas prioritaire pour l'instant",
        profil: "DWFS",
      },
      { label: "Un domaine que je veux vraiment maîtriser", profil: "CDA-IA" },
      {
        label: "Un outil parmi d'autres à intégrer dans une stratégie plus large",
        profil: "EISI",
      },
    ],
  },
  {
    id: 9,
    question: "Où te vois-tu dans 2-3 ans ?",
    options: [
      {
        label: "Développeur web opérationnel, avec un premier emploi solide",
        profil: "DWFS",
      },
      {
        label: "Concepteur/développeur spécialisé, expert technique reconnu",
        profil: "CDA-IA",
      },
      {
        label: "Chef de projet technique, architecte ou manager d'équipe IT",
        profil: "EISI",
      },
    ],
  },
  {
    id: 10,
    question: "Combien de temps peux-tu/veux-tu consacrer à ta formation ?",
    options: [
      { label: "Une formation courte et professionnalisante (Bac+2)", profil: "DWFS" },
      { label: "Une formation qui va plus loin (Bac+3/4)", profil: "CDA-IA" },
      {
        label: "Un parcours long et exigeant (21 mois, Bac+5)",
        profil: "EISI",
      },
    ],
  },
  {
    id: 11,
    question: "Un exercice ne fonctionne pas du premier coup, tu…",
    options: [
      {
        label:
          "Recommences étape par étape jusqu'à trouver la solution, sans te décourager",
        profil: "DWFS",
      },
      {
        label:
          "Analyses en profondeur pourquoi ça ne marche pas, quitte à tout remettre à plat",
        profil: "CDA-IA",
      },
      {
        label:
          "Prends du recul pour voir si le problème vient de la méthode ou de l'approche globale",
        profil: "EISI",
      },
    ],
  },
];