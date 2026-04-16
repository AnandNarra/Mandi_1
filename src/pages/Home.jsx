import React from 'react';
import Hero from '../components/Hero';
import MenuCard from '../components/MenuCard';
import { motion } from 'framer-motion';
import { menuItems } from '../data/menuData';

const Home = () => {
  // Show first 3 items on home page
  const featuredItems = menuItems.slice(0, 3);

  return (
    <div className="bg-black min-h-screen">
      <Hero />
      
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bebas text-white mb-4 tracking-tighter">SELECT YOUR <span className="text-primary italic">CELL MEAL</span></h2>
          <p className="text-white/40 font-inter tracking-[0.2em] uppercase text-sm">Every bite is a life sentence of flavor</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Aesthetic Section */}
      <section className="py-32 border-t border-white/5 relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-fixed bg-center">
        <div className="absolute inset-0 bg-black/80" />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 pointer-events-none">
          <h2 className="text-[20vw] font-bebas text-white whitespace-nowrap select-none overflow-hidden">HIYYA JAIL MANDI HIYYA JAIL MANDI</h2>
        </div>
        
        <div className="relative z-10 px-6 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-12 border border-white/10 backdrop-blur-xl metallic-bg"
          >
            <blockquote className="text-3xl md:text-5xl font-bebas italic text-white leading-tight mb-8">
              "THE ONLY PLACE WHERE <span className="text-primary">NO ESCAPE</span> IS THE BEST OPTION."
            </blockquote>
            <p className="font-bebas text-primary tracking-widest text-2xl">- THE WARDEN</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
