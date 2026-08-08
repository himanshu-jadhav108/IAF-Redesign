import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Heart, Menu, X, ShieldCheck, Sun, Moon } from 'lucide-react';
import iafLogo from '@/assets/iaf_logo.png';
import { Button } from '@/components/ui/Button';
import { useTheme } from '@/context/ThemeContext';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page navigation
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Programs', path: '/programs' },
    { label: 'Volunteer', path: '/volunteer' },
    { label: 'Donate', path: '/donate' },
    { label: 'Events', path: '/events' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-colors duration-200">
      {/* Top Banner: Prototype & Compliance Notice */}
      <div className="bg-[#001E40] text-white px-4 py-1.5 text-xs text-center font-medium flex flex-wrap justify-between items-center gap-2 border-b border-white/10">
        <div className="flex items-center gap-2 mx-auto md:mx-0">
          <span className="bg-[#FF8C00] text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded-full">
            Conceptual Prototype
          </span>
          <span className="hidden sm:inline text-slate-300">
            Design & UX Redesign for InAmigos Foundation
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-4 text-slate-300 text-[11px]">
          <span className="flex items-center gap-1 text-emerald-400 font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" /> 80G Tax Exempted NGO
          </span>
          <span>•</span>
          <span>Reg: Section 8 / NITI Aayog</span>
          <span>•</span>
          <span>Bilaspur, Chhattisgarh</span>
        </div>
      </div>

      {/* Main Glassmorphic Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-md py-3'
            : 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md py-4 border-b border-[#E1E3E4] dark:border-slate-800'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <NavLink
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#003366] dark:focus:ring-sky-400 rounded-xl p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 p-1 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform border border-[#E1E3E4] dark:border-slate-700">
              <img src={iafLogo} alt="InAmigos Foundation Emblem" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-lg font-extrabold text-[#001E40] dark:text-white tracking-tight leading-none">
                InAmigos
              </span>
              <span className="text-[11px] font-semibold text-[#006E25] dark:text-emerald-400 tracking-wide uppercase mt-0.5">
                Foundation
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-[#F8F9FA] dark:bg-slate-800/80 p-1.5 rounded-full border border-[#E1E3E4] dark:border-slate-700">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 text-xs font-semibold rounded-full transition-all duration-150 relative ${
                    isActive
                      ? 'bg-[#003366] dark:bg-sky-500 text-white shadow-xs'
                      : 'text-[#43474F] dark:text-slate-300 hover:text-[#001E40] dark:hover:text-white hover:bg-white dark:hover:bg-slate-700'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="sr-only" aria-current="page">
                        (Current Page)
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Action CTAs + Theme Toggle */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <motion.button
              whileTap={shouldReduceMotion ? undefined : { scale: 0.9, rotate: 15 }}
              type="button"
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-[#F8F9FA] dark:bg-slate-800 border border-[#E1E3E4] dark:border-slate-700 text-[#003366] dark:text-amber-300 hover:bg-[#E1E3E4] dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-[#003366] dark:focus:ring-amber-300"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={shouldReduceMotion ? undefined : { opacity: 0, rotate: -30 }}
                  animate={shouldReduceMotion ? undefined : { opacity: 1, rotate: 0 }}
                  exit={shouldReduceMotion ? undefined : { opacity: 0, rotate: 30 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            <NavLink to="/volunteer">
              <Button variant="outline" size="sm">
                Volunteer
              </Button>
            </NavLink>

            <NavLink to="/donate">
              <Button
                variant="primary"
                size="sm"
                icon={<Heart className="w-4 h-4 fill-white" />}
              >
                Donate
              </Button>
            </NavLink>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex items-center sm:hidden gap-2">
            {/* Theme Toggle for Mobile */}
            <motion.button
              whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-full bg-[#F8F9FA] dark:bg-slate-800 border border-[#E1E3E4] dark:border-slate-700 text-[#003366] dark:text-amber-300"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </motion.button>

            <NavLink to="/donate">
              <Button variant="primary" size="sm">
                Donate
              </Button>
            </NavLink>

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-xl text-[#001E40] dark:text-white hover:bg-[#F8F9FA] dark:hover:bg-slate-800 focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="lg:hidden w-full bg-white dark:bg-slate-900 border-b border-[#E1E3E4] dark:border-slate-800 px-4 pt-3 pb-6 shadow-xl overflow-hidden"
            >
              <div className="flex flex-col gap-1 text-left">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `px-4 py-3 text-sm font-semibold rounded-xl transition-colors flex items-center justify-between ${
                        isActive
                          ? 'bg-[#003366] dark:bg-sky-500 text-white'
                          : 'text-[#191C1D] dark:text-slate-200 hover:bg-[#F8F9FA] dark:hover:bg-slate-800'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-[#E1E3E4] dark:border-slate-800 flex flex-col gap-2">
                <NavLink to="/volunteer" className="w-full">
                  <Button variant="outline" fullWidth>
                    Become a Volunteer
                  </Button>
                </NavLink>
                <NavLink to="/donate" className="w-full">
                  <Button
                    variant="primary"
                    fullWidth
                    icon={<Heart className="w-4 h-4 fill-white" />}
                  >
                    Make a Donation
                  </Button>
                </NavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
