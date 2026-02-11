import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Services } from './components/Services';
import { Facility } from './components/Facility';
import { Membership } from './components/Membership';
import { Booking } from './components/Booking';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Services />
        <Facility />
        <Membership />
        <Booking />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;
