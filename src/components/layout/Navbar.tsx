import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Heart, Menu, X, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
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
            ? 'glass-nav shadow-sm py-3'
            : 'bg-white/95 backdrop-blur-md py-4 border-b border-[#E1E3E4]'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <NavLink
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#003366] rounded-xl p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-[#003366] to-[#006E25] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Heart className="w-6 h-6 text-white fill-white/20" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold text-[#001E40] tracking-tight leading-none">
                InAmigos
              </span>
              <span className="text-[11px] font-semibold text-[#006E25] tracking-wide uppercase mt-0.5">
                Foundation
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-[#F8F9FA] p-1.5 rounded-full border border-[#E1E3E4]">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 text-xs font-semibold rounded-full transition-all duration-150 relative ${
                    isActive
                      ? 'bg-[#003366] text-white shadow-sm'
                      : 'text-[#43474F] hover:text-[#001E40] hover:bg-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    {isActive && (
                      <span
                        className="sr-only"
                        aria-current="page"
                      >
                        (Current Page)
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
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

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center sm:hidden gap-2">
            <NavLink to="/donate">
              <Button variant="primary" size="sm">
                Donate
              </Button>
            </NavLink>

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 rounded-xl text-[#001E40] hover:bg-[#F8F9FA] focus:outline-none focus:ring-2 focus:ring-[#003366]"
              aria-expanded={isMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isMenuOpen && (
          <div className="lg:hidden w-full bg-white border-b border-[#E1E3E4] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-4 py-3 text-sm font-semibold rounded-xl transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-[#003366] text-white'
                        : 'text-[#191C1D] hover:bg-[#F8F9FA]'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-[#E1E3E4] flex flex-col gap-2">
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
          </div>
        )}
      </nav>
    </header>
  );
};
