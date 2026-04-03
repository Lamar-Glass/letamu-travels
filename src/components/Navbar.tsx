import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { to: "/destinations", label: "Destinations" },
  { to: "/packages", label: "Packages" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparent
          ? "bg-transparent"
          : "bg-background/95 backdrop-blur-md shadow-sm"
      }`}
    >
      <div className="container-custom flex items-center justify-between h-20 lg:h-24">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1.5">
          <span
            className={`font-heading text-2xl lg:text-3xl font-bold transition-colors duration-300 ${
              transparent ? "text-primary-foreground" : "text-foreground"
            }`}
          >
            Letamu
          </span>
          <span className="font-heading text-2xl lg:text-3xl font-light text-gold">
            Travels
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm tracking-wide font-medium transition-colors duration-300 hover:text-gold ${
                location.pathname === link.to
                  ? "text-gold"
                  : transparent
                  ? "text-primary-foreground/90"
                  : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop contact */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:+254700000000"
            className={`text-sm transition-colors duration-300 ${
              transparent ? "text-primary-foreground/80" : "text-muted-foreground"
            } hover:text-gold`}
          >
            +254 700 000 000
          </a>
          <Link
            to="/booking"
            className="bg-gold text-accent-foreground px-5 py-2.5 text-sm font-semibold hover:bg-gold-dark transition-colors"
          >
            Enquire
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2"
        >
          {mobileOpen ? (
            <X className={`w-6 h-6 ${transparent ? "text-primary-foreground" : ""}`} />
          ) : (
            <Menu className={`w-6 h-6 ${transparent ? "text-primary-foreground" : ""}`} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t overflow-hidden"
          >
            <div className="container-custom py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`py-1 text-sm font-medium tracking-wide ${
                    location.pathname === link.to ? "text-gold" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/booking"
                className="bg-gold text-accent-foreground px-5 py-2.5 text-sm font-semibold text-center mt-2"
              >
                Enquire
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
