import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const barVariants = {
    closed: { y: 0 },
    open: (i) => ({
      y: i % 2 === 0 ? '-100%' : '100%',
      transition: { duration: 1.5, delay: 1, ease: [0.7, 0, 0.3, 1] }
    })
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=2070" 
          className="w-full h-full object-cover opacity-60 scale-110"
          alt="Dramatic Mandi"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
      </div>

      {/* Jail Bars Animation Overlay */}
      <div className="absolute inset-0 z-20 flex">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={barVariants}
            initial="closed"
            animate={isLoaded ? "open" : "closed"}
            className="flex-1 bg-zinc-900 border-x border-white/5 relative jail-bar-shadow"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-primary font-bebas tracking-[0.3em] text-xl mb-4"
        >
          HIYYA JAIL MANDI PRESENTS
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 2.2 }}
          className="text-7xl md:text-9xl font-bebas text-white tracking-tighter leading-none mb-8 text-glow"
        >
          GET ARRESTED <br /> <span className="text-primary italic">BY TASTE</span>
        </motion.h1>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3 }}
          onClick={() => navigate('/menu')}
          className="group relative px-12 py-4 bg-primary text-white font-bebas tracking-widest text-2xl overflow-hidden transition-all hover:scale-105 active:scale-95"
        >
          <span className="relative z-10">ENTER THE CELL</span>
          <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <div className="absolute inset-0 border-2 border-white/20" />
        </motion.button>
      </div>

      {/* Smoke Overlay Effect */}
      <div className="absolute inset-0 pointer-events-none z-10 mix-blend-screen opacity-30">
        <div className="smoke-animation" />
      </div>
    </section>
  );
};

export default Hero;
