import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => (
  <>
    <section className="bg-navy py-20">
      <div className="container-custom text-center">
        <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-2">Contact</p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">Get in Touch</h1>
        <p className="text-primary-foreground/70 max-w-xl mx-auto">We'd love to hear from you. Reach out and let's plan your next adventure.</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading text-2xl font-bold text-navy mb-6">Contact Information</h2>
            <div className="space-y-6">
              {[
                { icon: MapPin, label: "Office Location", value: "Westlands, Nairobi, Kenya", sub: "Serving: Maasai Mara, Mombasa, Nakuru, Diani & more" },
                { icon: Phone, label: "Phone", value: "+254 700 000 000", href: "tel:+254700000000" },
                { icon: Mail, label: "Email", value: "info@letamutravels.co.ke", href: "mailto:info@letamutravels.co.ke" },
                { icon: Clock, label: "Working Hours", value: "Mon – Sat: 8:00 AM – 6:00 PM", sub: "WhatsApp available 24/7" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-muted-foreground hover:text-gold">{item.value}</a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                    )}
                    {item.sub && <p className="text-xs text-muted-foreground mt-0.5">{item.sub}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg h-80 lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.27766!2d36.8!3d-1.27!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a6bf7520ba5%3A0x17d1424f89950e36!2sWestlands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 320 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Letamu Travels Office Location"
            />
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Contact;
