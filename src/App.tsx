import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AIAssistant } from '@/components/ai/AIAssistant';

import { ThemeProvider } from '@/context/ThemeContext';

import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Programs } from '@/pages/Programs';
import { Volunteer } from '@/pages/Volunteer';
import { Donate } from '@/pages/Donate';
import { Events } from '@/pages/Events';
import { Gallery } from '@/pages/Gallery';
import { Contact } from '@/pages/Contact';

// Scroll to top on navigation change
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#F8F9FA] dark:bg-slate-900 text-[#191C1D] dark:text-slate-100 antialiased transition-colors duration-250">
          <Navbar />
          <main className="flex-1 w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/volunteer" element={<Volunteer />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/events" element={<Events />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <AIAssistant />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
