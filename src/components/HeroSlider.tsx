import { useState, useEffect, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import heroKenya from "@/assets/hero-kenya.jpg";
import maasaiMara from "@/assets/maasai-mara.jpg";
import dianiBeach from "@/assets/diani-beach.jpg";
import amboseli from "@/assets/amboseli.jpg";

const slides = [
  { image: heroKenya, alt: "Kenya safari landscape" },
  { image: maasaiMara, alt: "Maasai Mara wildlife" },
  { image: dianiBeach, alt: "Diani Beach coastline" },
  { image: amboseli, alt: "Amboseli with Kilimanjaro" },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const scrollDown = () => {
    const el = document.getElementById("intro-section");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`hero-slide ${i === current ? "active" : ""}`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="flex items-center gap-2 mb-8">
          <span className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground">
            Letamu
          </span>
          <span className="font-heading text-3xl sm:text-4xl font-light text-gold">
            Travels
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.h1
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight max-w-4xl"
          >
            <span className="block">Explore.</span>
            <span className="block">Dream.</span>
            <span className="block">
              Discover <span className="italic text-gold">Kenya.</span>
            </span>
          </motion.h1>
        </AnimatePresence>

        <p className="mt-6 text-primary-foreground/70 text-base sm:text-lg max-w-lg font-light">
          Bespoke, luxury travel experiences across Kenya's most breathtaking destinations
        </p>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 scroll-indicator text-primary-foreground/60 hover:text-primary-foreground transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSlider;
