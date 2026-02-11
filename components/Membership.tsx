import React from 'react';
import { Check } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { MembershipTier } from '../types';

const tiers: MembershipTier[] = [
  {
    id: 'private',
    name: 'Private',
    price: '$350',
    features: [
      'Full Gym Access',
      'Group Conditioning Classes',
      'Digital Programming',
      'Locker Amenities',
      'Towel Service'
    ]
  },
  {
    id: 'athlete',
    name: 'Athlete',
    price: '$650',
    isPrimary: true,
    features: [
      'All Private Benefits',
      'Unlimited Recovery Sessions',
      '2x Personal Training / mo',
      'Quarterly Biomarker Analysis',
      'Nutrition Consultation'
    ]
  },
  {
    id: 'executive',
    name: 'Executive',
    price: 'Inquire',
    features: [
      'All Athlete Benefits',
      'Dedicated Performance Concierge',
      'Weekly Massage Therapy',
      'Priority Booking',
      'Private Locker'
    ]
  }
];

export const Membership: React.FC = () => {
  return (
    <section id="membership" className="py-24 bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Select Your Tier</h2>
            <p className="text-stone-400 font-light max-w-xl mx-auto">
              Limited memberships available to maintain exclusivity and overcrowding.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <FadeIn key={tier.id} delay={index * 150}>
              <div 
                className={`relative p-8 md:p-12 h-full border transition-all duration-300 ${
                  tier.isPrimary 
                    ? 'bg-stone-800 border-bronze' 
                    : 'bg-stone-900/50 border-stone-800 hover:border-stone-700'
                }`}
              >
                {tier.isPrimary && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-bronze text-white text-[10px] uppercase tracking-widest px-3 py-1">
                    Most Popular
                  </span>
                )}

                <h3 className="text-xl font-serif mb-2">{tier.name}</h3>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl md:text-5xl font-light">{tier.price}</span>
                  {tier.price !== 'Inquire' && <span className="text-stone-500 ml-2 text-sm">/ month</span>}
                </div>

                <ul className="space-y-4 mb-10">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm font-light text-stone-300">
                      <Check className="w-4 h-4 text-bronze mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-4 text-xs uppercase tracking-widest transition-colors duration-300 ${
                    tier.isPrimary 
                      ? 'bg-bronze text-white hover:bg-bronze-light' 
                      : 'border border-stone-700 text-stone-300 hover:bg-stone-800'
                  }`}
                >
                  {tier.price === 'Inquire' ? 'Contact Concierge' : 'Select Membership'}
                </button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
