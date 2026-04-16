import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Flame, ShieldAlert, Zap, ShoppingCart } from 'lucide-react';
import useCartStore from '../store/cartStore';
import { menuItems } from '../data/menuData';

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const addToCart = useCartStore((state) => state.addToCart);
  
  const product = menuItems.find(p => p.id === parseInt(id)) || menuItems[0];
  const [portion, setPortion] = useState('Half');
  const [spice, setSpice] = useState('Medium');

  const price = portion === 'Half' ? product.basePrice : product.basePrice * 1.8;

  const handleLockOrder = () => {
    addToCart({
      ...product,
      portion,
      spice,
      price,
      // Create a unique cart ID based on modifiers
      id: `${product.id}-${portion}-${spice}`
    });
    navigate('/cart');
  };

  return (
    <div className="bg-black min-h-screen pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Product Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative rounded-2xl overflow-hidden aspect-square border border-white/10 shadow-2xl"
        >
          <img src={product.image} className="w-full h-full object-cover" alt={product.name} />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </motion.div>

        {/* Product Info */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           className="space-y-8"
        >
          <div>
            <p className="text-primary font-bebas tracking-[0.4em] mb-2">PRISON DOSSIER #{product.id}</p>
            <h1 className="text-6xl md:text-8xl font-bebas text-white tracking-tighter leading-tight">{product.name}</h1>
          </div>

          <p className="text-white/60 text-lg leading-relaxed max-w-xl">
            {product.description}
          </p>

          <div className="space-y-6">
            {/* Portion Selection */}
            <div>
              <p className="font-bebas text-white/50 tracking-widest mb-4">PORTION SIZE</p>
              <div className="flex gap-4">
                {['Half', 'Full'].map((p) => (
                  <button
                    key={p}
                    onClick={() => setPortion(p)}
                    className={`flex-1 py-4 font-bebas text-xl tracking-widest border transition-all ${
                      portion === p ? 'bg-primary border-primary text-white' : 'bg-transparent border-white/20 text-white/40 hover:border-white'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Spice Selector */}
            <div>
              <p className="font-bebas text-white/50 tracking-widest mb-4">INTERROGATION LEVEL (SPICE)</p>
              <div className="flex gap-4">
                {[
                  { name: 'Mild', icon: <Zap className="w-5 h-5" /> },
                  { name: 'Medium', icon: <Flame className="w-5 h-5" /> },
                  { name: 'Spicy', icon: <ShieldAlert className="w-5 h-5" /> }
                ].map((s) => (
                  <button
                    key={s.name}
                    onClick={() => setSpice(s.name)}
                    className={`flex-1 flex flex-col items-center gap-2 py-4 border transition-all ${
                      spice === s.name ? 'border-primary text-primary bg-primary/10 shadow-[0_0_20px_rgba(139,0,0,0.2)]' : 'border-white/10 text-white/30 hover:border-white/20'
                    }`}
                  >
                    {s.icon}
                    <span className="font-bebas tracking-widest">{s.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="text-left w-full sm:w-auto">
              <p className="text-white/40 font-bebas tracking-widest text-sm">SETTLEMENT AMOUNT</p>
              <p className="text-5xl font-bebas text-white">₹{price}</p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLockOrder}
              className="w-full sm:w-auto px-12 py-5 bg-primary text-white font-bebas text-2xl tracking-widest flex items-center justify-center gap-4 hover:bg-secondary transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              LOCK MY ORDER
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Product;
