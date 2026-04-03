import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Calendar, Compass } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import GoldUnderlineSVG from "./GoldUnderlineSVG";
import { destinations } from "@/data/destinations";
import maasaiMara from "@/assets/maasai-mara.jpg";
import dianiBeach from "@/assets/diani-beach.jpg";
import amboseli from "@/assets/amboseli.jpg";
import mombasa from "@/assets/mombasa.jpg";
import nairobi from "@/assets/nairobi.jpg";
import nakuru from "@/assets/nakuru.jpg";
import naivasha from "@/assets/naivasha.jpg";
import samburu from "@/assets/samburu.jpg";
import tsavo from "@/assets/tsavo.jpg";
import watamu from "@/assets/watamu.jpg";

const imageMap: Record<string, string> = {
  "maasai-mara": maasaiMara,
  "diani-beach": dianiBeach,
  amboseli,
  mombasa,
  nairobi,
  nakuru,
  naivasha,
  samburu,
  tsavo,
  watamu,
};

const tabs = [
  { id: "where", label: "Where?", sub: "Do you want to go?", icon: MapPin },
  { id: "when", label: "When?", sub: "Do you want to travel?", icon: Calendar },
  { id: "what", label: "What?", sub: "Do you want to experience?", icon: Compass },
];

const seasons = [
  { name: "January – March", desc: "Dry season. Perfect for safaris in the Mara, Amboseli, and Samburu. Ideal for birdwatching." },
  { name: "April – June", desc: "Long rains. Lower prices, fewer crowds, lush green landscapes. Great for Nairobi and cultural tours." },
  { name: "July – October", desc: "Peak safari season. The Great Migration crosses into the Mara. Best wildlife viewing." },
  { name: "November – December", desc: "Short rains. Excellent beach weather on the coast. Perfect for Diani, Watamu, and Mombasa." },
];

const experiences = [
  { name: "Safari & Wildlife", desc: "Track the Big Five across Kenya's legendary reserves — Maasai Mara, Amboseli, Tsavo, and Samburu." },
  { name: "Beach & Coast", desc: "Unwind on white sand beaches, snorkel coral reefs, and explore Swahili culture along the Indian Ocean." },
  { name: "Culture & Heritage", desc: "Immerse yourself in Maasai traditions, Swahili architecture, and Kenya's vibrant urban arts scene." },
  { name: "Adventure & Active", desc: "Cycling Hell's Gate, hot air balloons over the Mara, skydiving in Diani, and mountain trekking." },
];

const DestinationTabs = () => {
  const [activeTab, setActiveTab] = useState("where");
  const [activeDestination, setActiveDestination] = useState(0);

  return (
    <section className="bg-cream">
      {/* Tab headers */}
      <div className="border-b border-border">
        <div className="container-custom">
          <div className="flex justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-link ${activeTab === tab.id ? "active" : ""}`}
              >
                <tab.icon className="w-5 h-5 text-gold" />
                <span className={`tab-title font-heading text-lg sm:text-xl font-semibold transition-colors ${activeTab === tab.id ? "" : "text-foreground"}`}>
                  {tab.label}
                </span>
                <span className="text-xs text-muted-foreground hidden sm:block">{tab.sub}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab content */}
      <div className="section-padding">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            {activeTab === "where" && (
              <motion.div
                key="where"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              >
                {/* Destination grid */}
                <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {destinations.map((d, i) => (
                    <button
                      key={d.id}
                      onClick={() => setActiveDestination(i)}
                      className={`relative overflow-hidden aspect-[4/3] group cursor-pointer ${
                        activeDestination === i ? "ring-2 ring-gold" : ""
                      }`}
                    >
                      <img
                        src={imageMap[d.image] || maasaiMara}
                        alt={d.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <span className="absolute bottom-2 left-3 text-sm font-medium text-white">
                        {d.name}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Destination detail */}
                <div className="flex flex-col justify-center">
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold">
                    {destinations[activeDestination].name}
                  </h2>
                  <GoldUnderlineSVG className="!mx-0 !ml-0" />
                  <p className="text-foreground/70 leading-relaxed mt-4 text-sm sm:text-base">
                    {destinations[activeDestination].description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {destinations[activeDestination].highlights.map((h) => (
                      <span key={h} className="text-xs bg-background px-3 py-1.5 text-muted-foreground">
                        {h}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 text-sm text-muted-foreground">
                    <span>{destinations[activeDestination].duration}</span>
                    <span className="mx-2">·</span>
                    <span>From {destinations[activeDestination].startingPrice}</span>
                  </div>
                  <Link
                    to="/booking"
                    className="mt-6 inline-block bg-gold text-accent-foreground px-6 py-3 text-sm font-semibold hover:bg-gold-dark transition-colors text-center"
                  >
                    Explore {destinations[activeDestination].name}
                  </Link>
                </div>
              </motion.div>
            )}

            {activeTab === "when" && (
              <motion.div
                key="when"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
              >
                {seasons.map((s) => (
                  <div key={s.name} className="bg-background p-6 sm:p-8">
                    <h3 className="font-heading text-lg font-semibold mb-2">{s.name}</h3>
                    <GoldUnderlineSVG className="!mx-0 !ml-0" />
                    <p className="text-sm text-foreground/70 leading-relaxed mt-3">{s.desc}</p>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "what" && (
              <motion.div
                key="what"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
              >
                {experiences.map((e) => (
                  <div key={e.name} className="bg-background p-6 sm:p-8">
                    <h3 className="font-heading text-lg font-semibold mb-2">{e.name}</h3>
                    <GoldUnderlineSVG className="!mx-0 !ml-0" />
                    <p className="text-sm text-foreground/70 leading-relaxed mt-3">{e.desc}</p>
                    <Link
                      to="/booking"
                      className="mt-4 inline-block text-sm text-gold hover:text-gold-dark transition-colors font-medium"
                    >
                      Enquire Now →
                    </Link>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default DestinationTabs;
