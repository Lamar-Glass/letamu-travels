export interface Destination {
  id: string;
  name: string;
  description: string;
  highlights: string[];
  duration: string;
  startingPrice: string;
  image: string;
}

export const destinations: Destination[] = [
  {
    id: "maasai-mara",
    name: "Maasai Mara",
    description: "Kenya's most iconic wildlife reserve, home to the Great Migration and the Big Five. Experience the raw beauty of the African savanna.",
    highlights: ["Great Migration", "Big Five Game Drives", "Hot Air Balloon Safaris", "Maasai Cultural Visits"],
    duration: "3–5 Days",
    startingPrice: "KES 35,000",
    image: "maasai-mara",
  },
  {
    id: "nairobi",
    name: "Nairobi",
    description: "Kenya's vibrant capital blends urban energy with wildlife encounters. Visit the only national park within a capital city.",
    highlights: ["Nairobi National Park", "David Sheldrick Elephant Trust", "Giraffe Centre", "Karen Blixen Museum"],
    duration: "2–3 Days",
    startingPrice: "KES 15,000",
    image: "nairobi",
  },
  {
    id: "mombasa",
    name: "Mombasa",
    description: "A coastal gem where Swahili culture meets pristine beaches. Explore historic Fort Jesus and the vibrant Old Town.",
    highlights: ["Fort Jesus", "Old Town", "Nyali Beach", "Haller Park"],
    duration: "3–5 Days",
    startingPrice: "KES 25,000",
    image: "mombasa",
  },
  {
    id: "diani-beach",
    name: "Diani Beach",
    description: "Award-winning white sand beach on the Indian Ocean. Perfect for honeymooners and beach lovers seeking paradise.",
    highlights: ["White Sand Beaches", "Snorkelling & Diving", "Skydiving", "Colobus Conservation"],
    duration: "3–7 Days",
    startingPrice: "KES 30,000",
    image: "diani-beach",
  },
  {
    id: "nakuru",
    name: "Nakuru",
    description: "Home to the flamingo-lined Lake Nakuru and rhino sanctuary. A birdwatcher's paradise in the Great Rift Valley.",
    highlights: ["Lake Nakuru Flamingos", "Rhino Sanctuary", "Menengai Crater", "Lake Bogoria"],
    duration: "2–3 Days",
    startingPrice: "KES 20,000",
    image: "nakuru",
  },
  {
    id: "naivasha",
    name: "Naivasha",
    description: "A freshwater lake teeming with hippos and birdlife, with Hell's Gate National Park just next door for adventure.",
    highlights: ["Hell's Gate Cycling", "Boat Rides", "Crescent Island", "Elsamere Conservation"],
    duration: "2–3 Days",
    startingPrice: "KES 12,000",
    image: "naivasha",
  },
  {
    id: "amboseli",
    name: "Amboseli",
    description: "Witness majestic elephants with the stunning backdrop of Mount Kilimanjaro. One of Africa's most photographed parks.",
    highlights: ["Kilimanjaro Views", "Elephant Herds", "Observation Hill", "Maasai Communities"],
    duration: "2–4 Days",
    startingPrice: "KES 28,000",
    image: "amboseli",
  },
  {
    id: "tsavo",
    name: "Tsavo",
    description: "Kenya's largest national park, famous for its red elephants and vast wilderness. A true off-the-beaten-path safari.",
    highlights: ["Red Elephants", "Mzima Springs", "Lugard Falls", "Mudanda Rock"],
    duration: "3–5 Days",
    startingPrice: "KES 25,000",
    image: "tsavo",
  },
  {
    id: "watamu",
    name: "Watamu",
    description: "A marine paradise with coral reefs, sea turtles, and pristine beaches. Kenya's best-kept coastal secret.",
    highlights: ["Marine National Park", "Bio-Ken Snake Farm", "Gede Ruins", "Turtle Conservation"],
    duration: "3–5 Days",
    startingPrice: "KES 22,000",
    image: "watamu",
  },
  {
    id: "samburu",
    name: "Samburu",
    description: "A remote and rugged reserve home to the Samburu Special Five — unique species found nowhere else in Kenya.",
    highlights: ["Samburu Special Five", "Ewaso Ng'iro River", "Cultural Visits", "Bird Watching"],
    duration: "3–4 Days",
    startingPrice: "KES 32,000",
    image: "samburu",
  },
];

export const imageMap: Record<string, string> = {};
