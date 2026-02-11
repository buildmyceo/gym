import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Services', href: '#services' },
    { name: 'Facility', href: '#facility' },
    { name: 'Membership', href: '#membership' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled
          ? 'bg-stone-50/90 backdrop-blur-md border-stone-200 py-4 shadow-sm'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="z-50 group">
          <span className={`text-2xl font-serif tracking-widest font-semibold transition-colors duration-300 ${
            isScrolled || mobileMenuOpen ? 'text-stone-900' : 'text-stone-900 md:text-white'
          }`}>
            AETHER
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm uppercase tracking-widest font-medium hover:text-bronze transition-colors ${
                isScrolled ? 'text-stone-600' : 'text-stone-200'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#booking"
            className={`px-6 py-2 border text-sm uppercase tracking-widest transition-all duration-300 ${
              isScrolled
                ? 'border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-stone-900'
            }`}
          >
            Book Assessment
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-stone-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} className={isScrolled ? 'text-stone-900' : 'text-stone-900'} />} 
          {/* Note: In hero state without scroll, mobile icon needs to be visible. Assuming hero bg is dark image, let's keep icon color adaptable or fixed. Fixed dark for safety if hero has light overlay, but standard pattern is toggle color. Let's fix icon color logic: Always dark on mobile open, adaptable otherwise. */}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-stone-50 z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-serif text-stone-800 hover:text-bronze transition-colors"
          >
            {link.name}
          </a>
        ))}
        <a
          href="#booking"
          onClick={() => setMobileMenuOpen(false)}
          className="px-8 py-3 border border-stone-800 text-stone-800 uppercase tracking-widest hover:bg-stone-800 hover:text-white transition-colors"
        >
          Book Assessment
        </a>
      </div>
    </nav>
  );
};
