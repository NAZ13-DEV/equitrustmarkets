import React from 'react';
import bg from '../../img/bg.svg';

function Pool() {
  return (
    <section className="w-full max-w-6xl mx-auto px-2 sm:px-4 py-8 sm:py-12">
      <div
        className="relative rounded-3xl overflow-hidden flex flex-col md:flex-row items-center justify-between bg-[#E6F7F0] animate-fade-slide"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right center',
          backgroundSize: 'cover',
        }}
      >
        {/* ✅ Overlay only for small screens */}
        <div className="absolute inset-0 bg-black/40 sm:hidden z-0" />

        {/* ✅ Text Content */}
        <div className="w-full md:w-1/2 px-6 sm:px-10 py-10 sm:py-14 md:pl-12 md:py-20 flex flex-col items-center md:items-start justify-center z-10 text-center md:text-left text-white md:text-black">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
            SD Utility Pool
          </h2>
          <p className="text-white sm:text-black font-bold md:font-normal sm:text-lg mb-8 max-w-md">
            Contribute to Ethereum decentralisation by delegating your $SD to the Pool and receive double digit rewards!
          </p>
          <button className="px-8 py-3 rounded-lg bg-green-600 text-white font-bold shadow hover:bg-green-700 transition text-base sm:text-lg">
            Delegate Now
          </button>
        </div>

        {/* Right side space holder */}
        <div className="hidden md:block w-1/2 h-full" />
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-slide {
          animation: fadeSlideUp 1s ease-out both;
        }
      `}</style>
    </section>
  );
}

export default Pool;
