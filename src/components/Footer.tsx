import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-navy text-primary-foreground">
    <div className="container-custom py-10">
      <div className="flex flex-col items-center gap-6">
        {/* Brand */}
        <div className="flex items-center gap-1.5">
          <span className="font-heading text-2xl font-bold">Letamu</span>
          <span className="font-heading text-2xl font-light text-gold">Travels</span>
        </div>

        {/* Nav */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          {[
            { to: "/destinations", label: "Destinations" },
            { to: "/packages", label: "Packages" },
            { to: "/about", label: "About" },
            { to: "/contact", label: "Contact" },
            { to: "/booking", label: "Enquire" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="opacity-60 hover:opacity-100 hover:text-gold transition-all"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Social */}
        <div className="flex gap-6 text-sm">
          {[
            { label: "Instagram", href: "#" },
            { label: "Facebook", href: "#" },
            { label: "Twitter", href: "#" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 hover:text-gold transition-all"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </div>

    <div className="border-t border-primary-foreground/10">
      <div className="container-custom py-5 text-center">
        <p className="text-xs opacity-40">
          © {new Date().getFullYear()} Letamu Travels Ltd. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
