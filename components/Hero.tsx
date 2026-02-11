import React from 'react';
import { FadeIn } from './FadeIn';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2940&auto=format&fit=crop"
          alt="Luxury Gym Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <FadeIn direction="up" delay={200}>
          <h2 className="text-stone-200 uppercase tracking-[0.3em] text-sm md:text-base mb-6 font-medium">
            The Private Performance Club
          </h2>
        </FadeIn>
        
        <FadeIn direction="up" delay={400}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight">
            Performance <br />
            <span className="italic font-light">Refined.</span>
          </h1>
        </FadeIn>

        <FadeIn direction="up" delay={600}>
          <p className="text-stone-200 text-lg md:text-xl font-light tracking-wide mb-12 max-w-lg mx-auto">
            Train. Recover. Evolve. A sanctuary for the driven.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={800}>
          <a
            href="#membership"
            className="inline-block px-10 py-4 border border-white/30 bg-white/5 backdrop-blur-sm text-white uppercase tracking-widest hover:bg-white hover:text-stone-900 transition-all duration-500 ease-out"
          >
            Request Membership
          </a>
        </FadeIn>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block text-white/50">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1"
          className="opacity-70"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
};
