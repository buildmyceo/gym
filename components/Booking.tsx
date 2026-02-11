import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { Calendar, Clock, ChevronRight, CheckCircle } from 'lucide-react';

export const Booking: React.FC = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Mock dates
  const dates = [
    { day: 'Mon', date: '12' },
    { day: 'Tue', date: '13' },
    { day: 'Wed', date: '14' },
    { day: 'Thu', date: '15' },
    { day: 'Fri', date: '16' },
  ];

  // Mock times
  const times = ['08:00', '10:00', '14:30', '16:00', '18:30'];

  const handleNext = () => {
    if (step === 1 && selectedDate) setStep(2);
    if (step === 2 && selectedTime) setStep(3);
  };

  return (
    <section id="booking" className="py-24 bg-stone-100">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Info */}
        <div className="order-2 lg:order-1">
          <FadeIn>
            <h3 className="text-stone-500 uppercase tracking-widest text-sm font-semibold mb-4">
              Begin Your Journey
            </h3>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">
              Performance Assessment
            </h2>
            <p className="text-stone-600 font-light text-lg mb-8 leading-relaxed">
              Every membership begins with a comprehensive 90-minute physiological assessment. 
              We map your body composition, metabolic rate, and movement patterns to build your baseline.
            </p>
            <div className="space-y-4">
               <div className="flex items-start">
                 <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full text-bronze shadow-sm mr-4">
                   <Clock size={20} />
                 </div>
                 <div>
                   <h4 className="font-serif text-lg text-stone-900">90 Minutes</h4>
                   <p className="text-sm text-stone-500 font-light">Comprehensive analysis</p>
                 </div>
               </div>
               <div className="flex items-start">
                 <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full text-bronze shadow-sm mr-4">
                   <Calendar size={20} />
                 </div>
                 <div>
                   <h4 className="font-serif text-lg text-stone-900">Complimentary</h4>
                   <p className="text-sm text-stone-500 font-light">For prospective private members</p>
                 </div>
               </div>
            </div>
          </FadeIn>
        </div>

        {/* Right Widget */}
        <div className="order-1 lg:order-2">
          <FadeIn delay={200}>
            <div className="bg-white p-8 md:p-10 shadow-xl shadow-stone-200/50 min-h-[450px] relative">
              
              {step === 1 && (
                <div className="animate-fade-in-up">
                  <h3 className="text-xl font-serif text-stone-900 mb-6">Select a Date</h3>
                  <div className="grid grid-cols-5 gap-3 mb-8">
                    {dates.map((d) => (
                      <button
                        key={d.date}
                        onClick={() => setSelectedDate(d.date)}
                        className={`py-4 rounded border transition-all duration-200 flex flex-col items-center justify-center ${
                          selectedDate === d.date 
                            ? 'bg-stone-900 text-white border-stone-900' 
                            : 'bg-white border-stone-200 text-stone-600 hover:border-bronze'
                        }`}
                      >
                        <span className="text-xs uppercase mb-1">{d.day}</span>
                        <span className="text-xl font-serif">{d.date}</span>
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={handleNext}
                    disabled={!selectedDate}
                    className="w-full py-4 bg-bronze text-white uppercase tracking-widest text-xs disabled:opacity-50 disabled:cursor-not-allowed hover:bg-bronze-dark transition-colors flex items-center justify-center group"
                  >
                    Next Step <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="animate-fade-in-up">
                  <div className="flex items-center mb-6">
                    <button onClick={() => setStep(1)} className="text-xs text-stone-400 uppercase tracking-wider hover:text-stone-900 mr-4">← Back</button>
                    <h3 className="text-xl font-serif text-stone-900">Select Time</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {times.map((t) => (
                      <button
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={`py-3 px-4 border text-left transition-all duration-200 ${
                          selectedTime === t 
                            ? 'bg-stone-900 text-white border-stone-900' 
                            : 'bg-white border-stone-200 text-stone-600 hover:border-bronze'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={handleNext}
                    disabled={!selectedTime}
                    className="w-full py-4 bg-bronze text-white uppercase tracking-widest text-xs disabled:opacity-50 disabled:cursor-not-allowed hover:bg-bronze-dark transition-colors"
                  >
                    Confirm Booking
                  </button>
                </div>
              )}

              {step === 3 && (
                <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in-up py-10">
                  <CheckCircle className="w-16 h-16 text-bronze mb-6" />
                  <h3 className="text-2xl font-serif text-stone-900 mb-2">Request Received</h3>
                  <p className="text-stone-500 font-light mb-8 max-w-xs">
                    We have reserved your slot for the {selectedDate}th at {selectedTime}. A concierge will contact you shortly to confirm details.
                  </p>
                  <button onClick={() => {setStep(1); setSelectedDate(null); setSelectedTime(null)}} className="text-xs uppercase tracking-widest border-b border-stone-300 pb-1 text-stone-500 hover:text-stone-900 hover:border-stone-900 transition-colors">
                    Book Another
                  </button>
                </div>
              )}

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-stone-100">
                <div 
                  className="h-full bg-bronze transition-all duration-500" 
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>

            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};
