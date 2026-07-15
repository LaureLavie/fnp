export default function TestCta() {
  return (
    <section className="section">
      <div className="container">
        <div className="bg-indigo rounded-lg text-center py-14 px-6">
          <h2 className="text-white">Prêt à démarrer ?</h2>
          <p className="text-white/90 max-w-md mx-auto">
            Passe le test dès maintenant ! Ce mini-questionnaire sert juste à
            mieux te connaître et à vérifier que le courant passe entre nous !
          </p>
          <a href="/test-orientation" className="btn btn-accent mt-4">
            C&apos;est par ici pour lancer le test !
          </a>
        </div>
      </div>
    </section>
  );
}