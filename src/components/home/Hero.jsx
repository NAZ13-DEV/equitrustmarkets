import React from 'react';
import heroBg from '../../img/hero.svg';

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[500px] lg:min-h-[600px] flex flex-col-reverse lg:flex-row items-center justify-between overflow-hidden bg-white lg:bg-cover lg:bg-no-repeat lg:bg-right"
      style={{
         backgroundImage: `url(${heroBg})`,
        backgroundRepeat: 'no-repeat'
    }}
    >
      {/* Left: Content */}
      <div className="z-10 flex-1 flex flex-col items-start justify-center px-6 md:px-12 lg:px-20 py-10 md:py-0 animate-hero-fade-in bg-white/80 lg:bg-white/90 lg:backdrop-blur-sm lg:max-w-[55%] lg:min-h-full">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4 animate-hero-slide-in">
          Unlock liquidity and amplify rewards
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-8 animate-hero-slide-in delay-100 text-center lg:text-left">
          Start liquid staking securely across multiple chains
        </p>

        {/* Stats Row */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-8 w-full animate-hero-slide-in delay-200">
          <div className="flex-1 min-w-[120px]">
            <p className="text-xs text-gray-500 font-medium mb-1">ASSETS STAKED</p>
            <p className="text-xl md:text-2xl font-bold text-gray-900">$544M</p>
          </div>
          <div className="flex-1 min-w-[120px]">
            <p className="text-xs text-gray-500 font-medium mb-1">USERS</p>
            <p className="text-xl md:text-2xl font-bold text-gray-900">100K+</p>
          </div>
          <div className="flex-1 min-w-[120px]">
            <p className="text-xs text-gray-500 font-medium mb-1">REWARDS PAID</p>
            <p className="text-xl md:text-2xl font-bold text-gray-900">$25M+</p>
          </div>
        </div>

        <button className="w-full md:w-auto px-8 py-3 rounded-lg bg-green-500 text-white font-semibold text-lg shadow hover:bg-green-600 transition animate-hero-slide-in delay-300">
          Stake now
        </button>
      </div>

      {/* Right: Hidden at lg, only for sm/md */}
      <div className="flex-1 flex items-center justify-center w-full h-full lg:hidden animate-hero-fade-in">
        <img
          src={heroBg}
          alt="Curve"
          className="w-full max-w-lg md:max-w-xl object-contain"
        />
      </div>

      <style>{`
        @keyframes hero-fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-hero-fade-in {
          animation: hero-fade-in 1.2s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes hero-slide-in {
          0% { opacity: 0; transform: translateY(60px) scale(0.98) skewY(2deg); }
          60% { opacity: 1; transform: translateY(-8px) scale(1.02) skewY(-1deg); }
          100% { opacity: 1; transform: translateY(0) scale(1) skewY(0); }
        }
        .animate-hero-slide-in {
          animation: hero-slide-in 1.1s cubic-bezier(0.4,0,0.2,1) both;
        }
        .animate-hero-slide-in.delay-100 { animation-delay: 0.1s; }
        .animate-hero-slide-in.delay-200 { animation-delay: 0.2s; }
        .animate-hero-slide-in.delay-300 { animation-delay: 0.3s; }
      `}</style>
    </section>
  );
}
