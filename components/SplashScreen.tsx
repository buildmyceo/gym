import React, { useEffect, useState } from 'react';

interface SplashScreenProps {
  onFinish: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Start exit animation after delay
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2200);

    // Call onFinish after fade out completes to unmount
    const finishTimer = setTimeout(() => {
      onFinish();
    }, 3000); // 2200ms + 800ms transition

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-stone-900 transition-opacity duration-1000 ease-in-out ${
        isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative text-center">
        <h1 
          className="text-5xl md:text-7xl font-serif text-stone-100 tracking-[0.25em] animate-fade-in-up"
          style={{ animationDuration: '1.2s' }}
        >
          AETHER
        </h1>
        
        <div className="h-0.5 bg-bronze mx-auto mt-6 rounded-full animate-[growWidth_1.5s_ease-out_0.5s_forwards] opacity-0 w-0" />
        
        <p 
          className="mt-4 text-stone-400 text-xs uppercase tracking-[0.4em] animate-fade-in opacity-0" 
          style={{ animationDelay: '1.2s' }}
        >
          Performance Refined
        </p>
      </div>

      <style>{`
        @keyframes growWidth {
          from { width: 0; opacity: 0; }
          to { width: 100px; opacity: 1; }
        }
      `}</style>
    </div>
  );
};