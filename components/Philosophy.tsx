import React from 'react';
import { FadeIn } from './FadeIn';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 md:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          
          <div className="order-2 md:order-1">
             <FadeIn delay={200}>
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2938&auto=format&fit=crop" 
                  alt="Athlete focusing" 
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>
             </FadeIn>
          </div>

          <div className="order-1 md:order-2 space-y-8">
            <FadeIn delay={300}>
              <h3 className="text-stone-500 uppercase tracking-widest text-sm font-semibold">
                Our Philosophy
              </h3>
            </FadeIn>
            
            <FadeIn delay={400}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 leading-tight">
                Beyond fitness. <br/>
                <span className="text-bronze italic">True Longevity.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={500}>
              <p className="text-stone-600 text-lg leading-relaxed font-light">
                AETHER was founded on the principle that high performance requires a holistic approach. 
                We combine clinical-grade strength training, data-driven recovery protocols, and metabolic 
                conditioning to build bodies that are not just capable, but enduring.
              </p>
            </FadeIn>

            <FadeIn delay={600}>
              <p className="text-stone-600 text-lg leading-relaxed font-light">
                Designed for the uncompromising individual, our facility bridges the gap between 
                medical wellness and elite athleticism.
              </p>
            </FadeIn>

            <FadeIn delay={700}>
              <div className="pt-4 flex items-center space-x-8 text-stone-900 font-medium">
                <div className="flex flex-col">
                  <span className="text-3xl font-serif">25+</span>
                  <span className="text-xs uppercase tracking-wider text-stone-500 mt-1">Recovery Modalities</span>
                </div>
                <div className="w-px h-12 bg-stone-300"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-serif">1:1</span>
                  <span className="text-xs uppercase tracking-wider text-stone-500 mt-1">Coach Ratio</span>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};
