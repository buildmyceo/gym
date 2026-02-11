import React from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-serif text-white tracking-widest mb-6">AETHER</h2>
            <p className="max-w-xs font-light text-stone-500 mb-6">
              1001 Performance Blvd,<br />
              Los Angeles, CA 90012
            </p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white uppercase tracking-widest text-xs font-semibold mb-6">Menu</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#philosophy" className="hover:text-bronze transition-colors">Philosophy</a></li>
              <li><a href="#services" className="hover:text-bronze transition-colors">Services</a></li>
              <li><a href="#facility" className="hover:text-bronze transition-colors">Facility</a></li>
              <li><a href="#membership" className="hover:text-bronze transition-colors">Membership</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white uppercase tracking-widest text-xs font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-bronze transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-bronze transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-bronze transition-colors">Waiver</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-xs font-light text-stone-600">
          <p>&copy; {new Date().getFullYear()} AETHER Performance Club. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for longevity.</p>
        </div>
      </div>
    </footer>
  );
};
