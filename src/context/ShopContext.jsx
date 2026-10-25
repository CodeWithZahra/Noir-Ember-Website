import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { products } from '../data/staticData';

const ShopContext = createContext(null);
export const useShop = () => useContext(ShopContext);

export function ShopProvider({ children }) {
  const [cartRaw, setCartRaw] = useLocalStorage('ne_cart', []); // [{ id, quantity }]
  const [favIds, setFavIds] = useLocalStorage('ne_favs', []); // [id]
  const [, setReservations] = useLocalStorage('ne_reservations', []);
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState({ msg: '', type: '', show: false });
  const timer = useRef();

  const notify = useCallback((msg, type = '') => {
    clearTimeout(timer.current);
    setToast({ msg, type, show: true });
    timer.current = setTimeout(() => setToast((t) => ({ ...t, show: false })), 2500);
  }, []);

  const cart = useMemo(
    () => cartRaw.map((i) => ({ product: products.find((p) => p.id === i.id), quantity: i.quantity })).filter((i) => i.product),
    [cartRaw]
  );
  const favorites = useMemo(() => products.filter((p) => favIds.includes(p.id)), [favIds]);

  const addToCart = (product) => {
    setCartRaw((prev) =>
      prev.some((i) => i.id === product.id)
        ? prev.map((i) => (i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i))
        : [...prev, { id: product.id, quantity: 1 }]
    );
    notify(`${product.name} added to cart`);
  };
  const updateQty = (id, quantity) =>
    setCartRaw((prev) => (quantity < 1 ? prev.filter((i) => i.id !== id) : prev.map((i) => (i.id === id ? { ...i, quantity } : i))));
  const removeFromCart = (id) => {
    setCartRaw((prev) => prev.filter((i) => i.id !== id));
    notify('Item removed');
  };
  const clearCart = () => {
    setCartRaw([]);
    notify('Cart cleared');
  };
  const cartCount = cart.reduce((n, i) => n + i.quantity, 0);
  const cartTotal = cart.reduce((s, i) => s + i.product.price * i.quantity, 0);

  const checkout = () => {
    const total = cartTotal;
    setCartRaw([]);
    setCartOpen(false);
    notify(`Order placed! Total $${total.toFixed(2)}`);
  };

  const isFavorite = (id) => favIds.includes(id);
  const toggleFavorite = (product) => {
    const was = favIds.includes(product.id);
    setFavIds((prev) => (was ? prev.filter((x) => x !== product.id) : [...prev, product.id]));
    notify(was ? 'Removed from favorites' : 'Added to favorites');
  };

  const addReservation = (data) => setReservations((prev) => [...prev, { ...data, createdAt: Date.now() }]);
  const bySection = (s) => products.filter((p) => p.section === s);

  return (
    <ShopContext.Provider
      value={{
        bySection, cart, favorites, toast, notify, addReservation,
        cartOpen, setCartOpen, cartCount, cartTotal,
        addToCart, updateQty, removeFromCart, clearCart, checkout, toggleFavorite, isFavorite,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}
