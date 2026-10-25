import { useShop } from '../context/ShopContext';
import SectionTitle from './SectionTitle';
import SmallCard from './SmallCard';

export default function GuestFavorites() {
  const { bySection } = useShop();
  return (
    <section className="bg-accent py-[100px]">
      <div className="max-w-[1200px] mx-auto px-5 flex flex-col lg:flex-row gap-[50px] lg:items-center">
        <div className="flex-1">
          <SectionTitle left>Guest Favorites</SectionTitle>
          <p>Our most beloved dishes, prepared with passion and the finest seasonal ingredients.</p>
        </div>
        <div className="flex-[1.5] grid grid-cols-1 md:grid-cols-2 gap-5">
          {bySection('favorite').map((p) => <SmallCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  );
}
