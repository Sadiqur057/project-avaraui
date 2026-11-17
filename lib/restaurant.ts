// All copy, prices and contact details below are sample content for the
// design. Replace them with the real restaurant's information.

const photo = (id: string, w = 1200, h?: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ""}&q=75`;

export const IMG = {
  tasting: "1414235077428-338989a2e8c0",
  salmon: "1467003909585-2f8a72700288",
  salmonDark: "1519708227418-c8fd9a32b7a2",
  wagyu: "1558030006-450675393462",
  steakFrites: "1600891964092-4316c288032e",
  bisque: "1559847844-5315695dadae",
  cake: "1578985545062-69928b1d9587",
  porkChop: "1432139555190-58524dae6a55",
  chef: "1577219491135-ce391730fb2c",
  kitchen: "1428515613728-6b4607e44363",
  diningRoom: "1550966871-3ed3cdb5ed0c",
  interior: "1517248135467-4c7edcad34c4",
  terrace: "1559339352-11d035aa65de",
  steakTop: "1504674900247-0877df9cc836",
  sushi: "1579584425555-c3ce17fd4351",
} as const;

export const img = (key: keyof typeof IMG, w = 1200, h?: number) =>
  photo(IMG[key], w, h);

const face = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=200&h=200&q=70`;

export const FACES = [
  face("1494790108377-be9c29b29330"),
  face("1507003211169-0a1dd7228f2d"),
  face("1534528741775-53994a69daeb"),
  face("1500648767791-00dcc994a43e"),
  face("1438761681033-6461ffad8d80"),
  face("1472099645785-5658abf4ff4e"),
  face("1517841905240-472988babdf9"),
  face("1544005313-94ddf0286df2"),
];

export const restaurant = {
  name: "Chef's Hotel",
  shortName: "Chef's Hotel",
  description:
    "Chef's Hotel is a fine-dining room serving seasonal tasting menus, dry-aged cuts and a candle-lit cellar list.",
  address: ["24 Harbour Lane", "Old Town, 10115"],
  phone: "+1 (555) 014-2200",
  email: "reservations@chefshotel.example",
  hours: [
    { days: "Tue – Thu", time: "5:30 pm – 10:00 pm" },
    { days: "Fri – Sat", time: "5:30 pm – 11:30 pm" },
    { days: "Sunday", time: "12:00 pm – 9:00 pm" },
    { days: "Monday", time: "Closed" },
  ],
  social: [
    { title: "Instagram", link: "https://instagram.com" },
    { title: "Facebook", link: "https://facebook.com" },
    { title: "Pinterest", link: "https://pinterest.com" },
  ],
} as const;

export const navLinks = [
  { name: "Dishes", href: "/#dishes" },
  { name: "Our Story", href: "/#story" },
  { name: "Chef's Offer", href: "/#offer" },
  { name: "Reviews", href: "/#reviews" },
  { name: "Contact", href: "/#visit" },
];

export type Dish = {
  slug: string;
  name: string;
  course: string;
  tagline: string;
  description: string;
  story: string;
  price: number;
  image: string;
  gallery: string[];
  notes: string[];
  pairing: string;
  allergens: string[];
  prep: string;
  rating: number;
  reviews: number;
  portionsLeft: number;
};

const gallery = (main: keyof typeof IMG): string[] => [
  img(main, 1400),
  img("chef", 800),
  img("tasting", 800),
  img("kitchen", 800),
];

