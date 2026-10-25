import Button from './Button';
import { heroImage } from '../data/staticData';

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center text-center px-5 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('${heroImage}')` }}
    >
      <div className="max-w-[800px]">
        <h1 className="font-serif text-[clamp(2.5rem,8vw,5rem)] mb-5 leading-[1.1] opacity-0 animate-fade-up">Experience Culinary Excellence</h1>
        <p className="text-[1.2rem] text-muted mb-10 opacity-0 animate-fade-up [animation-delay:0.2s]">
          Indulge in an extraordinary fusion of dark elegance and fiery flavors, crafted for those who appreciate the finer things in life.
        </p>
        <div className="flex flex-col items-center sm:flex-row gap-5 justify-center opacity-0 animate-fade-up [animation-delay:0.4s]">
          <Button href="#reservations">Reserve a Table</Button>
          <Button href="#menu" variant="outline">Explore Menu</Button>
        </div>
      </div>
    </section>
  );
}
