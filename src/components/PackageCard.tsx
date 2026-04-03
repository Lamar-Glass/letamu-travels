import { Link } from "react-router-dom";
import { Calendar, Check } from "lucide-react";
import type { TravelPackage } from "@/data/packages";

interface Props {
  pkg: TravelPackage;
  image: string;
}

const PackageCard = ({ pkg, image }: Props) => (
  <div className="group rounded-lg overflow-hidden bg-card shadow-md card-hover flex flex-col">
    <div className="relative h-52 overflow-hidden">
      <img
        src={image}
        alt={pkg.title}
        loading="lazy"
        width={800}
        height={600}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      {pkg.badge && (
        <div className="absolute top-3 left-3 bg-gold text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
          {pkg.badge}
        </div>
      )}
      <div className="absolute bottom-3 right-3 bg-navy/80 text-primary-foreground text-xs px-3 py-1 rounded-full flex items-center gap-1">
        <Calendar className="w-3 h-3" /> {pkg.days} Days
      </div>
    </div>
    <div className="p-5 flex flex-col flex-1">
      <h3 className="font-heading text-lg font-semibold mb-1">{pkg.title}</h3>
      <p className="text-xs text-gold font-medium mb-2">{pkg.destination}</p>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{pkg.summary}</p>
      <div className="flex flex-col gap-1.5 mb-4">
        {pkg.inclusions.slice(0, 4).map((inc) => (
          <span key={inc} className="flex items-center gap-2 text-xs text-muted-foreground">
            <Check className="w-3 h-3 text-gold flex-shrink-0" /> {inc}
          </span>
        ))}
      </div>
      <div className="mt-auto flex items-center justify-between pt-4 border-t">
        <div>
          <span className="text-xs text-muted-foreground">From</span>
          <p className="font-heading text-lg font-bold text-navy">{pkg.price}</p>
        </div>
        <Link
          to="/booking"
          className="bg-gold text-accent-foreground text-sm font-semibold px-4 py-2 rounded-md hover:bg-gold-dark transition-colors"
        >
          Enquire Now
        </Link>
      </div>
    </div>
  </div>
);

export default PackageCard;
