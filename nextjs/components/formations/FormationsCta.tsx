export default function FormationsCta() {
  return (
    <section className="section pt-0">
      <div className="container">
        <div className="bg-indigo rounded-lg text-center py-14 px-6">
          <h2 className="text-white">Prêt à te former ?</h2>
          <p className="text-white/90 max-w-md mx-auto">
            Inscris-toi dès maintenant pour nos prochaines sessions de
            formation et rejoins notre écosystème dynamique.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <a href="/candidater" className="btn bg-orange text-ink-900 hover:brightness-95">
              Je m&apos;inscris !
            </a>
            <a
              href="/contact"
              className="btn border border-orange text-white hover:bg-white/10"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}