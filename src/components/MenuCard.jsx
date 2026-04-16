import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const MenuCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative group cursor-pointer overflow-hidden metallic-bg rounded-lg aspect-[4/5]"
      onClick={() => navigate(`/product/${item.id}`)}
    >
      <img 
        src={item.image} 
        alt={item.name}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 transition-colors duration-500 rounded-lg shadow-[inset_0_0_50px_rgba(0,0,0,0.8)]" />

      <div className="absolute bottom-0 left-0 p-8 w-full">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="space-y-2"
        >
          <p className="text-primary font-bebas text-lg tracking-widest">{item.category}</p>
          <h3 className="text-4xl font-bebas text-white tracking-tight">{item.name}</h3>
          <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500" />
          <p className="text-white/60 font-inter text-sm line-clamp-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {item.description}
          </p>
        </motion.div>
      </div>

      <div className="absolute top-4 right-4 flex gap-2">
        <div className="px-3 py-1 bg-black/80 backdrop-blur-md border border-white/10 text-white font-bebas text-sm">
          PRISONER #{item.id}
        </div>
      </div>
    </motion.div>
  );
};

export default MenuCard;
