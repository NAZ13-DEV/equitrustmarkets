import React from 'react';
import phoneImage from '../../img/phoneimage.jpg';

const MarketExecutionSection = () => {
  return (
    <section className='w-full bg-white py-12 px-6'>
      <div className='max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10'>
        {/* Image Side */}
        <div className=' bg-[#dbe2e7] rounded-xl p-4'>
          <img
            src={phoneImage}
            alt='Market Execution Chart'
            className='w-full max-w-lg object-contain rounded-xl'
          />
        </div>

        {/* Text Side */}
        <div className='max-w-xl'>
          <h3 className='text-xl font-semibold text-[#142528] mb-2'>
            Market execution
          </h3>
          <p className='text-[#3f6870] mb-6 leading-relaxed'>
            Open trades at the current available market price. This is ideal for
            high frequency traders who prefer seizing opportunities as they
            occur in the markets.
          </p>

          <h3 className='text-xl font-semibold text-[#142528] mb-2'>
            Market execution at Optima Trade Market
          </h3>
          <p className='text-[#3f6870] leading-relaxed'>
            Our infrastructure, consisting of a global network of decentralized
            servers, ensures reduced latency and minimal to no slippage on both
            market and pending orders, so you can optimize your strategy’s
            results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketExecutionSection;
