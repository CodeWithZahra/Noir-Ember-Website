import { CalendarDays } from 'lucide-react';
import useReveal from '../hooks/useReveal';
import SectionTitle from './SectionTitle';

// Authentic Pakistani Halal Events Data
const pakistaniEventsData = [
  {
    id: 'evt-1',
    tag: 'Live Music',
    title: 'Sufi Qawwali & Dinner Night',
    date: 'Every Saturday | 8:00 PM',
    description: 'Immerse in soul-stirring live Sufi Qawwali performances while enjoying our special Royal Peshawari Lamb Dinner.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'evt-2',
    tag: 'Special Feast',
    title: 'Rooftop Charcoal BBQ Festival',
    date: 'Every Friday | 7:30 PM',
    description: 'Experience live coal grilling under the open sky featuring live Sajji, Seekh Kebabs, and fresh hot Naan.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'evt-3',
    tag: 'Family Dining',
    title: 'Sunday Grand Halwa Puri Buffet',
    date: 'Every Sunday | 8:00 AM - 1:00 PM',
    description: 'A traditional Lahori breakfast spread with hot puris, chana masala, sweet halwa, and authentic kulhad chai.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
  },
];

function EventCard({ event }) {
  const [ref, cls] = useReveal();
  return (
    <div ref={ref} className={`${cls} bg-accent border border-gold/15 rounded-[20px] overflow-hidden flex flex-col transition-all duration-[400ms] hover:-translate-y-2.5 hover:border-gold hover:shadow-gold`}>
      <img src={event.image} alt={event.title} className="w-full h-[200px] object-cover" />
      <div className="p-[25px] flex flex-col flex-1">
        <span className="w-fit mb-3 px-[15px] py-[5px] rounded-full border border-ember text-ember bg-ember/10 text-[0.7rem] font-semibold">{event.tag}</span>
        <h3 className="font-serif text-[1.4rem] text-gold-light mb-2">{event.title}</h3>
        <div className="flex items-center gap-2 text-gold text-[0.85rem] mb-3">
          <CalendarDays size={16} /> {event.date}
        </div>
        <p className="text-muted text-[0.9rem] flex-1">{event.description}</p>
        <a href="#reservations" className="text-gold font-semibold mt-[18px] hover:text-gold-light transition-colors">
          Reserve a Table →
        </a>
      </div>
    </div>
  );
}

export default function Events() {
  return (
    <section id="events" className="max-w-[1200px] mx-auto px-5 py-[100px]">
      <SectionTitle>Upcoming Events</SectionTitle>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[30px]">
        {pakistaniEventsData.map((e) => (
          <EventCard key={e.id} event={e} />
        ))}
      </div>
    </section>
  );
}