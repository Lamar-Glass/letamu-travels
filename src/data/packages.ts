export interface TravelPackage {
  id: string;
  title: string;
  days: number;
  destination: string;
  summary: string;
  inclusions: string[];
  price: string;
  image: string;
  badge?: string;
}

export const packages: TravelPackage[] = [
  {
    id: "mara-safari",
    title: "3-Day Maasai Mara Safari",
    days: 3,
    destination: "Maasai Mara",
    summary: "An unforgettable safari experience through Kenya's premier wildlife reserve. Witness the Big Five and experience the magic of the African bush.",
    inclusions: ["Return transport from Nairobi", "2 nights accommodation", "All meals", "Game drives with expert guide", "Park entry fees"],
    price: "KES 45,000",
    image: "maasai-mara",
  },
  {
    id: "coastal-escape",
    title: "5-Day Coastal Escape",
    days: 5,
    destination: "Diani Beach & Mombasa",
    summary: "Combine beach relaxation with cultural exploration along Kenya's stunning coastline. Perfect for families and couples.",
    inclusions: ["SGR train tickets", "4 nights beachfront hotel", "Breakfast & dinner", "Old Town guided tour", "Snorkelling trip"],
    price: "KES 65,000",
    image: "diani-beach",
  },
  {
    id: "nairobi-city",
    title: "2-Day Nairobi City Experience",
    days: 2,
    destination: "Nairobi",
    summary: "Discover the wild side of Kenya's capital — from orphaned elephants to giraffes you can feed by hand.",
    inclusions: ["Hotel accommodation", "All meals", "Park entry fees", "Private transport", "Expert city guide"],
    price: "KES 25,000",
    image: "nairobi",
  },
  {
    id: "nakuru-adventure",
    title: "4-Day Lake Nakuru Adventure",
    days: 4,
    destination: "Nakuru & Naivasha",
    summary: "Explore the Great Rift Valley's lakes, from flamingo-filled shores to hippo-inhabited waters and Hell's Gate gorges.",
    inclusions: ["Return transport", "3 nights lodge", "All meals", "Boat ride", "Hell's Gate cycling", "Park fees"],
    price: "KES 48,000",
    image: "nakuru",
  },
  {
    id: "honeymoon-diani",
    title: "Honeymoon Diani Luxury Package",
    days: 6,
    destination: "Diani Beach",
    summary: "A romantic getaway at a luxury beachfront resort with private dining, spa treatments, and sunset dhow cruises.",
    inclusions: ["Flights from Nairobi", "5 nights luxury resort", "Full board", "Couples spa", "Sunset dhow cruise", "Private beach dinner"],
    price: "KES 120,000",
    image: "diani-beach",
    badge: "Honeymoon Special",
  },
];
