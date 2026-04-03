import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import heroKenya from "@/assets/hero-kenya.jpg";

const testimonials = [
  {
    text: "I honestly cannot tell you what an amazing trip we all had. You really had thought of everything, putting together an itinerary that exceeded all our expectations. We've totally got the 'Kenya Bug' and Letamu will definitely be our first call!",
    initials: "SM",
  },
  {
    text: "Thank you for the wonderful trip you organised for us, it was one of the most beautiful we ever did. It ran like clockwork with our great guide who was extremely knowledgeable. It is very hard to decide on the best memory — every moment was incredible.",
    initials: "BN",
  },
  {
    text: "A very perfect holiday in every way. Meticulously organised, beautifully executed and huge fun. We were treated like royalty and were hugely impressed by how everything had been carefully woven together. Quite wonderful — thank you for all you did.",
    initials: "GG",
  },
  {
    text: "We had the most MAGNIFICENT time — all the accommodation was lovely, all the activities were spot on, all the arrangements worked perfectly, and there was not a single glitch. Your planning genuinely made it all the better.",
    initials: "PR",
  },
  {
    text: "You did us PROUD! What an incredible time we had in Kenya. You had thought of such a brilliant itinerary, so carefully thought out for us as a family. The children adored it all — they were totally amazed by the safari!",
    initials: "RH",
  },
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section
      className="relative py-24 sm:py-32 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${heroKenya})` }}
    >
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-heading text-lg sm:text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed italic">
                "{testimonials[current].text}"
              </p>
              <span className="inline-block mt-6 text-gold font-heading text-lg font-semibold">
                — {testimonials[current].initials}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 flex items-center justify-center border border-primary-foreground/30 text-primary-foreground/70 hover:text-primary-foreground hover:border-primary-foreground transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 flex items-center justify-center border border-primary-foreground/30 text-primary-foreground/70 hover:text-primary-foreground hover:border-primary-foreground transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
