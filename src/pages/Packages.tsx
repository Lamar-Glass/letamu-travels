import PackageCard from "@/components/PackageCard";
import { packages } from "@/data/packages";
import maasaiMara from "@/assets/maasai-mara.jpg";
import dianiBeach from "@/assets/diani-beach.jpg";
import nairobi from "@/assets/nairobi.jpg";
import nakuru from "@/assets/nakuru.jpg";

const imageMap: Record<string, string> = {
  "maasai-mara": maasaiMara,
  "diani-beach": dianiBeach,
  nairobi,
  nakuru,
};

const Packages = () => (
  <>
    <section className="bg-navy py-20">
      <div className="container-custom text-center">
        <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-2">Packages</p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">Travel Packages</h1>
        <p className="text-primary-foreground/70 max-w-xl mx-auto">Handcrafted itineraries for every type of traveller.</p>
      </div>
    </section>
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((p) => (
            <PackageCard key={p.id} pkg={p} image={imageMap[p.image] || maasaiMara} />
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Packages;
