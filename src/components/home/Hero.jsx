import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[600px] lg:min-h-[600px] flex flex-col-reverse lg:flex-row items-center justify-between overflow-hidden bg-[#e6f8ef]"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(230, 248, 239, 0.9), rgba(63, 104, 112, 0.4))`,
      }}
    >
      {/* Bubble Animation */}
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
      </div>

      {/* Content */}
      <div className="z-10 flex-1 flex flex-col items-center lg:items-start justify-center px-6 sm:px-12 lg:px-20 py-12 sm:py-16 lg:py-20 backdrop-blur-sm lg:max-w-[60%] lg:min-h-full">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#142528] leading-tight mb-4 sm:mb-6 text-center lg:text-left animate-hero-slide-in">
          Unlock liquidity and amplify rewards
        </h1>
        <p className="text-lg sm:text-xl text-[#3f6870] mb-6 sm:mb-8 text-center lg:text-left animate-hero-slide-in delay-100">
          Start liquid staking securely across multiple chains
        </p>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-12 mb-6 sm:mb-8 w-full animate-hero-slide-in delay-200">
          {[
            { label: 'ASSETS STAKED', value: '$544M' },
            { label: 'USERS', value: '100K+' },
            { label: 'REWARDS PAID', value: '$25M+' },
          ].map((stat, index) => (
            <div key={stat.label} className="flex-1 min-w-[100px] text-center md:text-left animate-hero-slide-in" style={{ animationDelay: `${200 + index * 100}ms` }}>
              <p className="text-xs sm:text-sm text-[#3f6870] font-medium mb-1">{stat.label}</p>
              <p className="text-2xl sm:text-3xl font-bold text-[#142528]">{stat.value}</p>
            </div>
          ))}
        </div>
        <div className="w-16 h-1 bg-gradient-to-r from-[#07A658] to-[#3f6870] rounded-full mb-6 sm:mb-8 mx-auto lg:mx-0"></div>

        <Link to={'/register'} className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 rounded-lg bg-[#07A658] text-white font-semibold text-lg sm:text-xl shadow-lg hover:bg-[#07A658]/80 transition-all animate-pulse-hero animate-hero-slide-in delay-300">
          Stake now
        </Link>
      </div>

      <style>{`
        @keyframes hero-fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-hero-fade-in {
          animation: hero-fade-in 1s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
        @keyframes hero-slide-in {
          0% { opacity: 0; transform: translateY(30px) scale(0.98); }
          60% { opacity: 1; transform: translateY(-4px) scale(1.01); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-hero-slide-in {
          animation: hero-slide-in 1s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
        @keyframes pulse-hero {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(7, 166, 88, 0.7); }
          70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(7, 166, 88, 0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(7, 166, 88, 0); }
        }
        .animate-pulse-hero {
          animation: pulse-hero 2s ease-in-out infinite;
        }
        @keyframes bubble {
          0% { transform: translateY(100vh); opacity: 0.6; }
          100% { transform: translateY(-100vh); opacity: 0; }
        }
        .bubble {
          position: absolute;
          background: radial-gradient(circle, rgba(7, 166, 88, 0.3), rgba(63, 104, 112, 0.1));
          border-radius: 50%;
          animation: bubble linear infinite;
          pointer-events: none;
        }
        .bubble-1 {
          width: 40px;
          height: 40px;
          left: 10%;
          animation-duration: 12s;
          animation-delay: 0s;
        }
        .bubble-2 {
          width: 60px;
          height: 60px;
          left: 30%;
          animation-duration: 10s;
          animation-delay: 2s;
        }
        .bubble-3 {
          width: 30px;
          height: 30px;
          left: 50%;
          animation-duration: 15s;
          animation-delay: 1s;
        }
        .bubble-4 {
          width: 50px;
          height: 50px;
          left: 70%;
          animation-duration: 8s;
          animation-delay: 3s;
        }
        .bubble-5 {
          width: 80px;
          height: 80px;
          left: 90%;
          animation-duration: 11s;
          animation-delay: 0.5s;
        }
        .animate-hero-slide-in.delay-100 { animation-delay: 0.1s; }
        .animate-hero-slide-in.delay-200 { animation-delay: 0.2s; }
        .animate-hero-slide-in.delay-300 { animation-delay: 0.3s; }
      `}</style>
    </section>
  );
}