import { useShop } from '../context/ShopContext';
import useReveal from '../hooks/useReveal';
import SectionTitle from './SectionTitle';
import HeartButton from './HeartButton';
import AddToCartButton from './AddToCartButton';

export default function ChefSpecial() {
  const { bySection } = useShop();
  const [ref, cls] = useReveal();
  const special = bySection('special')[0];
  if (!special) return null;
  return (
    <section className="max-w-[1200px] mx-auto px-5 py-[100px]">
      <SectionTitle>Limited Edition Specials</SectionTitle>
      <div ref={ref} className={`${cls} flex flex-col md:flex-row bg-accent rounded-[25px] overflow-hidden border border-gold/15`}>
        <div className="flex-1 relative overflow-hidden min-h-[260px]">
          <img src={special.image} alt={special.name} className="w-full h-full object-cover absolute inset-0" />
          <HeartButton product={special} className="!top-5 !left-5" />
        </div>
        <div className="flex-1 p-[30px] md:p-[50px] flex flex-col justify-center">
          <span className="w-fit mb-5 px-[15px] py-[5px] rounded-full border border-ember text-ember bg-ember/10 text-[0.7rem]">Chef's Choice</span>
          <h3 className="font-serif text-[2.5rem] mb-5 leading-tight">{special.name}</h3>
          <p className="text-muted">{special.description}</p>
          <div className="flex items-center flex-wrap gap-[25px] mt-[25px]">
            <span className="font-serif text-[2rem] text-gold-light">${special.price}</span>
            <AddToCartButton product={special} auto />
          </div>
        </div>
      </div>
    </section>
  );
}
