import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Lock } from 'lucide-react';
import useCartStore from '../store/cartStore';

const Navbar = () => {
  const { cart } = useCartStore();
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bebas tracking-tighter text-white hover:text-primary transition-colors">
        HIYYA <span className="text-primary italic">JAIL</span> MANDI
      </Link>
      
      <div className="flex items-center gap-8">
        <Link to="/menu" className="font-bebas tracking-widest text-lg hover:text-primary transition-colors">THE MENU</Link>
        <Link to="/cart" className="relative group">
          <ShoppingBag className="w-6 h-6 group-hover:text-primary transition-colors" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
