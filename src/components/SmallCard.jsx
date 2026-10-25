import { Plus } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import useReveal from '../hooks/useReveal';
import { stars } from '../data/staticData';
import HeartButton from './HeartButton';

export default function SmallCard({ product }) {
  const { addToCart } = useShop();
  const [ref, cls] = useReveal();

  // Price formatting: Strictly Rs. 1,000+ in PKR
  const getFormattedPrice = (val) => {
    if (!val) return 'Rs. 1,450';
    let cleanStr = String(val).replace(/[^0-9]/g, '');
    let num = parseInt(cleanStr, 10);
    if (isNaN(num) || num < 1000) {
      num = 1450; // Default minimum 1000 se upar
    }
    return `Rs. ${num.toLocaleString()}`;
  };

  const formattedPrice = getFormattedPrice(product.price);

  return (
    <div
      ref={ref}
      className={`${cls} flex items-center gap-[15px] bg-dark p-[15px] rounded-[15px] border border-gold/15 transition-all duration-[400ms] hover:scale-105 hover:border-gold`}
    >
      <img
        src={product.image || 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80'}
        alt={product.name}
        className="w-20 h-20 rounded-[10px] object-cover shrink-0"
      />
      <div className="flex-1 min-w-0">
        <h4 className="font-serif text-base text-gold-light truncate">{product.name}</h4>
        <div className="text-gold text-[0.7rem]">{stars ? stars(product.rating || 5) : '★★★★★'}</div>
        <div className="flex items-center gap-2 mt-1.5">
          <span className="font-bold text-gold text-sm mr-auto">{formattedPrice}</span>
          <HeartButton product={product} inline />
          <button
            onClick={() => addToCart(product)}
            aria-label={`Add ${product.name} to cart`}
            className="w-8 h-8 shrink-0 rounded-full border border-gold text-gold flex items-center justify-center cursor-pointer transition-all duration-[400ms] hover:bg-gold hover:text-dark"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}