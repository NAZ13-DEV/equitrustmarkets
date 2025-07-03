import React from 'react';
import ethereum from '../../img/ethereum.svg';
import hedera from '../../img/hedera.svg';
import polygon from '../../img/polygon.svg';
import bnb from '../../img/binance.svg';

const networks = [
  {
    name: 'Ethereum',
    tvl: '$416,928,644',
    tvlShort: '$417M',
    icon: ethereum,
    color: 'bg-[#E6F7F0]',
  },
  {
    name: 'Hedera',
    tvl: '$81,797,854',
    tvlShort: '$82M',
    icon: hedera,
    color: 'bg-[#E6F7F0]',
  },
  {
    name: 'Polygon',
    tvl: '$31,089,550',
    tvlShort: '$31M',
    icon: polygon,
    color: 'bg-[#E6F7F0]',
  },
  {
    name: 'BNB',
    tvl: '$11,758,337',
    tvlShort: '$12M',
    icon: bnb,
    color: 'bg-[#E6F7F0]',
  },
];

function Network() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12 bg-white">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-1">Supported networks</h2>
      <p className="text-gray-500 text-center mb-10 text-sm md:text-base">Choose your favourite network and start earning rewards</p>

      {/* Mobile/Tablet layout */}
      <div className="flex flex-col gap-5 lg:hidden">
        {networks.map((net) => (
          <div key={net.name} className="rounded-2xl bg-[#E6F7F0] p-4 md:p-6 flex flex-col gap-3 shadow-sm relative">
            {/* Top-right icon */}
            <div className="absolute right-4 top-4 md:right-6 md:top-6">
              <img src={net.icon} alt={`${net.name} icon`} className="w-10 h-10" />
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-base md:text-lg font-bold text-gray-900">{net.name}</span>
              <span className="text-sm text-gray-600">{net.tvl} staked</span>
            </div>

            <div className="flex flex-col gap-2 mt-3 md:flex-row md:gap-3">
              <button className="w-full md:w-1/2 bg-white text-gray-900 font-semibold rounded-lg py-2 px-4 border border-gray-200 shadow-sm transition">
                Learn More
              </button>
              <button className="w-full md:w-1/2 bg-green-500 text-white font-bold rounded-lg py-2 px-4 shadow-sm hover:bg-green-600 transition">
                Stake now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop layout with hover effect */}
      <div className="hidden lg:grid grid-cols-4 gap-8 mt-12">
        {networks.map((net) => (
          <div
            key={net.name}
            className="group rounded-2xl bg-[#E6F7F0] p-6 min-h-[300px] flex flex-col items-center justify-between shadow-md transition-all hover:shadow-xl hover:bg-green-500 relative overflow-hidden"
          >
            <div className="w-full text-center mb-4 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-white">{net.name}</h3>
              <p className="text-base text-gray-600 group-hover:text-white">TVL : {net.tvlShort}</p>
            </div>

            <div className="flex-1 flex items-center justify-center w-full mb-6">
              <img src={net.icon} alt={`${net.name} icon`} className="w-20 h-20 object-contain" />
            </div>

            <div className="flex flex-col gap-2 w-full items-center mt-auto">
              <button className="w-full py-2 rounded-lg bg-white text-green-700 font-bold shadow group-hover:scale-105 transition-all text-base">
                Stake now
              </button>
              <span className="text-white/90 font-semibold underline decoration-dotted text-sm group-hover:text-white">
                Learn More
              </span>
            </div>

            {/* Glowing blur on hover */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: '0 10px 35px rgba(16, 185, 129, 0.3)' }}></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Network
