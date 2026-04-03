import GoldUnderlineSVG from "./GoldUnderlineSVG";

const features = [
  {
    title: "Personal Service",
    desc: "We act as a single point of contact for all aspects of your journey — from flights to accommodation, transfers, and personal guides.",
  },
  {
    title: "Personal Experience",
    desc: "Letamu will never send you anywhere we wouldn't stay ourselves. We have visited every destination personally, or know someone trusted who has.",
  },
  {
    title: "Personal Choice",
    desc: "We have no allegiances with any airline, lodge, or hotel — we are free to choose the very best solution for every circumstance without bias.",
  },
];

const TrustFeatures = () => (
  <section className="section-padding">
    <div className="container-custom">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
        {features.map((f) => (
          <div key={f.title} className="text-center">
            <h3 className="font-heading text-xl font-semibold">{f.title}</h3>
            <GoldUnderlineSVG />
            <p className="text-sm text-foreground/60 leading-relaxed mt-2">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustFeatures;
