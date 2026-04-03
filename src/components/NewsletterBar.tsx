import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const NewsletterBar = () => (
  <div className="bg-navy">
    <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
      <Mail className="w-5 h-5 text-gold" />
      <div>
        <span className="text-primary-foreground text-sm font-medium">
          Stay inspired — 
        </span>
        <Link
          to="/contact"
          className="text-gold text-sm font-medium hover:text-gold-light transition-colors"
        >
          Get in touch to start planning your journey
        </Link>
      </div>
    </div>
  </div>
);

export default NewsletterBar;
