import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/254700000000?text=Hello%20Letamu%20Travels!%20I'd%20like%20to%20enquire%20about%20a%20trip."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-primary-foreground px-5 py-3 rounded-full shadow-2xl hover:scale-105 transition-transform"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-5 h-5" />
    <span className="hidden sm:inline text-sm font-semibold">WhatsApp Us</span>
  </a>
);

export default WhatsAppButton;
