import React from 'react';
import MenuCard from '../components/MenuCard';
import { motion } from 'framer-motion';
import { menuItems } from '../data/menuData';

const Menu = () => {
  return (
    <div className="bg-black min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-bebas tracking-[0.5em] mb-4"
          >
            CONFISCATED RECIPES
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-bebas text-white tracking-tighter"
          >
            OUR <span className="text-primary italic">MANIFESTO</span>
          </motion.h1>
          <div className="h-1 w-24 bg-primary mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <MenuCard item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
