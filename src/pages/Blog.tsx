import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import maasaiMara from "@/assets/maasai-mara.jpg";
import dianiBeach from "@/assets/diani-beach.jpg";
import nairobi from "@/assets/nairobi.jpg";
import mombasa from "@/assets/mombasa.jpg";

const posts = [
  {
    slug: "best-places-to-visit-in-kenya",
    title: "Best Places to Visit in Kenya in 2026",
    excerpt: "From the iconic Maasai Mara to the pristine shores of Diani Beach — here are the top destinations every traveller should explore in Kenya.",
    image: maasaiMara,
    date: "March 15, 2026",
    category: "Travel Guide",
  },
  {
    slug: "maasai-mara-safari-guide",
    title: "The Ultimate Maasai Mara Safari Guide",
    excerpt: "Everything you need to know about planning a Maasai Mara safari — best times to visit, what to pack, and how to spot the Big Five.",
    image: maasaiMara,
    date: "March 10, 2026",
    category: "Safari",
  },
  {
    slug: "top-beaches-in-kenya",
    title: "Top 5 Beaches in Kenya You Must Visit",
    excerpt: "Kenya's coastline is home to some of East Africa's most beautiful beaches. Discover our top picks from Diani to Watamu.",
    image: dianiBeach,
    date: "March 5, 2026",
    category: "Beaches",
  },
  {
    slug: "nairobi-weekend-itinerary",
    title: "Nairobi Weekend Itinerary: 48 Hours in the Capital",
    excerpt: "Make the most of a weekend in Nairobi — from elephant orphanages to rooftop dining and the only urban national park in Africa.",
    image: nairobi,
    date: "February 28, 2026",
    category: "City Guide",
  },
];

const Blog = () => (
  <>
    <section className="bg-navy py-20">
      <div className="container-custom text-center">
        <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-2">Blog</p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">Travel Guides & Tips</h1>
        <p className="text-primary-foreground/70 max-w-xl mx-auto">Expert insights to help you plan your perfect Kenyan adventure.</p>
      </div>
    </section>
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="group rounded-lg overflow-hidden bg-card shadow-md card-hover">
              <div className="h-52 overflow-hidden">
                <img src={post.image} alt={post.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs bg-secondary px-2 py-1 rounded-full font-medium">{post.category}</span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground"><Calendar className="w-3 h-3" />{post.date}</span>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-gold">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Blog;
