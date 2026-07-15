const links = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-indigo text-white mt-16">
      <div className="container py-10 text-center">
        <p className="font-display font-semibold text-white mb-1">
          Fabrique<span className="text-cyan"> Numérique</span> Paloise
        </p>
        <p className="text-white/70 text-sm mb-6">
          © {new Date().getFullYear()} Fabrique Numérique Paloise. Tous
          droits réservés.
        </p>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/80 text-sm hover:text-white hover:underline underline-offset-4"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}