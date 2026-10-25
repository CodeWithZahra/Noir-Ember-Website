import { useState } from 'react';
import { CalendarCheck } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import SectionTitle from './SectionTitle';

const empty = { name: '', email: '', phone: '', date: '', time: '19:00', guests: 2, notes: '' };
const input = 'w-full px-4 py-[13px] bg-accent border border-gold/15 rounded-xl text-white text-[0.9rem] outline-none transition-all duration-[400ms] focus:border-gold focus:shadow-gold [color-scheme:dark]';
const label = 'block text-xs tracking-wider uppercase text-gold-light mb-2';

export default function Reservations() {
  const [form, setForm] = useState(empty);
  const { addReservation, notify } = useShop();
  const today = new Date().toISOString().split('T')[0];

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    addReservation({ ...form, guests: Number(form.guests) });
    notify('Table reserved! We look forward to hosting you.');
    setForm(empty);
  };

  return (
    <section id="reservations" className="bg-accent py-[100px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <SectionTitle>Reserve a Table</SectionTitle>
        <p className="text-center text-muted max-w-[600px] mx-auto -mt-[30px] mb-[50px]">Secure your evening of dark elegance and fiery flavors.</p>
        <form onSubmit={submit} className="max-w-[800px] mx-auto bg-dark border border-gold/15 rounded-[20px] p-[25px] md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div><label className={label}>Full Name</label><input className={input} name="name" value={form.name} onChange={change} required /></div>
            <div><label className={label}>Email</label><input className={input} type="email" name="email" value={form.email} onChange={change} required /></div>
            <div><label className={label}>Phone</label><input className={input} name="phone" value={form.phone} onChange={change} required /></div>
            <div>
              <label className={label}>Guests</label>
              <select className={input} name="guests" value={form.guests} onChange={change}>
                {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
              </select>
            </div>
            <div><label className={label}>Date</label><input className={input} type="date" name="date" min={today} value={form.date} onChange={change} required /></div>
            <div><label className={label}>Time</label><input className={input} type="time" name="time" value={form.time} onChange={change} required /></div>
            <div className="md:col-span-2"><label className={label}>Special Requests</label><textarea className={input} name="notes" rows="3" value={form.notes} onChange={change} /></div>
          </div>
          <button className="mt-5 w-full px-[35px] py-[15px] rounded-full bg-gold-gradient text-dark font-semibold text-sm tracking-wider uppercase shadow-gold cursor-pointer transition-all duration-[400ms] hover:-translate-y-[5px] hover:shadow-gold-lg flex items-center justify-center gap-2">
            <CalendarCheck size={16} /> Confirm Reservation
          </button>
        </form>
      </div>
    </section>
  );
}
