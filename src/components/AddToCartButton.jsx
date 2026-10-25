import { ShoppingCart } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function AddToCartButton({ product, auto = false }) {
  const { addToCart } = useShop();
  return (
    <button
      onClick={() => addToCart(product)}
      className={`${auto ? 'px-7 py-3' : 'mt-[18px] w-full py-[11px]'} rounded-full border border-gold bg-transparent text-gold font-semibold text-[0.8rem] tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer transition-all duration-[400ms] hover:bg-gold-gradient hover:text-dark hover:shadow-gold`}
    >
      <ShoppingCart size={16} /> Add to Cart
    </button>
  );
}
