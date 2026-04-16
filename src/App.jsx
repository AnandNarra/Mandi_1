import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Product from './pages/Product';
import Cart from './pages/Cart';
import { AnimatePresence } from 'framer-motion';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-black text-white selection:bg-primary selection:text-white">
        <Navbar />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </AnimatePresence>

        {/* Global UI Elements */}
        <footer className="py-12 px-6 border-t border-white/5 bg-black text-center">
          <p className="font-bebas text-white/20 tracking-widest text-lg">
            &copy; {new Date().getFullYear()} HIYYA JAIL MANDI. ALL RIGHTS CONFISCATED.
          </p>
          <div className="mt-4 flex justify-center gap-8 opacity-40 hover:opacity-100 transition-opacity">
            <span className="font-bebas cursor-pointer hover:text-primary transition-colors">INSTAGRAM</span>
            <span className="font-bebas cursor-pointer hover:text-primary transition-colors">FACBOOK (LIFER)</span>
            <span className="font-bebas cursor-pointer hover:text-primary transition-colors">THE WARDEN'S BLOG</span>
          </div>
        </footer>

        {/* Background Smoke Effect Overlay */}
        <div className="fixed inset-0 pointer-events-none z-[1] opacity-20 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className="smoke-particle"
              style={{
                width: Math.random() * 400 + 200 + 'px',
                height: Math.random() * 400 + 200 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animation: `smoke ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `-${Math.random() * 20}s`
              }}
            />
          ))}
        </div>
      </div>
    </Router>
  );
}

export default App;
