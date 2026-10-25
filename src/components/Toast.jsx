import { useShop } from '../context/ShopContext';

export default function Toast() {
  const { toast } = useShop();
  return (
    <div
      className={`fixed bottom-[30px] left-1/2 -translate-x-1/2 z-[3000] bg-accent border text-white px-6 py-3 rounded-full text-[0.9rem] shadow-gold transition-all duration-[400ms] ${
        toast.type === 'error' ? 'border-ember' : 'border-gold'
      } ${toast.show ? 'translate-y-0 opacity-100' : 'translate-y-[100px] opacity-0 pointer-events-none'}`}
    >
      {toast.msg}
    </div>
  );
}
