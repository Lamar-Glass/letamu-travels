import { Link } from "react-router-dom";
import { Clock, MapPin } from "lucide-react";
import type { Destination } from "@/data/destinations";

interface Props {
  destination: Destination;
  image: string;
}

const DestinationCard = ({ destination, image }: Props) => (
  <div className="group rounded-lg overflow-hidden bg-card shadow-md card-hover">
    <div className="relative h-56 overflow-hidden">
      <img
        src={image}
        alt={destination.name}
        loading="lazy"
        width={800}
        height={600}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute top-3 right-3 bg-gold text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
        From {destination.startingPrice}
      </div>
    </div>
    <div className="p-5">
      <h3 className="font-heading text-xl font-semibold mb-2">{destination.name}</h3>
      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{destination.description}</p>
      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{destination.duration}</span>
        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />Kenya</span>
      </div>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {destination.highlights.slice(0, 3).map((h) => (
          <span key={h} className="text-xs bg-secondary px-2 py-1 rounded-full">{h}</span>
        ))}
      </div>
      <Link
        to="/booking"
        className="inline-block bg-navy text-primary-foreground text-sm font-medium px-4 py-2 rounded-md hover:bg-navy-light transition-colors w-full text-center"
      >
        Enquire Now
      </Link>
    </div>
  </div>
);

export default DestinationCard;
