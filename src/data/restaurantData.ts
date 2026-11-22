export type MenuCategory =
  | 'Biryani'
  | 'Starters'
  | 'Main Course'
  | 'Noodles'
  | 'Beverages'
  | 'Desserts';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  /** Set exact INR price once confirmed from the official menu; null displays "Price on request". */
  priceInr: number | null;
  description: string;
  image: string;
  imageAlt: string;
  isSignatureHighlight?: boolean;
}

export type GalleryCategory =
  | 'All'
  | 'Food & Drinks'
  | 'Biryani'
  | 'Interior'
  | 'Exterior'
  | 'Dining Experience';

export interface GalleryPhoto {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, 'All'>;
  caption: string;
  image: string;
  imageAlt: string;
}

export interface FeatureReason {
  index: string;
  title: string;
  description: string;
}

/**
 * Core brand & business data for Bandi's Resto Cafe.
 * Update phone, hours, prices, or photo paths here without touching UI components.
 */
export const RESTAURANT_INFO = {
  wordmark: "BANDI'S RESTO CAFE",
  category: 'Biryani Restaurant & Cafe',
  city: 'Tirupati, Andhra Pradesh',
  phoneDisplay: '+91 70131 93926',
  phoneHref: 'tel:+917013193926',
  phoneVerificationNote: 'Verify phone number with owner before publishing',
  address:
    '23-16-2G, Seethamma Road, Munireddy Nagar, M.R. Pally, Padmavathi Nagar, Avilali, Andhra Pradesh 517502',
  plusCode: 'JC94+W5, Avilali, Andhra Pradesh',
  hoursSummary: 'Open until 11:00 PM',
  hoursVerificationNote: 'Listed as open until 11 PM. Verify current opening hours before publishing.',
  googleRating: 4.4,
  googleReviewCount: 230,
  googleMapsSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=Bandi's+Resto+Cafe+JC94%2BW5+Avilali+Andhra+Pradesh+517502",
  googleMapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=JC94%2BW5,+Avilali,+Andhra+Pradesh+517502',
  googleMapsEmbedUrl:
    'https://maps.google.com/maps?q=JC94%2BW5,+Avilali,+Andhra+Pradesh+517502&t=&z=16&ie=UTF8&iwloc=&output=embed',
  services: ['Dine-in', 'Drive-through', 'No-contact delivery'] as const,
  instagramPlaceholderLabel: 'Instagram — Official handle to be added by owner',
} as const;

export const HERO_MEDIA = {
  backgroundImage: '/src/assets/images/hero_resto_cafe_1795337077756.jpg',
  backgroundAlt:
    "Warm evening dining atmosphere with aromatic biryani tableware at Bandi's Resto Cafe showcase",
};

export const ABOUT_MEDIA = {
  image: '/src/assets/images/about_dining_space_1795337077206.jpg',
  imageAlt: 'Warm contemporary family dining room with wooden tables and pendant lighting',
};

export const MENU_CATEGORIES: readonly ('All' | MenuCategory)[] = [
  'All',
  'Biryani',
  'Starters',
  'Main Course',
  'Noodles',
  'Beverages',
  'Desserts',
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'bandis-special-biriyani',
    name: "Bandi's Special Biriyani",
    category: 'Biryani',
    priceInr: null,
    description:
      'Our signature aromatic biryani served steaming with fragrant spices and cool raita.',
    image: '/src/assets/images/menu_special_biryani_1795337077832.jpg',
    imageAlt: "Bandi's Special Biriyani served in a hammered copper pot with raita",
    isSignatureHighlight: true,
  },
  {
    id: 'bandis-special-chicken-tikka',
    name: "Bandi's Special Chicken Tikka",
    category: 'Starters',
    priceInr: null,
    description:
      'Char-grilled tender chicken pieces marinated in house spices, served with fresh mint chutney.',
    image: '/src/assets/images/menu_chicken_tikka_1795337077067.jpg',
    imageAlt: "Bandi's Special Chicken Tikka on a warm cast-iron platter with mint chutney",
    isSignatureHighlight: true,
  },
  {
    id: 'dragon-chicken',
    name: 'Dragon Chicken',
    category: 'Starters',
    priceInr: null,
    description:
      'Crisp wok-tossed chicken strips glazed in a bold chili-garlic sauce with roasted cashews and peppers.',
    image: '/src/assets/images/menu_dragon_chicken_1795337077015.jpg',
    imageAlt: 'Dragon Chicken tossed with roasted cashews, red bell peppers, and sesame',
    isSignatureHighlight: true,
  },
  {
    id: 'french-fries',
    name: 'French Fries',
    category: 'Starters',
    priceInr: null,
    description:
      'Golden crisp potato fries lightly seasoned and served warm with dipping sauce.',
    image: '/src/assets/images/menu_french_fries_1795337076957.jpg',
    imageAlt: 'Crisp golden French fries served in a dark stoneware bowl with dip',
    isSignatureHighlight: true,
  },
  {
    id: 'mango-milkshake',
    name: 'Mango Milkshake',
    category: 'Beverages',
    priceInr: null,
    description:
      'Thick, chilled mango milkshake blended creamy and finished with fresh mango garnish.',
    image: '/src/assets/images/menu_mango_milkshake_1795337077144.jpg',
    imageAlt: 'Chilled Mango Milkshake in a tall glass garnished with diced mango and mint',
    isSignatureHighlight: true,
  },
  {
    id: 'classic-main-course',
    name: 'Chef Curated Main Course',
    category: 'Main Course',
    priceInr: null,
    description:
      'Rich spiced curries and flatbreads prepared to order for hearty lunch and dinner tables.',
    image: '/src/assets/images/menu_main_course_1795337096988.jpg',
    imageAlt: 'Indian masala curry in a copper kadai bowl paired with garlic naan',
  },
  {
    id: 'wok-tossed-noodles',
    name: 'Wok-Tossed Noodles',
    category: 'Noodles',
    priceInr: null,
    description:
      'Savory stir-fried noodles tossed over high flame with crisp vegetables and aromatic sauces.',
    image: '/src/assets/images/menu_wok_noodles_1795337076539.jpg',
    imageAlt: 'Steaming wok-tossed noodles with bell peppers and spring onions in a dark bowl',
  },
  {
    id: 'sweet-desserts',
    name: 'Classic Indian Desserts',
    category: 'Desserts',
    priceInr: null,
    description:
      'Warm traditional sweets finished with cardamom, saffron notes, and roasted pistachios.',
    image: '/src/assets/images/menu_classic_dessert_1795337076947.jpg',
    imageAlt: 'Warm gulab jamun in saffron syrup garnished with pistachios in a brass bowl',
  },
];

