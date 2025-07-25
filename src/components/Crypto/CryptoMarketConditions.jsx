/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

export default function CryptoMarketConditions() {
  return (
    <section className='bg-white px-6 py-20 text-gray-800'>
      <div className='max-w-6xl mx-auto grid lg:grid-cols-3 gap-12'>
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='lg:col-span-1'
        >
          <h2 className='text-2xl font-semibold mb-4'>
            Crypto market conditions
          </h2>
          <p className='text-sm text-gray-600'>
            The crypto market is dynamic and constantly evolving. At{' '}
            <strong>Optima Trade Market</strong>, we provide top-tier
            infrastructure to support your trading in real time, 24/7 —
            empowering you to capitalize on every opportunity.
          </p>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='lg:col-span-2 space-y-10'
        >
          <div>
            <h3 className='font-semibold mb-1 text-lg'>Crypto trading hours</h3>
            <p className='text-sm text-gray-700'>
              You can trade crypto assets 24/7, excluding brief system
              maintenance windows. We’ll notify you in advance when such periods
              occur.
            </p>
            <ul className='list-disc list-inside mt-2 text-sm text-gray-700'>
              <li>BTC/USD, ETH/USD, XRP/USD: Sunday 21:05 to Friday 20:55</li>
              <li>Other major pairs: Monday - Thursday from 21:05 to 21:01</li>
            </ul>
            <p className='text-xs mt-1 text-blue-600'>
              Learn more in our Help Center.
            </p>
          </div>

          <div>
            <h3 className='font-semibold mb-1 text-lg'>
              Spreads<sup>*</sup>
            </h3>
            <p className='text-sm text-gray-700'>
              Spreads are floating and may vary depending on market conditions.
              Average spreads are based on historical pricing data.
            </p>
            <p className='text-sm text-gray-500 mt-1'>
              Spread widening may occur during volatile market phases or low
              liquidity.
            </p>
          </div>

          <div>
            <h3 className='font-semibold mb-1 text-lg'>Swaps</h3>
            <p className='text-sm text-gray-700'>
              Optima Trade Marketoffers crypto trading with zero overnight swap
              charges on eligible instruments.
            </p>
          </div>

          <div>
            <h3 className='font-semibold mb-1 text-lg'>
              Fixed margin requirements
            </h3>
            <p className='text-sm text-gray-700'>
              Crypto instruments have consistent margin requirements regardless
              of leverage level. This promotes transparency and risk stability.
            </p>
          </div>

          <div>
            <h3 className='font-semibold mb-1 text-lg'>Stop level</h3>
            <p className='text-sm text-gray-700'>
              Stop levels may vary depending on market activity and instrument
              type. Traders using high-frequency or Expert Advisor strategies
              should verify current levels before placing orders.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
