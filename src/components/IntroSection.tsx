import { useState } from "react";
import GoldUnderlineSVG from "./GoldUnderlineSVG";

const IntroSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="intro-section" className="py-20 sm:py-28">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          {/* Social icons */}
          <div className="flex justify-center gap-5 mb-8">
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
                className="text-sm text-muted-foreground hover:text-gold transition-colors tracking-wide"
              >
                {s.label}
              </a>
            ))}
          </div>

          <GoldUnderlineSVG />

          <p className="text-foreground/80 leading-relaxed mt-6 text-base sm:text-lg">
            Letamu Travels is a specialist Kenyan travel company offering the very best in
            bespoke holidays — from thrilling safaris and beach escapes to cultural
            immersions and luxury retreats across every corner of Kenya.
          </p>

          {expanded && (
            <p className="text-foreground/70 leading-relaxed mt-4 text-base sm:text-lg animate-fade-in">
              Our dedicated team of travel consultants are passionate about ensuring our
              clients receive unparalleled service from beginning to end. Having spent years
              exploring Kenya's diverse landscapes, they craft journeys that create
              unforgettable memories to last a lifetime.
            </p>
          )}

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-6 text-sm text-gold hover:text-gold-dark transition-colors tracking-wide font-medium"
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
