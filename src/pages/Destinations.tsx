import DestinationCard from "@/components/DestinationCard";
import { destinations } from "@/data/destinations";
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

const imageMap: Record<string, string> = {
  "maasai-mara": maasaiMara,
  nairobi, mombasa, "diani-beach": dianiBeach,
  nakuru, naivasha, amboseli, tsavo, watamu, samburu,
};

const Destinations = () => (
  <>
    <section className="bg-navy py-20">
      <div className="container-custom text-center">
        <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-2">Destinations</p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">Explore Kenya</h1>
        <p className="text-primary-foreground/70 max-w-xl mx-auto">From wild safaris to pristine beaches — discover the best Kenya has to offer.</p>
      </div>
    </section>
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((d) => (
            <DestinationCard key={d.id} destination={d} image={imageMap[d.image] || maasaiMara} />
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Destinations;
