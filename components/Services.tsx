import React from 'react';
import { Activity, Zap, Heart, Database, Users, Sun } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Performance Coaching',
    description: 'Bespoke periodization plans designed to peak your physical output for specific events or daily life.',
    icon: <Activity className="w-6 h-6" />
  },
  {
    id: '2',
    title: 'Recovery & Cryo',
    description: 'Access to hyperbaric oxygen chambers, cryotherapy, and infrared saunas to accelerate tissue repair.',
    icon: <Zap className="w-6 h-6" />
  },
  {
    id: '3',
    title: 'Longevity Science',
    description: 'Biomarker testing and VO2 max analysis to track and improve your biological age.',
    icon: <Database className="w-6 h-6" />
  },
  {
    id: '4',
    title: 'Mobility & Flow',
    description: 'Functional range conditioning and yoga protocols to maintain fluid movement mechanics.',
    icon: <Sun className="w-6 h-6" />
  },
  {
    id: '5',
    title: 'Strength & Conditioning',
    description: 'Elite-level equipment and coaching for olympic lifting, power development, and hypertrophy.',
    icon: <Users className="w-6 h-6" />
  },
  {
    id: '6',
    title: 'Metabolic Health',
    description: 'Nutritional planning and metabolic analysis to optimize fuel utilization and energy levels.',
    icon: <Heart className="w-6 h-6" />
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <FadeIn>
            <h3 className="text-stone-500 uppercase tracking-widest text-sm font-semibold mb-4">
              Curated Disciplines
            </h3>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900">
              Engineered for <span className="text-bronze">Excellence</span>
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200 border border-stone-200">
          {services.map((service, index) => (
            <FadeIn key={service.id} delay={index * 100}>
              <div className="bg-white p-10 h-full hover:bg-stone-50 transition-colors duration-500 group cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
                  <span className="text-bronze text-4xl font-serif opacity-20">{service.id}</span>
                </div>
                
                <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-700 mb-8 group-hover:bg-bronze group-hover:text-white transition-colors duration-500">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-serif text-stone-900 mb-4">{service.title}</h3>
                <p className="text-stone-600 font-light leading-relaxed text-sm">
                  {service.description}
                </p>

                <div className="mt-8 pt-6 border-t border-stone-100 flex items-center text-xs uppercase tracking-widest font-semibold text-stone-400 group-hover:text-bronze transition-colors">
                  Explore
                  <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};
