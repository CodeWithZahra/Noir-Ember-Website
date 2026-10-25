import { useShop } from '../context/ShopContext';
import SectionTitle from './SectionTitle';
import ProductCard from './ProductCard';

export default function SignatureMenu() {
  const { bySection } = useShop();
  return (
    <section id="menu" className="max-w-[1200px] mx-auto px-5 py-[100px]">
      <SectionTitle>Chef's Signature Selections</SectionTitle>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[30px]">
        {bySection('signature').map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  );
}
