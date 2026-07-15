import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mentions légales — Fabrique Numérique Paloise",
  description:
    "Mentions légales du site fabriquenumerique.fr : éditeur, hébergeur, propriété intellectuelle, données personnelles, cookies.",
};

export default function MentionsLegales() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="section">
          <div className="container max-w-3xl">
            <span className="badge badge-cyan mb-4">Informations légales</span>
            <h1 className="text-3xl md:text-4xl">Mentions légales</h1>

            <div className="flex flex-col gap-10 mt-8">
              <article>
                <h2>I. Présentation du site</h2>
                <p>
                  En vertu de l&rsquo;article 6 de la loi n° 2004-575 du 21
                  juin 2004 pour la confiance dans l&rsquo;économie numérique,
                  il est précisé aux utilisateurs du site
                  fabriquenumerique.fr l&rsquo;identité des différents
                  intervenants dans le cadre de sa réalisation et de son
                  suivi :
                </p>
                <ul className="list-disc pl-5 flex flex-col gap-1 text-ink-700">
                  <li>
                    <strong>Propriétaire :</strong> Association Fabrique Inclusive / La Fabrique
                    Numérique Paloise
                  </li>
                  <li>
                    <strong>Conception et Web Design :</strong> Équipe FNP |
                    Association Fabrique Inclusive
                  </li>
                  <li>
                    <strong>Réalisation :</strong> Équipe FNP – Association Fabrique Inclusive
                  </li>
                  <li>
                    <strong>Crédits photos :</strong> ©Hervé Audrain,
                    ©unsplash.com, ©Alaa AHMAD
                  </li>
                  <li>
                    <strong>Responsable publication :</strong> Monsieur Jean-Michel
                    CHAUVEAU, Directeur Fabrique Numérique Paloise
                  </li>
                  <li>
                    <strong>Webmaster :</strong> Équipe FNP – Association Fabrique Inclusive
                  </li>
                  <li>
                    <strong>Hébergeur :</strong> OVH
                  </li>
                </ul>
              </article>

              <article>
                <h2>II. Conditions générales d&rsquo;utilisation du site et des services proposés</h2>
                <p>
                  L&rsquo;utilisation du site fabriquenumerique.fr implique
                  l&rsquo;acceptation pleine et entière des conditions
                  générales d&rsquo;utilisation ci-après décrites. Ces
                  conditions d&rsquo;utilisation sont susceptibles
                  d&rsquo;être modifiées ou complétées à tout moment, les
                  utilisateurs du site fabriquenumerique.fr sont donc invités
                  à les consulter de manière régulière.
                </p>
                <p>
                  Ce site est normalement accessible à tout moment aux
                  utilisateurs. Une interruption pour raison de maintenance
                  technique peut être toutefois décidée par Association Fabrique Inclusive / La
                  Fabrique Numérique Paloise, qui s&rsquo;efforcera alors de
                  communiquer préalablement aux utilisateurs les dates et
                  heures de l&rsquo;intervention.
                </p>
                <p className="mb-0">
                  Le site fabriquenumerique.fr est mis à jour régulièrement
                  par Association Fabrique Inclusive – Équipe FNP. De la même façon, les mentions
                  légales peuvent être modifiées à tout moment : elles
                  s&rsquo;imposent néanmoins à l&rsquo;utilisateur qui est
                  invité à s&rsquo;y référer le plus souvent possible afin
                  d&rsquo;en prendre connaissance.
                </p>
              </article>

              <article>
                <h2>III. Description des services fournis</h2>
                <p>
                  Le site fabriquenumerique.fr a pour objet de fournir une
                  information concernant l&rsquo;ensemble des activités du
                  centre de formation.
                </p>
                <p>
                  Association Fabrique Inclusive / La Fabrique Numérique Paloise s&rsquo;efforce de
                  fournir sur le site fabriquenumerique.fr des informations
                  aussi précises que possible. Toutefois, elle ne pourra être
                  tenue responsable des omissions, des inexactitudes et des
                  carences dans la mise à jour, qu&rsquo;elles soient de son
                  fait ou du fait des tiers partenaires qui lui fournissent
                  ces informations.
                </p>
                <p className="mb-0">
                  Toutes les informations indiquées sur le site
                  fabriquenumerique.fr sont données à titre indicatif, et
                  sont susceptibles d&rsquo;évoluer. Par ailleurs, les
                  renseignements figurant sur le site fabriquenumerique.fr ne
                  sont pas exhaustifs. Ils sont donnés sous réserve de
                  modifications ayant été apportées depuis leur mise en
                  ligne.
                </p>
              </article>

              <article>
                <h2>IV. Limitations contractuelles sur les données techniques</h2>
                <p className="mb-0">
                  Le site Internet ne pourra être tenu responsable de
                  dommages matériels liés à l&rsquo;utilisation du site. De
                  plus, l&rsquo;utilisateur du site s&rsquo;engage à accéder
                  au site en utilisant un matériel récent, ne contenant pas
                  de virus et avec un navigateur de dernière génération
                  mis-à-jour.
                </p>
              </article>

              <article>
                <h2>V. Propriété intellectuelle et contrefaçons</h2>
                <p>
                  Fabrique Numérique Paloise est propriétaire des droits de propriété
                  intellectuelle ou détient les droits d&rsquo;usage sur tous
                  les éléments accessibles sur le site, notamment les textes,
                  images, graphismes, logo, icônes, sons, logiciels.
                </p>
                <p>
                  Toute reproduction, représentation, modification,
                  publication, adaptation de tout ou partie des éléments du
                  site, quel que soit le moyen ou le procédé utilisé, est
                  interdite, sauf autorisation écrite préalable de : Fabrique Numérique Paloise.
                </p>
                <p className="mb-0">
                  Toute exploitation non autorisée du site ou de l&rsquo;un
                  quelconque des éléments qu&rsquo;il contient sera
                  considérée comme constitutive d&rsquo;une contrefaçon et
                  poursuivie conformément aux dispositions des articles
                  L.335-2 et suivants du Code de Propriété Intellectuelle.
                </p>
              </article>

              <article>
                <h2>VI. Limitations de responsabilité</h2>
                <p>
                  Fabrique Numérique Paloise ne pourra être tenue responsable des dommages
                  directs et indirects causés au matériel de
                  l&rsquo;utilisateur, lors de l&rsquo;accès au site
                  fabriquenumerique.fr, et résultant soit de l&rsquo;utilisation
                  d&rsquo;un matériel ne répondant pas aux spécifications
                  indiquées au point IV, soit de l&rsquo;apparition
                  d&rsquo;un bug ou d&rsquo;une incompatibilité.
                </p>
                <p>
                  Fabrique Numérique Paloise ne pourra également
                  être tenue responsable des dommages indirects (tels par
                  exemple qu&rsquo;une perte de marché ou perte d&rsquo;une
                  chance) consécutifs à l&rsquo;utilisation du site
                  fabriquenumerique.fr.
                </p>
                <p className="mb-0">
                  Des espaces interactifs (possibilité de poser des questions
                  dans l&rsquo;espace contact) sont à la disposition des
                  utilisateurs. Fabrique Numérique Paloise se réserve le droit de supprimer,
                  sans mise en demeure préalable, tout contenu déposé dans
                  cet espace qui contreviendrait à la législation applicable
                  en France, en particulier aux dispositions relatives à la
                  protection des données. Le cas échéant, Fabrique Numérique Paloise se réserve
                  également la possibilité de mettre en cause la
                  responsabilité civile et/ou pénale de l&rsquo;utilisateur,
                  notamment en cas de message à caractère raciste, injurieux,
                  diffamant, ou pornographique, quel que soit le support
                  utilisé (texte, photographie…).
                </p>
              </article>

              <article>
                <h2>VII. Gestion des données personnelles</h2>
                <p>
                  En France, les données personnelles sont notamment
                  protégées par la loi n° 78-87 du 6 janvier 1978, la loi n°
                  2004-801 du 6 août 2004, l&rsquo;article L. 226-13 du Code
                  pénal et la Directive Européenne du 24 octobre 1995.
                </p>
                <p>
                  A l&rsquo;occasion de l&rsquo;utilisation du site
                  fabriquenumerique.fr, peuvent être recueillies : l&rsquo;URL
                  des liens par l&rsquo;intermédiaire desquels
                  l&rsquo;utilisateur a accédé au site fabriquenumerique.fr,
                  le fournisseur d&rsquo;accès de l&rsquo;utilisateur,
                  l&rsquo;adresse de protocole Internet (IP) de
                  l&rsquo;utilisateur.
                </p>
                <p>
                  En tout état de cause, La Fabrique Numérique
                  Paloise ne collecte des informations personnelles relatives
                  à l&rsquo;utilisateur que pour le besoin de certains
                  services proposés par le site fabriquenumerique.fr.
                  L&rsquo;utilisateur fournit ces informations en toute
                  connaissance de cause, notamment lorsqu&rsquo;il procède
                  par lui-même à leur saisie. Il est alors précisé à
                  l&rsquo;utilisateur du site fabriquenumerique.fr
                  l&rsquo;obligation ou non de fournir ces informations.
                </p>
                <p>
                  Conformément aux dispositions des articles 38 et suivants
                  de la loi 78-17 du 6 janvier 1978 relative à
                  l&rsquo;informatique, aux fichiers et aux libertés, tout
                  utilisateur dispose d&rsquo;un droit d&rsquo;accès, de
                  rectification et d&rsquo;opposition aux données
                  personnelles le concernant, en effectuant sa demande écrite
                  et signée, accompagnée d&rsquo;une copie du titre
                  d&rsquo;identité avec signature du titulaire de la pièce,
                  en précisant l&rsquo;adresse à laquelle la réponse doit
                  être envoyée.
                </p>
                <p>
                  Aucune information personnelle de l&rsquo;utilisateur du
                  site fabriquenumerique.fr n&rsquo;est publiée à
                  l&rsquo;insu de l&rsquo;utilisateur, échangée, transférée,
                  cédée ou vendue sur un support quelconque à des tiers.
                  Seule l&rsquo;hypothèse du rachat de STEP SA et de ses
                  droits permettrait la transmission des dites informations à
                  l&rsquo;éventuel acquéreur qui serait à son tour tenu de la
                  même obligation de conservation et de modification des
                  données vis à vis de l&rsquo;utilisateur du site
                  fabriquenumerique.fr.
                </p>
                <p>Le site susnommé est déclaré à la CNIL sous le numéro en cours.</p>
                <p className="mb-0">
                  Les bases de données sont protégées par les dispositions de
                  la loi du 1er juillet 1998 transposant la directive 96/9 du
                  11 mars 1996 relative à la protection juridique des bases
                  de données.
                </p>
              </article>

              <article>
                <h2>VIII. Liens hypertextes et cookies</h2>
               
                <p>
                  La navigation sur le site fabriquenumerique.fr est
                  susceptible de provoquer l&rsquo;installation de cookie(s)
                  sur l&rsquo;ordinateur de l&rsquo;utilisateur. Un cookie est
                  un fichier de petite taille, qui ne permet pas
                  l&rsquo;identification de l&rsquo;utilisateur, mais qui
                  enregistre des informations relatives à la navigation
                  d&rsquo;un ordinateur sur un site. Les données ainsi
                  obtenues visent à faciliter la navigation ultérieure sur le
                  site, et ont également vocation à permettre diverses
                  mesures de fréquentation.
                </p>
                <p>
                  Le refus d&rsquo;installation d&rsquo;un cookie peut
                  entraîner l&rsquo;impossibilité d&rsquo;accéder à certains
                  services. L&rsquo;utilisateur peut toutefois configurer son
                  ordinateur de la manière suivante, pour refuser
                  l&rsquo;installation des cookies :
                </p>
                <ul className="list-disc pl-5 flex flex-col gap-2 text-ink-700 mb-0">
                  <li>
                    <strong>Sous Internet Explorer :</strong> onglet outil
                    (pictogramme en forme de rouage en haut à droite) /
                    options internet. Cliquez sur Confidentialité et
                    choisissez Bloquer tous les cookies. Validez sur Ok.
                  </li>
                  <li>
                    <strong>Sous Firefox :</strong> en haut de la fenêtre du
                    navigateur, cliquez sur le bouton Firefox, puis aller
                    dans l&rsquo;onglet Options. Cliquer sur l&rsquo;onglet
                    Vie privée. Paramétrez les Règles de conservation sur :
                    utiliser les paramètres personnalisés pour
                    l&rsquo;historique. Enfin décochez-la pour désactiver les
                    cookies.
                  </li>
                  <li>
                    <strong>Sous Safari :</strong> Cliquez en haut à droite du
                    navigateur sur le pictogramme de menu (symbolisé par un
                    rouage). Sélectionnez Paramètres. Cliquez sur Afficher
                    les paramètres avancés. Dans la section
                    &laquo;&nbsp;Confidentialité&nbsp;&raquo;, cliquez sur
                    Paramètres de contenu. Dans la section
                    &laquo;&nbsp;Cookies&nbsp;&raquo;, vous pouvez bloquer les
                    cookies.
                  </li>
                  <li>
                    <strong>Sous Chrome :</strong> Cliquez en haut à droite du
                    navigateur sur le pictogramme de menu (symbolisé par
                    trois lignes horizontales). Sélectionnez Paramètres.
                    Cliquez sur Afficher les paramètres avancés. Dans la
                    section &laquo;&nbsp;Confidentialité&nbsp;&raquo;, cliquez
                    sur préférences. Dans l&rsquo;onglet
                    &laquo;&nbsp;Confidentialité&nbsp;&raquo;, vous pouvez
                    bloquer les cookies.
                  </li>
                </ul>
              </article>

              <article>
                <h2>IX. Droit applicable et attribution de juridiction</h2>
                <p className="mb-0">
                  Tout litige en relation avec l&rsquo;utilisation du site{" "}
                  <a href="https://www.fabriquenumerique.fr" target="_blank" rel="noopener noreferrer">
                    www.fabriquenumerique.fr
                  </a>{" "}
                  est soumis au droit français. Il est fait attribution
                  exclusive de juridiction aux tribunaux compétents de Lyon
                  (69).
                </p>
              </article>

              <article>
                <h2>X. Les principales lois concernées</h2>
                <ul className="list-disc pl-5 flex flex-col gap-1 text-ink-700 mb-0">
                  <li>
                    Loi n° 78-87 du 6 janvier 1978, notamment modifiée par la
                    loi n° 2004-801 du 6 août 2004 relative à
                    l&rsquo;informatique, aux fichiers et aux libertés.
                  </li>
                  <li>
                    Loi n° 2004-575 du 21 juin 2004 pour la confiance dans
                    l&rsquo;économie numérique.
                  </li>
                </ul>
              </article>

              <article>
                <h2>XI. Lexique</h2>
                <p>
                  <strong>Utilisateur :</strong> Internaute se connectant,
                  utilisant le site susnommé.
                </p>
                <p className="mb-0">
                  <strong>Informations personnelles :</strong> «&nbsp;les
                  informations qui permettent, sous quelque forme que ce
                  soit, directement ou non, l&rsquo;identification des
                  personnes physiques auxquelles elles s&rsquo;appliquent
                  &nbsp;» (article 4 de la loi n° 78-17 du 6 janvier 1978).
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}