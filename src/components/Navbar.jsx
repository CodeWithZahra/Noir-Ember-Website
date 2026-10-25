import { useEffect, useState } from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { navLinks } from '../data/staticData';

const Badge = ({ n }) =>
  n > 0 ? (
    <span className="absolute -top-[9px] -right-[11px] bg-ember text-white text-[0.65rem] font-semibold rounded-full min-w-[18px] h-[18px] flex items-center justify-center">
      {n}
    </span>
  ) : null;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { cartCount, favorites, setCartOpen } = useShop();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const iconBtn = 'relative flex text-white bg-transparent border-0 cursor-pointer transition-all duration-[400ms] hover:text-gold';

  return (
    <nav className={`fixed top-0 w-full z-[1000] transition-all duration-[400ms] border-b ${scrolled ? 'py-[15px] border-gold/15' : 'py-5 border-transparent'}`}>
      {/* blurred backdrop lives on its own layer so the mobile menu stays fixed to the viewport */}
      <div className={`absolute inset-0 -z-10 bg-[rgba(20,20,22,0.7)] backdrop-blur-[15px] transition-opacity duration-[400ms] ${scrolled ? 'opacity-100' : 'opacity-0'}`} />
      <div className="max-w-[1200px] mx-auto px-5 flex justify-between items-center">
        <div className="font-serif text-[1.8rem] font-bold tracking-[2px] bg-gold-gradient bg-clip-text text-transparent">Noir & Ember</div>

        <ul
          className={`fixed right-0 top-0 h-screen w-[60%] flex flex-col items-center pt-[100px] bg-dark list-none transition-transform duration-500 ease-in
            md:static md:h-auto md:w-auto md:flex-row md:pt-0 md:bg-transparent md:translate-x-0 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {navLinks.map((l, i) => (
            <li
              key={l.href}
              className={`my-5 md:my-0 md:ml-[30px] ${open ? 'opacity-0 animate-nav-fade' : ''}`}
              style={open ? { animationDelay: `${i / 7 + 0.3}s` } : undefined}
            >
              <a href={l.href} onClick={() => setOpen(false)} className="text-white font-light text-[0.9rem] tracking-wider uppercase transition-all duration-[400ms] hover:text-gold">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-[18px] md:ml-[30px]">
            <a href="#favorites" aria-label="Favorites" className={`${iconBtn} hover:!text-ember`}>
              <Heart size={22} />
              <Badge n={favorites.length} />
            </a>
            <button onClick={() => setCartOpen(true)} aria-label="Open cart" className={iconBtn}>
              <ShoppingBag size={22} />
              <Badge n={cartCount} />
            </button>
          </div>
          <div className="md:hidden cursor-pointer ml-2.5" onClick={() => setOpen(!open)} aria-label="Menu">
            <div className={`w-[25px] h-0.5 bg-gold m-[5px] transition-all duration-300 ${open ? '-rotate-45 translate-x-[-5px] translate-y-[6px]' : ''}`} />
            <div className={`w-[25px] h-0.5 bg-gold m-[5px] transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <div className={`w-[25px] h-0.5 bg-gold m-[5px] transition-all duration-300 ${open ? 'rotate-45 translate-x-[-5px] translate-y-[-6px]' : ''}`} />
          </div>
        </div>
      </div>
    </nav>
  );
}
