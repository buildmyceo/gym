import React, { useState, useEffect, useCallback } from 'react';
import { FadeIn } from './FadeIn';
import { FacilityImage } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images: FacilityImage[] = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=2787&auto=format&fit=crop',
    title: 'Main Weights Floor',
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?q=80&w=2940&auto=format&fit=crop',
    title: 'Private Yoga Studio',
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2940&auto=format&fit=crop',
    title: 'Cryotherapy Lab',
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1554284126-bb6322d419c9?q=80&w=2940&auto=format&fit=crop',
    title: 'Consultation Lounge',
  }
];

export const Facility: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = useCallback(() => {
    setIsPaused(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, []);

  const prevSlide = useCallback(() => {
    setIsPaused(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  return (
    <section id="facility" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <FadeIn>
             <h3 className="text-stone-500 uppercase tracking-widest text-sm font-semibold mb-4">
              The Space
            </h3>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 max-w-lg">
              Sanctuary of <span className="italic text-stone-600">Structure</span>
            </h2>
          </FadeIn>
          
          <FadeIn delay={200}>
            <div className="flex space-x-4 mt-8 md:mt-0">
              <button 
                onClick={prevSlide}
                className="p-4 border border-stone-200 rounded-full hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300 group"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button 
                onClick={nextSlide}
                className="p-4 border border-stone-200 rounded-full hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300 group"
                aria-label="Next slide"
              >
                <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={300}>
          <div className="relative overflow-hidden w-full aspect-[16/10] md:aspect-[21/9] bg-stone-200">
            {/* Slider Track */}
            <div 
              className="flex h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((img) => (
                <div key={img.id} className="min-w-full h-full relative">
                  <img 
                    src={img.url} 
                    alt={img.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-90" />
                  
                  <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-2xl">
                    <span className="text-white/60 uppercase tracking-widest text-xs font-medium mb-3 block">
                      Facility 0{img.id}
                    </span>
                    <h3 className="text-3xl md:text-5xl font-serif text-white mb-2">
                      {img.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Indicators */}
            <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 flex space-x-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsPaused(true);
                    setCurrentIndex(idx);
                  }}
                  className={`h-1 transition-all duration-300 rounded-full ${
                    idx === currentIndex ? 'w-8 bg-bronze' : 'w-2 bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <p className="text-stone-500 font-light mt-8 text-sm md:text-base max-w-xl">
             Every corner of AETHER is designed to optimize focus and recovery. From the lighting temperature to the air filtration, our facility is an active participant in your performance.
          </p>
        </FadeIn>

      </div>
    </section>
  );
};
