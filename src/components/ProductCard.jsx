import useReveal from '../hooks/useReveal';
import HeartButton from './HeartButton';
import AddToCartButton from './AddToCartButton';

export default function ProductCard({ product }) {
  const [ref, cls] = useReveal();

  // Price formatting: Ensure clean Rs. format with amounts above 1000
  const getFormattedPrice = (val) => {
    if (!val) return 'Rs. 1,450';
    let cleanStr = String(val).replace(/[^0-9]/g, '');
    let num = parseInt(cleanStr, 10);
    if (isNaN(num) || num < 1000) {
      num = 1450; // Minimum 1000 se upar ka default price
    }
    return `Rs. ${num.toLocaleString()}`;
  };

  const formattedPrice = getFormattedPrice(product.price);

  return (
    <div
      ref={ref}
      className={`${cls} group bg-accent rounded-[20px] overflow-hidden p-5 border border-gold/15 transition-all duration-[400ms] hover:-translate-y-2.5 hover:border-gold hover:shadow-gold`}
    >
      <div className="relative rounded-[15px] overflow-hidden mb-5">
        <img
          src={product.image || 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80'}
          alt={product.name}
          className="w-full h-[250px] object-cover transition-all duration-[400ms] group-hover:scale-110"
        />
        <HeartButton product={product} />
        <span className="absolute top-[15px] right-[15px] bg-gold-gradient text-dark px-[15px] py-[5px] rounded-[20px] font-bold text-[0.9rem]">
          {formattedPrice}
        </span>
      </div>
      <h3 className="font-serif text-2xl mb-2.5 text-gold-light">{product.name}</h3>
      <p className="text-muted text-[0.9rem] mb-4">{product.description}</p>
      <AddToCartButton product={product} />
    </div>
  );
}