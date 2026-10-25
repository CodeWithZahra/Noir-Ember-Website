import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react';
import { useShop } from '../context/ShopContext';

const qtyBtn = 'w-[26px] h-[26px] rounded-full border border-gold bg-transparent text-gold cursor-pointer flex items-center justify-center transition-all duration-[400ms] hover:bg-gold hover:text-dark';

export default function CartDrawer() {
  const { cart, cartOpen, setCartOpen, cartTotal, cartCount, updateQty, removeFromCart, clearCart, checkout } = useShop();
  const close = () => setCartOpen(false);

  return (
    <>
      <div onClick={close} className={`fixed inset-0 z-[1998] bg-black/70 backdrop-blur-[3px] transition-opacity duration-300 ${cartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} />
      <aside
        aria-hidden={!cartOpen}
        className={`fixed top-0 right-0 h-screen w-[420px] max-w-full z-[1999] bg-accent border-l border-gold/15 flex flex-col transition-transform duration-[400ms] ease-[cubic-bezier(0.165,0.84,0.44,1)] ${cartOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-between items-center p-[25px] border-b border-gold/15">
          <h3 className="font-serif text-[1.6rem] bg-gold-gradient bg-clip-text text-transparent">Your Cart ({cartCount})</h3>
          <button onClick={close} aria-label="Close cart" className="text-white hover:text-gold transition-colors cursor-pointer"><X size={22} /></button>
        </div>

        <div className="flex-1 overflow-y-auto px-[25px] py-5 flex flex-col gap-[15px]">
          {cart.length === 0 ? (
            <div className="text-center text-muted py-[50px] px-5 border border-dashed border-gold/15 rounded-[20px]">
              <ShoppingBag size={36} className="text-gold mx-auto mb-2.5" />
              <p>Your cart is empty.</p>
            </div>
          ) : (
            cart.map(({ product, quantity }) => (
              <div key={product.id} className="flex gap-3.5 bg-dark border border-gold/15 rounded-[15px] p-3">
                <img src={product.image} alt={product.name} className="w-[70px] h-[70px] rounded-[10px] object-cover" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-serif text-[0.95rem] text-gold-light">{product.name}</h4>
                  <span className="text-muted text-[0.8rem]">${product.price} each</span>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2.5">
                      <button className={qtyBtn} onClick={() => updateQty(product.id, quantity - 1)} aria-label="Decrease"><Minus size={14} /></button>
                      <span className="min-w-[18px] text-center font-semibold">{quantity}</span>
                      <button className={qtyBtn} onClick={() => updateQty(product.id, quantity + 1)} aria-label="Increase"><Plus size={14} /></button>
                    </div>
                    <span className="font-bold">${(product.price * quantity).toFixed(2)}</span>
                  </div>
                </div>
                <button onClick={() => removeFromCart(product.id)} aria-label="Remove" className="self-start text-muted hover:text-ember transition-colors cursor-pointer"><Trash2 size={18} /></button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-[25px] border-t border-gold/15">
            <div className="flex justify-between items-center text-[1.2rem] mb-[18px]">
              <span>Total</span>
              <strong className="font-serif text-[1.5rem] text-gold-light">${cartTotal.toFixed(2)}</strong>
            </div>
            <button onClick={checkout} className="w-full px-[35px] py-[15px] rounded-full bg-gold-gradient text-dark font-semibold text-sm tracking-wider uppercase shadow-gold cursor-pointer transition-all duration-[400ms] hover:-translate-y-[5px] hover:shadow-gold-lg">
              Checkout
            </button>
            <button onClick={clearCart} className="mt-3 w-full text-[0.8rem] text-muted hover:text-ember transition-colors cursor-pointer">Clear cart</button>
          </div>
        )}
      </aside>
    </>
  );
}
