import { motion } from "framer-motion";
import heroImg from "@/assets/amboseli.jpg";
import TrustFeatures from "@/components/TrustFeatures";

const About = () => (
  <>
    <section className="bg-navy py-20">
      <div className="container-custom text-center">
        <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-2">About Us</p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">Letamu Travels</h1>
        <p className="text-primary-foreground/70 max-w-xl mx-auto">Your trusted partner for unforgettable Kenyan adventures.</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src={heroImg} alt="About Letamu Travels" loading="lazy" width={800} height={600} className="rounded-lg shadow-lg w-full object-cover h-80 lg:h-[450px]" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold text-navy mb-4">Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Letamu Travels is a Kenya-focused travel agency specialising in curated local experiences. We believe that Kenya holds some of the world's most extraordinary destinations — and we make them accessible, comfortable, and unforgettable.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              From the sweeping savannas of the Maasai Mara to the turquoise waters of Diani Beach, our team of passionate local experts crafts bespoke itineraries for families, couples, solo adventurers, and corporate groups.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Whether you're seeking a thrilling safari, a romantic beach escape, or a team-building retreat, Letamu Travels delivers personalised service, trusted local guides, and memories that last a lifetime.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { num: "500+", label: "Happy Travellers" },
                { num: "10+", label: "Destinations" },
                { num: "5+", label: "Years Experience" },
              ].map((s) => (
                <div key={s.label} className="bg-secondary rounded-lg p-4">
                  <p className="font-heading text-2xl font-bold text-gold">{s.num}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <TrustFeatures />
  </>
);

export default About;