export const dishes: Dish[] = [
  {
    slug: "truffle-wagyu",
    name: "Truffle Wagyu Striploin",
    course: "Main",
    tagline: "A5 wagyu, black truffle jus, charred shallot",
    description:
      "Thirty-day aged striploin seared over oak, rested, then sliced at the table and finished with shaved black truffle.",
    story:
      "The striploin is aged for thirty days in our cellar, seared over oak embers and basted with brown butter and thyme. Chef finishes it with a jus reduced from roasted bones and a generous shaving of black truffle at the table.",
    price: 68,
    image: img("wagyu", 900, 1100),
    gallery: gallery("wagyu"),
    notes: ["A5 wagyu striploin", "Black winter truffle", "Charred shallot", "Smoked potato purée"],
    pairing: "Barolo, Piedmont — deep cherry, leather and tar",
    allergens: ["Dairy", "Sulphites"],
    prep: "35 minutes",
    rating: 4.9,
    reviews: 312,
    portionsLeft: 8,
  },
  {
    slug: "seared-salmon",
    name: "Seared Atlantic Salmon",
    course: "Main",
    tagline: "Crisp skin, charred leeks, yuzu beurre blanc",
    description:
      "Line-caught salmon cooked skin-side down until glassy, served over charred leeks with a bright yuzu beurre blanc.",
    story:
      "We cook the fillet almost entirely on its skin so the flesh stays silky and just set. Charred leeks and a yuzu beurre blanc bring smoke and brightness, and a spoonful of trout roe adds salt.",
    price: 46,
    image: img("salmon", 900, 1100),
    gallery: gallery("salmon"),
    notes: ["Line-caught salmon", "Charred leeks", "Yuzu beurre blanc", "Trout roe"],
    pairing: "Chablis Premier Cru — flint, citrus and sea salt",
    allergens: ["Fish", "Dairy", "Sulphites"],
    prep: "20 minutes",
    rating: 4.8,
    reviews: 268,
    portionsLeft: 14,
  },
  {
    slug: "saffron-prawn-bisque",
    name: "Saffron Prawn Bisque",
    course: "Starter",
    tagline: "Tiger prawn, saffron cream, basil oil",
    description:
      "A silky bisque built from roasted prawn shells, finished tableside over a poached tiger prawn and fragrant rice.",
    story:
      "Every shell is roasted, deglazed with cognac and simmered for six hours. The bisque is poured at the table over a poached tiger prawn, saffron rice and a drop of basil oil.",
    price: 24,
    image: img("bisque", 900, 1100),
    gallery: gallery("bisque"),
    notes: ["Tiger prawn", "Saffron", "Cognac", "Basil oil"],
    pairing: "Dry Amontillado sherry — hazelnut and sea spray",
    allergens: ["Crustaceans", "Dairy", "Sulphites"],
    prep: "15 minutes",
    rating: 4.9,
    reviews: 204,
    portionsLeft: 20,
  },
  {
    slug: "dry-aged-pork-chop",
    name: "Dry-Aged Pork Chop",
    course: "Main",
    tagline: "Apple-sage compote, charred broccolini",
    description:
      "A thick heritage-breed chop, dry-aged for two weeks and roasted on the bone with apple, sage and brown butter.",
    story:
      "Heritage-breed pork rests in the aging room for two weeks before it meets the grill. It is roasted on the bone, basted with sage butter and served with a warm apple compote and charred broccolini.",
    price: 42,
    image: img("porkChop", 900, 1100),
    gallery: gallery("porkChop"),
    notes: ["Heritage-breed pork", "Apple and sage", "Brown butter", "Broccolini"],
    pairing: "Alsace Pinot Gris — baked apple and honey",
    allergens: ["Dairy", "Sulphites"],
    prep: "30 minutes",
    rating: 4.7,
    reviews: 176,
    portionsLeft: 12,
  },
  {
    slug: "chocolate-cake",
    name: "Valrhona Chocolate Cake",
    course: "Dessert",
    tagline: "70% dark chocolate, salted caramel, cocoa nib",
    description:
      "A tall layered cake of dark Valrhona mousse and sponge with salted caramel and crisp cocoa nibs.",
    story:
      "Our pastry chef builds the cake over two days: a flourless sponge, a 70% chocolate mousse and a salted caramel core. It is served slightly chilled with crushed cocoa nibs and a spoon of crème fraîche.",
    price: 18,
    image: img("cake", 900, 1100),
    gallery: gallery("cake"),
    notes: ["Valrhona 70%", "Salted caramel", "Cocoa nib", "Crème fraîche"],
    pairing: "Tawny Port, 20 years — roasted nuts and fig",
    allergens: ["Gluten", "Dairy", "Eggs", "Tree nuts"],
    prep: "10 minutes",
    rating: 4.9,
    reviews: 241,
    portionsLeft: 18,
  },
  {
    slug: "chefs-tasting-plate",
    name: "Chef's Tasting Plate",
    course: "Signature",
    tagline: "Five small plates from the season's best",
    description:
      "A rotating plate of five tastes that changes with the market: raw, cured, roasted, smoked and sweet.",
    story:
      "Our kitchen shops the market at dawn and writes this plate afterwards. Expect a raw bite, a cured one, something roasted, something smoked and a small sweet, plated together so you can taste the whole season at once.",
    price: 58,
    image: img("tasting", 900, 1100),
    gallery: gallery("tasting"),
    notes: ["Market-led produce", "Five small plates", "Changes weekly", "Vegetarian version on request"],
    pairing: "Our sommelier's flight — three 75 ml pours",
    allergens: ["Varies by week — ask your server"],
    prep: "25 minutes",
    rating: 4.8,
    reviews: 189,
    portionsLeft: 10,
  },
];

