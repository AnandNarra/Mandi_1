import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, ShoppingBag, ArrowLeft, Plus, Minus } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import useCartStore from '../store/cartStore';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCartStore();
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="bg-black min-h-screen pt-32 px-6 flex flex-col items-center justify-center text-center">
        <div className="w-32 h-32 bg-white/5 rounded-full flex items-center justify-center mb-8 border border-white/10">
          <ShoppingBag className="w-12 h-12 text-white/20" />
        </div>
        <h1 className="text-5xl font-bebas text-white mb-4">YOUR CELL TRAY IS EMPTY</h1>
        <p className="text-white/40 font-inter max-w-md mb-12">No evidence found. It seems you haven't locked in any orders yet.</p>
        <Link 
          to="/menu" 
          className="px-12 py-4 bg-primary text-white font-bebas text-2xl tracking-widest hover:bg-secondary transition-colors"
        >
          GET ARRESTED
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-8">
          <div>
            <p className="text-primary font-bebas tracking-widest mb-2">PRISONER LOG</p>
            <h1 className="text-6xl font-bebas text-white tracking-tighter">THE CELL TRAY</h1>
          </div>
          <span className="text-white/20 font-bebas text-2xl tracking-widest">{cart.length} ITEMS</span>
        </div>

        <div className="space-y-6">
          <AnimatePresence>
            {cart.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="metallic-bg border border-white/10 p-6 flex flex-col md:flex-row items-center gap-6"
              >
                <img src={item.image} className="w-24 h-24 object-cover rounded border border-white/10" alt={item.name} />
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bebas text-white tracking-wide">{item.name}</h3>
                  <p className="text-primary/80 font-inter text-xs tracking-widest uppercase">
                    {item.portion} PORTION / {item.spice} SPICE
                  </p>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-4 bg-black/40 border border-white/5 px-4 py-2">
                    <button 
                      onClick={() => updateQuantity(item.id, item.portion, item.quantity - 1)}
                      className="text-white/40 hover:text-white transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="text-xl font-bebas text-white w-8 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.portion, item.quantity + 1)}
                      className="text-white/40 hover:text-white transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  
                  <div className="w-24 text-right">
                    <p className="text-2xl font-bebas text-white">₹{item.price * item.quantity}</p>
                  </div>

                  <button 
                    onClick={() => removeFromCart(item.id, item.portion)}
                    className="p-3 text-white/20 hover:text-primary transition-colors hover:bg-primary/10 rounded"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-12 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <Link 
            to="/menu" 
            className="flex items-center gap-2 text-white/40 hover:text-white transition-colors font-bebas tracking-widest"
          >
            <ArrowLeft size={18} />
            BACK TO CAFETERIA
          </Link>

          <div className="w-full md:w-96 space-y-6">
            <div className="flex justify-between items-end border-b border-white/5 pb-4">
              <span className="text-white/40 font-bebas tracking-widest">TOTAL FINE</span>
              <span className="text-4xl font-bebas text-white">₹{total}</span>
            </div>
            
            <button 
              onClick={() => alert('Order Served! (Simulation)')}
              className="w-full py-5 bg-primary text-white font-bebas text-3xl tracking-widest hover:bg-secondary transition-all shadow-[0_0_30px_rgba(139,0,0,0.3)] hover:shadow-[0_0_50px_rgba(139,0,0,0.5)] active:scale-[0.98]"
            >
              SERVE MY SENTENCE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
