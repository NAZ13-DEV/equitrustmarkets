import React from 'react';
import bubble from '../../img/bubble.png'; // Use your background image
import { Link } from 'react-router-dom';

const TradeBanner = () => {
  return (
    <div className="relative w-full overflow-hidden ">
      {/* Background image */}
      <img
        src={bubble}
        alt="background"
        className="w-full h-[200px] object-cover"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center justify-center px-4 md:px-6 py-15">
        <div className="bg-[#0f1923] text-white px-5 py-4 md:px-6 md:py-5 rounded-lg w-full max-w-4xl flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg">
          <div>
            <h2 className="text-[17px] md:text-[18px] font-semibold leading-tight">
              Trade Forex 
            </h2>
            <p className="text-[13px] md:text-sm text-[#b1b5c3] mt-[2px] leading-snug">
                Tap into the world’s largest financial market
            </p>
          </div>

          <div className="flex gap-2 md:gap-3">
            <Link to={'/register'} className="bg-[#07A658] hover:bg-[#05944f] text-white text-[13px] font-semibold px-4 py-2 rounded transition">
              Register
            </Link>
            <Link to={'/register'} className="bg-[#2b2e38] hover:bg-[#3a3d47] text-white text-[13px] font-semibold px-4 py-2 rounded transition">
              Try free demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeBanner;
