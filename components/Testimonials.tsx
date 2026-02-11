import React from 'react';
import { FadeIn } from './FadeIn';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "AETHER isn't a gym. It's a laboratory for human potential. The attention to recovery has added years to my professional career.",
    author: "James E.",
    role: "Professional Cyclist",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2787&auto=format&fit=crop"
  },
  {
    id: '2',
    quote: "The environment is unmatched. Minimal distractions, maximum focus. It’s the only place I can truly decompress while training.",
    author: "Sarah L.",
    role: "Tech Founder",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          <div className="flex flex-col justify-center">
             <FadeIn>
               <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-12">
                 Member <br /> <span className="text-bronze">Perspectives</span>
               </h2>
             </FadeIn>
          </div>

          <div className="space-y-12">
            {testimonials.map((t, index) => (
              <FadeIn key={t.id} delay={index * 200}>
                <div className="relative pl-8 border-l border-stone-200">
                  <Quote className="absolute -top-2 -left-3 bg-white text-stone-300 w-6 h-6 fill-current" />
                  <p className="text-xl md:text-2xl font-light text-stone-600 italic mb-6 leading-relaxed">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center">
                    <img src={t.image} alt={t.author} className="w-10 h-10 rounded-full object-cover mr-4 grayscale" />
                    <div>
                      <p className="font-serif text-stone-900">{t.author}</p>
                      <p className="text-xs uppercase tracking-wider text-stone-400">{t.role}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
