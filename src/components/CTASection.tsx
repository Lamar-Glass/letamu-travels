import { Link } from "react-router-dom";
import { Phone, Mail, MessageCircle } from "lucide-react";
import amboseli from "@/assets/amboseli.jpg";

const CTASection = () => (
  <section
    className="relative py-24 sm:py-32 bg-cover bg-center bg-fixed"
    style={{ backgroundImage: `url(${amboseli})` }}
  >
    <div className="absolute inset-0 hero-overlay" />
    <div className="relative z-10 container-custom text-center">
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-8">
        Get in touch with us now to start planning your journey
      </h2>

      <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto">
        <a
          href="tel:+254700000000"
          className="flex items-center justify-center gap-2 bg-gold text-accent-foreground px-6 py-3 text-sm font-semibold hover:bg-gold-dark transition-colors"
        >
          <Phone className="w-4 h-4" /> Call Us
        </a>
        <a
          href="mailto:info@letamutravels.co.ke"
          className="flex items-center justify-center gap-2 border border-primary-foreground/40 text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-primary-foreground/10 transition-colors"
        >
          <Mail className="w-4 h-4" /> Email Us
        </a>
        <Link
          to="/booking"
          className="flex items-center justify-center gap-2 border border-primary-foreground/40 text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-primary-foreground/10 transition-colors"
        >
          <MessageCircle className="w-4 h-4" /> Enquire Now
        </Link>
      </div>
    </div>
  </section>
);

export default CTASection;
