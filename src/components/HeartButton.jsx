import { Heart } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function HeartButton({ product, inline = false, className = '' }) {
  const { isFavorite, toggleFavorite } = useShop();
  const active = isFavorite(product.id);
  const size = inline ? 'w-8 h-8 shrink-0' : 'absolute top-[15px] left-[15px] z-[2] w-[38px] h-[38px]';
  return (
    <button
      onClick={() => toggleFavorite(product)}
      aria-label={active ? 'Remove from favorites' : 'Add to favorites'}
      aria-pressed={active}
      className={`${size} ${className} rounded-full bg-dark/70 border flex items-center justify-center cursor-pointer backdrop-blur-md transition-all duration-[400ms] hover:scale-110 hover:border-ember ${
        active ? 'text-ember border-ember shadow-ember' : 'text-white border-gold/15'
      }`}
    >
      <Heart size={inline ? 16 : 18} fill={active ? 'currentColor' : 'none'} />
    </button>
  );
}
