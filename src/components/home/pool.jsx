import React from 'react';
import bg from '../../img/bg.svg';

function Pool() {
  return (
    <section className="w-full max-w-6xl px-2 py-8 mx-auto sm:px-4 sm:py-12">
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
        <div className="absolute inset-0 z-0 bg-black/40 sm:hidden" />

        {/* ✅ Text Content */}
        <div className="z-10 flex flex-col items-center justify-center w-full px-6 py-10 text-center text-white md:w-1/2 sm:px-10 sm:py-14 md:pl-12 md:py-20 md:items-start md:text-left md:text-black">
          <h2 className="mb-4 text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl">
            SD Utility Pool
          </h2>
          <p className="max-w-md mb-8 font-bold text-white sm:text-black md:font-normal sm:text-lg">
            Contribute to Ethereum decentralisation by delegating your $SD to the Pool and receive double digit rewards!
          </p>
          <button className="px-8 py-3 text-base font-bold text-white transition bg-green-600 rounded-lg shadow hover:bg-green-700 sm:text-lg">
            Delegate Now
          </button>
        </div>

        {/* Right side space holder */}
        <div className="hidden w-1/2 h-full md:block" />
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
