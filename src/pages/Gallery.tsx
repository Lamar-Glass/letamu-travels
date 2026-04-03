import { useState } from "react";
import maasaiMara from "@/assets/maasai-mara.jpg";
import nairobi from "@/assets/nairobi.jpg";
import mombasa from "@/assets/mombasa.jpg";
import dianiBeach from "@/assets/diani-beach.jpg";
import nakuru from "@/assets/nakuru.jpg";
import naivasha from "@/assets/naivasha.jpg";
import amboseli from "@/assets/amboseli.jpg";
import tsavo from "@/assets/tsavo.jpg";
import watamu from "@/assets/watamu.jpg";
import samburu from "@/assets/samburu.jpg";
import heroKenya from "@/assets/hero-kenya.jpg";

const images = [
  { src: heroKenya, alt: "Kenya savanna at golden hour", category: "Wildlife" },
  { src: maasaiMara, alt: "Lions in Maasai Mara", category: "Wildlife" },
  { src: amboseli, alt: "Elephants at Amboseli with Kilimanjaro", category: "Wildlife" },
  { src: tsavo, alt: "Red elephants of Tsavo", category: "Wildlife" },
  { src: samburu, alt: "Samburu wildlife", category: "Wildlife" },
  { src: dianiBeach, alt: "Diani Beach paradise", category: "Beaches" },
  { src: watamu, alt: "Watamu marine park", category: "Beaches" },
  { src: mombasa, alt: "Mombasa coastline", category: "Beaches" },
  { src: nairobi, alt: "Nairobi skyline", category: "Cities" },
  { src: nakuru, alt: "Lake Nakuru flamingos", category: "Landscapes" },
  { src: naivasha, alt: "Lake Naivasha hippos", category: "Landscapes" },
];

const categories = ["All", "Wildlife", "Beaches", "Cities", "Landscapes"];

const Gallery = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? images : images.filter((i) => i.category === active);

  return (
    <>
      <section className="bg-navy py-20">
        <div className="container-custom text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-2">Gallery</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">Kenya in Pictures</h1>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex justify-center gap-3 mb-10 flex-wrap">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === c ? "bg-gold text-accent-foreground" : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((img, i) => (
              <div key={i} className="break-inside-avoid rounded-lg overflow-hidden group">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
