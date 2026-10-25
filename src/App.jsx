import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SignatureMenu from './components/SignatureMenu';
import GuestFavorites from './components/GuestFavorites';
import ChefSpecial from './components/ChefSpecial';
import PremiumHighlight from './components/PremiumHighlight';
import FavoritesSection from './components/FavoritesSection';
import Reservations from './components/Reservations';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Toast from './components/Toast';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SignatureMenu />
      <GuestFavorites />
      <ChefSpecial />
      <PremiumHighlight />
      <FavoritesSection />
      <Reservations />
      <Events />
      <Gallery />
      <Testimonials />
      <Footer />
      <CartDrawer />
      <Toast />
    </>
  );
}
