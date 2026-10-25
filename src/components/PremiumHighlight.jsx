import { highlightImage } from '../data/staticData';

export default function PremiumHighlight() {
  return (
    <section
      className="h-[60vh] relative bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url('${highlightImage}')` }}
    >
      <div className="absolute inset-0 flex items-center bg-gradient-to-r from-black/80 from-40% to-transparent">
        <div className="max-w-[1200px] mx-auto px-5 w-full">
          <h2 className="font-serif text-[2.2rem] md:text-[3.5rem] mb-5 max-w-[600px] leading-tight">A Masterpiece in Every Bite</h2>
          <p className="max-w-[500px] text-muted">
            Our commitment to sourcing only the highest quality ingredients ensures a dining experience that is both luxurious and unforgettable.
          </p>
        </div>
      </div>
    </section>
  );
}
