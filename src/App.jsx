import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Info, ShoppingBag, Mail, ChevronLeft, Heart } from 'lucide-react';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Sidebar = ({ expanded, setExpanded }) => {
  const navItems = [
    { name: 'Início', icon: Home, href: '#inicio' },
    { name: 'Sobre', icon: Info, href: '#sobre' },
    { name: 'Produtos', icon: ShoppingBag, href: '#servicos' },
    { name: 'Contato', icon: Mail, href: '#contato' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sidebarVariants = {
    expanded: { width: '16rem' },
    collapsed: { width: '5rem' },
  };

  const navItemVariants = {
    expanded: { opacity: 1, width: 'auto', marginLeft: '1rem' },
    collapsed: { opacity: 0, width: 0, marginLeft: 0 },
  }

  return (
    <motion.aside
      variants={sidebarVariants}
      initial={false}
      animate={expanded ? 'expanded' : 'collapsed'}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="sticky top-0 h-screen bg-gray-900 text-white flex flex-col z-40"
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-700 h-20">
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="flex items-center space-x-2 overflow-hidden"
            >
              <Heart className="w-7 h-7 text-orange-500 flex-shrink-0" />
              <span className="font-bold text-xl whitespace-nowrap">Clinicao</span>
            </motion.div>
          )}
        </AnimatePresence>
        <button
          onClick={() => setExpanded(!expanded)}
          className="p-2 rounded-full hover:bg-gray-800 transition-colors"
        >
          <motion.div animate={{ rotate: expanded ? 0 : 180 }} transition={{ duration: 0.3 }}>
            <ChevronLeft className="w-6 h-6" />
          </motion.div>
        </button>
      </div>

      <nav className="flex-1 px-2 py-4 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => scrollToSection(item.href)}
            className={`w-full flex items-center p-3 rounded-lg hover:bg-orange-600 transition-colors duration-200 ${!expanded ? 'justify-center' : ''}`}
          >
            <item.icon className="w-6 h-6 flex-shrink-0" />
            <AnimatePresence>
              {expanded && (
                <motion.span
                  variants={navItemVariants}
                  initial="collapsed"
                  animate="expanded"
                  exit="collapsed"
                  transition={{ duration: 0.2 }}
                  className="whitespace-nowrap"
                >
                  {item.name}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        ))}
      </nav>
    </motion.aside>
  );
};

export default function App() {
  const [isSidebarExpanded, setSidebarExpanded] = useState(true);

  return (
    <Router>
      <div className="flex min-h-screen bg-gradient-to-br from-orange-50 via-white to-purple-50">
        <Sidebar expanded={isSidebarExpanded} setExpanded={setSidebarExpanded} />
        <div className="flex-1 flex flex-col w-full overflow-x-hidden">
          <Header />
          <main>
            <Hero />
            <About />
            <Services />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}
