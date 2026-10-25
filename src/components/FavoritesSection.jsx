import { Heart } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import SectionTitle from './SectionTitle';
import ProductCard from './ProductCard';

export default function FavoritesSection() {
  const { favorites } = useShop();

  return (
    <section id="favorites" className="max-w-[1200px] mx-auto px-5 py-[100px]">
      <SectionTitle>Your Favorites</SectionTitle>
      {favorites.length === 0 ? (
        <div className="text-center text-muted py-[50px] px-5 border border-dashed border-gold/15 rounded-[20px]">
          <Heart size={36} className="text-ember mx-auto mb-2.5" />
          <p>No favorites yet. Tap the heart on any dish to save it here.</p>
        </div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,320px))] justify-center gap-[30px]">
          {favorites.map((p) => (
            <div key={p.id} className="w-full">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}