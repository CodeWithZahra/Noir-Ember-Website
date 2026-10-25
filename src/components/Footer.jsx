const h4 = 'font-serif text-gold-light mb-5 text-[1.2rem]';
const link = 'text-muted transition-all duration-[400ms] hover:text-gold';

export default function Footer() {
  return (
    <footer id="contact" className="pt-20 pb-5 bg-[#050505] border-t border-gold/15">
      <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-[50px] mb-[50px]">
        <div className="text-muted">
          <div className="font-serif text-[1.8rem] font-bold tracking-[2px] bg-gold-gradient bg-clip-text text-transparent">Noir & Ember</div>
          <p className="mt-5">123 Luxury Lane, Ember District<br />New York, NY 10001</p>
          <p className="mt-5">info@noirember.com<br />+1 (555) 123-4567</p>
        </div>
        <div>
          <h4 className={h4}>Explore</h4>
          <ul className="list-none">
            {['Our Story', 'Wine List', 'Careers', 'Privacy Policy'].map((t) => (
              <li key={t} className="mb-2.5"><a href="#" className={link}>{t}</a></li>
            ))}
          </ul>
        </div>
        <div className="text-muted">
          <h4 className={h4}>Hours</h4>
          <p className="mb-2.5">Mon - Thu: 5:00 PM - 10:00 PM</p>
          <p className="mb-2.5">Fri - Sat: 5:00 PM - 12:00 AM</p>
          <p className="mb-2.5">Sun: 4:00 PM - 9:00 PM</p>
        </div>
        <div>
          <h4 className={h4}>Follow Us</h4>
          <div className="flex gap-5 text-[0.9rem]">
            {['Instagram', 'Facebook', 'Twitter'].map((t) => <a key={t} href="#" className="text-gold">{t}</a>)}
          </div>
        </div>
      </div>
      <div className="text-center pt-[30px] border-t border-gold/15 text-muted text-[0.8rem]">&copy; 2026 Noir & Ember. All Rights Reserved.</div>
    </footer>
  );
}
