const img = (id, w) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const products = [
  { id: 'wagyu', name: 'A5 Wagyu Ribeye', description: 'Perfectly marbled Japanese Wagyu, seared over white oak charcoal.', price: 85, image: img('photo-1546241072-48010ad2862c', 500), section: 'signature' },
  { id: 'salmon', name: 'Glazed Atlantic Salmon', description: 'Wild-caught salmon with a honey-soy glaze and ginger puree.', price: 42, image: img('photo-1519708227418-c8fd9a32b7a2', 500), section: 'signature' },
  { id: 'lamb', name: 'Herb-Crusted Lamb', description: 'Roasted rack of lamb served with rosemary jus and mint emulsion.', price: 58, image: img('photo-1544025162-d76694265947', 500), section: 'signature' },
  { id: 'pasta', name: 'Truffle Pasta', description: 'Handmade pasta with black truffle and parmesan cream.', price: 36, rating: 5, image: img('photo-1559339352-11d035aa65de', 500), section: 'favorite' },
  { id: 'bisque', name: 'Lobster Bisque', description: 'Silky lobster bisque finished with cognac.', price: 28, rating: 4, image: img('photo-1534422298391-e4f8c170db0f', 500), section: 'favorite' },
  { id: 'seabass', name: 'Sea Bass', description: 'Pan-seared sea bass with lemon beurre blanc.', price: 52, rating: 5, image: img('photo-1467003909585-2f8a72700288', 500), section: 'favorite' },
  { id: 'beet', name: 'Beetroot Salad', description: 'Roasted beets, goat cheese and candied walnuts.', price: 22, rating: 4, image: img('photo-1482049016688-2d3e1b311543', 500), section: 'favorite' },
  { id: 'platter', name: 'The Ember Platter', description: 'A smoky medley of charcoal-grilled meats and roasted vegetables, infused with our signature hickory wood aroma.', price: 95, image: img('photo-1504674900247-0877df9cc836', 800), section: 'special' },
];

export const events = [
  { id: 1, title: 'Wine & Ember Pairing Night', date: 'Every Friday · 7:00 PM', tag: 'Weekly', description: 'Five courses from the charcoal grill, each paired with a rare vintage by our sommelier.', image: img('photo-1514362545857-3bc16c4c7d1b', 500) },
  { id: 2, title: "Chef's Table Experience", date: 'First Saturday · 8:00 PM', tag: 'Limited Seats', description: 'An intimate tasting menu served at the kitchen pass with the head chef.', image: img('photo-1550966842-24128284882b', 500) },
  { id: 3, title: 'Midnight Cocktail Masterclass', date: 'Last Thursday · 9:00 PM', tag: 'Monthly', description: 'Learn to craft our signature smoked cocktails behind the bar.', image: img('photo-1470337458703-46ad1756a187', 500) },
];

export const galleryImages = [
  { src: img('photo-1514362545857-3bc16c4c7d1b', 500), alt: 'Bar' },
  { src: img('photo-1550966842-24128284882b', 500), alt: 'Dining Room' },
  { src: img('photo-1559339352-11d035aa65de', 500), alt: 'Plating' },
  { src: img('photo-1470337458703-46ad1756a187', 500), alt: 'Cocktails' },
];

export const testimonials = [
  { img: 'https://i.pravatar.cc/100?u=1', name: 'Julianne Moore', text: '"The Wagyu was melt-in-your-mouth perfection. The ambiance is unmatched in the city."' },
  { img: 'https://i.pravatar.cc/100?u=2', name: 'David Gandy', text: '"Noir & Ember is where elegance meets flavor. Highly recommended for anniversaries."' },
  { img: 'https://i.pravatar.cc/100?u=3', name: 'Helena Bonham', text: '"The cocktails are as sophisticated as the interior. A truly premium experience."' },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Reservations', href: '#reservations' },
  { label: 'Events', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Favorites', href: '#favorites' },
  { label: 'Contact', href: '#contact' },
];

export const heroImage = img('photo-1544025162-d76694265947', 1920);
export const highlightImage = img('photo-1514362545857-3bc16c4c7d1b', 1920);
export const stars = (n = 5) => '★'.repeat(n) + '☆'.repeat(5 - n);