export const getDish = (slug: string) => dishes.find((d) => d.slug === slug);

export const heroCards = [
  { image: img("tasting", 700, 900), caption: "Chef's Tasting Plate", color: "#E9DFD0", alt: "A plated tasting course on a white plate", href: "/dishes/chefs-tasting-plate" },
  { image: img("salmon", 700, 900), caption: "Seared Salmon", color: "#E8D9CC", alt: "Seared salmon with a glossy sauce", href: "/dishes/seared-salmon" },
  { image: img("wagyu", 700, 900), caption: "Truffle Wagyu", color: "#DCCBBE", alt: "Sliced wagyu striploin", href: "/dishes/truffle-wagyu" },
  { image: img("bisque", 700, 900), caption: "Saffron Bisque", color: "#EADBC8", alt: "Prawn bisque with rice", href: "/dishes/saffron-prawn-bisque" },
  { image: img("cake", 700, 900), caption: "Chocolate Cake", color: "#E3D3C6", alt: "Dark chocolate layered cake", href: "/dishes/chocolate-cake" },
];

export const offerReels = [
  img("tasting", 600), img("salmon", 600), img("wagyu", 600), img("bisque", 600),
  img("cake", 600), img("porkChop", 600), img("steakFrites", 600), img("salmonDark", 600),
  img("steakTop", 600), img("sushi", 600), img("diningRoom", 600), img("terrace", 600),
];

export const reviews = [
  { id: "1", name: "Amelia R.", role: "Anniversary dinner", avatar: FACES[0], rating: 5, badge: "Dined here", content: "The wagyu was the best thing I've eaten all year. The room is candle-lit and quiet, and the staff seemed to know what we wanted before we did." },
  { id: "2", name: "Daniel K.", role: "Food writer", avatar: FACES[1], rating: 5, badge: "Dined here", content: "Precise without being precious. The saffron bisque poured at the table is worth the trip on its own." },
  { id: "3", name: "Sofia M.", role: "Birthday celebration", avatar: FACES[2], rating: 5, badge: "Dined here", content: "They remembered it was my birthday and sent out a chocolate cake with a candle. A small gesture that made the night." },
  { id: "4", name: "James T.", role: "Business dinner", avatar: FACES[3], rating: 5, badge: "Dined here", content: "Impeccable service and a wine list that rewards curiosity. Our table of eight was looked after without a hitch." },
  { id: "5", name: "Priya N.", role: "Date night", avatar: FACES[4], rating: 5, badge: "Dined here", content: "Every plate looked like a painting and tasted even better. The sommelier's pairing for the salmon was perfect." },
  { id: "6", name: "Marcus L.", role: "Regular guest", avatar: FACES[5], rating: 5, badge: "Dined here", content: "I've eaten here a dozen times and the menu still surprises me. The tasting plate is the best way to start." },
  { id: "7", name: "Hannah W.", role: "Weekend brunch", avatar: FACES[6], rating: 4.5, badge: "Dined here", content: "A calm Sunday lunch with beautiful food. The pork chop was generous and cooked exactly right." },
  { id: "8", name: "Luca B.", role: "Chef", avatar: FACES[7], rating: 5, badge: "Dined here", content: "As a cook I notice the small things: the seasoning, the timing, the temperature of the plates. They get all of them right." },
];
