import { useState } from 'react';
import { useShop } from '../context/ShopContext';
import SectionTitle from './SectionTitle';
import ProductCard from './ProductCard';

export default function SignatureMenu() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'karahi', label: 'Karahi & Handi' },
    { id: 'bbq', label: 'BBQ & Grill' },
    { id: 'rice', label: 'Biryani & Rice' },
    { id: 'special', label: 'Specialties' },
  ];

  // 12 Authentic Pakistani Dishes with 100% Working Images & Clean PKR Prices (Above Rs. 1,000)
  const fullMenuItems = [
    {
      id: 'menu-1',
      name: 'Peshawari Mutton Karahi',
      description: 'Fresh tender mutton cooked in desi ghee with green chilies, juicy tomatoes, and organic spices.',
      price: 'Rs. 2,850',
      category: 'karahi',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'menu-2',
      name: 'Special Chicken Dum Biryani',
      description: 'Aromatic long-grain basmati rice layered with marinated chicken, saffron, and traditional spices.',
      price: 'Rs. 1,250',
      category: 'rice',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'menu-3',
      name: 'Beef Nalli Nihari',
      description: 'Slow-cooked beef shank stew topped with rich marrow, fresh ginger, lemon, and sliced green chilies.',
      price: 'Rs. 1,950',
      category: 'special',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1545247049-28f08fbc0b90?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'menu-4',
      name: 'Charcoal Chicken Boti',
      description: 'Boneless chicken cubes marinated in rich spices and cream, flame-grilled over burning charcoal.',
      price: 'Rs. 1,450',
      category: 'bbq',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'menu-5',
      name: 'Mughlai Chicken White Handi',
      description: 'Boneless chicken cooked in a velvety cream gravy with crushed black pepper and almonds.',
      price: 'Rs. 1,750',
      category: 'karahi',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'menu-6',
      name: 'Mutton Seekh Kebab',
      description: 'Minced mutton mixed with fresh herbs and spices, slow-grilled on traditional skewers.',
      price: 'Rs. 1,650',
      category: 'bbq',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'menu-7',
      name: 'Lahori Charcoal Sajji',
      description: 'Whole roasted chicken seasoned with authentic spices, served over fragrant Kabuli rice.',
      price: 'Rs. 2,150',
      category: 'bbq',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'menu-8',
      name: 'Royal Mutton Pulao',
      description: 'Flavorful basmati rice cooked in rich mutton yakhni with whole aromatic spices.',
      price: 'Rs. 1,550',
      category: 'rice',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'menu-9',
      name: 'Shinwari Lamb Tikka',
      description: 'Tender lamb chunks grilled over charcoal with natural lamb fat and sea salt.',
      price: 'Rs. 3,100',
      category: 'bbq',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'menu-10',
      name: 'Desi Ghee Paneer Reshmi Handi',
      description: 'Fresh cottage cheese cubes simmered in a velvety cashew and saffron gravy with butter.',
      price: 'Rs. 1,350',
      category: 'karahi',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'menu-11',
      name: 'Shahi Beef Haleem',
      description: 'Slow-cooked grain and beef lentils mash garnished with golden fried onions and fresh mint.',
      price: 'Rs. 1,150',
      category: 'special',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'menu-12',
      name: 'Lahori Tawa Fish Fry',
      description: 'Fresh river fish coated in spicy gram flour batter and crispy shallow fried on a traditional tawa.',
      price: 'Rs. 1,850',
      category: 'special',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80',
    },
  ];

  // Filter items based on active category tab
  const filteredProducts = fullMenuItems.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category && item.category.toLowerCase() === activeCategory.toLowerCase();
  });

  return (
    <section id="menu" className="max-w-[1200px] mx-auto px-5 py-[100px]">
      <SectionTitle>Our Menu</SectionTitle>

      {/* Category Filter Tabs with 'All' button */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 border ${activeCategory === cat.id
                ? 'bg-gold-gradient text-dark border-transparent shadow-gold font-semibold'
                : 'bg-accent/40 text-muted border-white/10 hover:border-gold/50 hover:text-gold'
              }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[30px]">
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}