export const GALLERY_CATEGORIES: readonly GalleryCategory[] = [
  'All',
  'Biryani',
  'Food & Drinks',
  'Interior',
  'Exterior',
  'Dining Experience',
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-biryani',
    title: "Bandi's Special Biriyani",
    category: 'Biryani',
    caption: 'Aromatic copper-pot biryani presentation prepared for dine-in and takeaway.',
    image: '/src/assets/images/menu_special_biryani_1795337077832.jpg',
    imageAlt: "Bandi's Special Biriyani in a copper handi with raita",
  },
  {
    id: 'gal-exterior',
    title: 'Evening Storefront Architecture',
    category: 'Exterior',
    caption: 'Warm illuminated evening entrance welcoming dine-in and drive-through guests.',
    image: '/src/assets/images/gallery_cafe_exterior_1795337096458.jpg',
    imageAlt: 'Modern charcoal stone and timber restaurant exterior glowing at twilight',
  },
  {
    id: 'gal-interior',
    title: 'Main Dining Room',
    category: 'Interior',
    caption: 'Comfortable banquette seating and ambient lighting tailored for families and groups.',
    image: '/src/assets/images/about_dining_space_1795337077206.jpg',
    imageAlt: 'Warm modern restaurant interior with timber tables and pendant lamps',
  },
  {
    id: 'gal-dining-exp',
    title: 'Evening Table Service',
    category: 'Dining Experience',
    caption: 'Unrushed evening hospitality designed for conversation and shared meals.',
    image: '/src/assets/images/hero_resto_cafe_1795337077756.jpg',
    imageAlt: 'Guests enjoying dinner under warm amber pendant lights in the dining hall',
  },
  {
    id: 'gal-tikka',
    title: "Bandi's Special Chicken Tikka",
    category: 'Food & Drinks',
    caption: 'Char-grilled starter platter paired with fresh mint chutney and citrus.',
    image: '/src/assets/images/menu_chicken_tikka_1795337077067.jpg',
    imageAlt: 'Char-grilled chicken tikka skewers on cast-iron sizzler plate',
  },
  {
    id: 'gal-mango',
    title: 'Mango Milkshake & Cafe Coolers',
    category: 'Food & Drinks',
    caption: 'Refreshing thick milkshakes crafted to complement spiced biryanis and starters.',
    image: '/src/assets/images/menu_mango_milkshake_1795337077144.jpg',
    imageAlt: 'Chilled mango milkshake topped with fresh mango cubes and mint',
  },
  {
    id: 'gal-dragon',
    title: 'Dragon Chicken',
    category: 'Food & Drinks',
    caption: 'Crisp Indo-Chinese starter tossed with peppers and roasted cashews.',
    image: '/src/assets/images/menu_dragon_chicken_1795337077015.jpg',
    imageAlt: 'Crispy Dragon Chicken glazed in chili sauce with cashews',
  },
  {
    id: 'gal-noodles',
    title: 'Wok-Tossed Noodles & Curries',
    category: 'Food & Drinks',
    caption: 'Comforting Indo-Chinese noodle bowls and savory main course plates.',
    image: '/src/assets/images/menu_wok_noodles_1795337076539.jpg',
    imageAlt: 'Wok-tossed noodles with crisp vegetables in dark stoneware bowl',
  },
];

export const WHY_CHOOSE_FEATURES: FeatureReason[] = [
  {
    index: '01',
    title: 'Delicious Food',
    description:
      'From signature biryanis and smoky starters to cafe snacks and milkshakes, every dish is made for satisfying flavor.',
  },
  {
    index: '02',
    title: 'Comfortable Ambience',
    description:
      'A clean, warm dining room thoughtfully arranged for families, students, and evening gatherings in Tirupati.',
  },
  {
    index: '03',
    title: 'Friendly Service',
    description:
      'Attentive, welcoming hospitality focused on making every visit smooth and enjoyable.',
  },
  {
    index: '04',
    title: 'Dine-in and Drive-through',
    description:
      'Settle in at a table with friends or pick up your favorites swiftly on the go via drive-through.',
  },
  {
    index: '05',
    title: 'Delivery Options',
    description:
      'Convenient no-contact delivery so you can enjoy Bandi’s Resto Cafe dishes comfortably at home.',
  },
];

export function formatInrPrice(priceInr: number | null): string {
  if (priceInr === null || Number.isNaN(priceInr)) {
    return 'Price on request';
  }
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(priceInr);
}
