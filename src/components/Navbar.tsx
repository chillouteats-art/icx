import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/discover-pakistan', label: 'Discover Pakistan' },
    { path: '/apply', label: 'Apply Now' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-emerald-100/50' 
          : 'bg-gradient-to-b from-white/90 to-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-emerald-400/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <img 
                src="/aiesec.png" 
                alt="AIESEC" 
                className="h-10 w-10 relative z-10 drop-shadow-sm" 
              />
            </motion.div>
            <div className="flex flex-col">
              <motion.span 
                className="font-serif text-xl font-bold bg-gradient-to-r from-blue-700 via-emerald-600 to-teal-700 bg-clip-text text-transparent"
                whileHover={{ scale: 1.02 }}
              >
                ICX AIESEC in Pakistan
              </motion.span>
              <div className="h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 group ${
                    location.pathname === item.path
                      ? 'text-white'
                      : 'text-slate-700 hover:text-emerald-700'
                  }`}
                >
                  {/* Active background */}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full shadow-lg"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  {/* Hover background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Text */}
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Hover underline */}
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full group-hover:w-8 transition-all duration-300"></div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 text-slate-700 hover:text-emerald-700 transition-colors duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden pb-6 border-t border-emerald-100/50 mt-4"
          >
            <div className="pt-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                      location.pathname === item.path
                        ? 'bg-gradient-to-r from-blue-500 to-emerald-500 text-white shadow-lg'
                        : 'text-slate-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-emerald-50 hover:text-emerald-700'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};