import { testimonials, stars } from '../data/staticData';
import useReveal from '../hooks/useReveal';
import SectionTitle from './SectionTitle';

function Card({ t }) {
  const [ref, cls] = useReveal();
  return (
    <div ref={ref} className={`${cls} bg-dark p-10 rounded-[20px] text-center border border-gold/15 transition-all duration-[400ms] hover:border-gold hover:-translate-y-[5px]`}>
      <img src={t.img} alt="Guest" className="w-20 h-20 rounded-full mb-5 mx-auto border-2 border-gold" />
      <p className="italic text-muted mb-5">{t.text}</p>
      <h4 className="font-serif mb-2.5 text-gold-light">{t.name}</h4>
      <div className="text-gold">{stars(5)}</div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-accent py-[100px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <SectionTitle>Guest Stories</SectionTitle>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[30px]">
          {testimonials.map((t) => <Card key={t.name} t={t} />)}
        </div>
      </div>
    </section>
  );
}
