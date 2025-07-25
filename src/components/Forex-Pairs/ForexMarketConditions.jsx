/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

export default function ForexMarketConditions() {
  return (
    <section className='px-6 py-20 bg-white text-gray-800'>
      <div className='max-w-6xl mx-auto grid lg:grid-cols-3 gap-12'>
        {/* Left Heading */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className='text-3xl font-semibold leading-tight text-gray-900'>
            Forex market <br /> conditions
          </h2>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='lg:col-span-2 space-y-8 text-sm leading-relaxed'
        >
          <p className='text-gray-600'>
            The forex market is the most liquid and active financial market
            globally. With over $6 trillion in daily volume, trading currency
            pairs on Optima Trade Marketprovides seamless opportunities 24 hours
            a day, 5 days a week.
          </p>

          <div>
            <h3 className='font-semibold text-gray-900 mb-1'>
              Forex trading hours
            </h3>
            <ul className='list-disc list-inside text-gray-700 space-y-1'>
              <li>USDCNH, USDTRY: Sunday 22:00 to Friday 20:00</li>
              <li>EURUSD, GBPUSD: Monday 00:00 to Friday 14:50</li>
              <li>All times shown are in server time (GMT+0)</li>
            </ul>
            <p className='mt-2'>
              You can always check updated hours in our{' '}
              <a href='#' className='text-blue-600 underline'>
                Help Center
              </a>
              .
            </p>
          </div>

          <div>
            <h3 className='font-semibold text-gray-900 mb-1'>Spreads¹</h3>
            <p className='text-gray-700'>
              Optima Trade Marketoffers dynamic spreads based on real-time
              market liquidity. Our spreads are ultra-tight during high
              liquidity hours and may widen when volatility increases.
            </p>
            <p className='mt-2'>
              Major pairs like EURUSD on our Standard account have spreads from
              0.0 pips for up to 95% of the time.
            </p>
          </div>

          <div>
            <h3 className='font-semibold text-gray-900 mb-1'>Swaps</h3>
            <p className='text-gray-700'>
              Swaps (overnight fees) apply at 21:00 GMT and vary based on
              instrument and position direction. For USD pairs, triple swaps are
              applied on Wednesdays.
            </p>
            <p className='mt-2'>
              Swap-free accounts are available for clients in eligible regions.
              Optima Trade Marketalso offers Islamic (swap-free) accounts upon
              request.
            </p>
          </div>

          <div>
            <h3 className='font-semibold text-gray-900 mb-1'>
              Dynamic margin requirements
            </h3>
            <p className='text-gray-700'>
              Margin depends on your account type and trade size. Requirements
              may change ahead of news or high volatility periods. Please refer
              to the Margin Requirements table in your dashboard.
            </p>
          </div>

          <div>
            <h3 className='font-semibold text-gray-900 mb-1'>
              Fixed margin requirements
            </h3>
            <p className='text-gray-700'>
              For certain instruments, fixed margin applies regardless of
              leverage. These settings ensure more predictable trading costs and
              risk control.
            </p>
          </div>

          <div>
            <h3 className='font-semibold text-gray-900 mb-1'>Stop level</h3>
            <p className='text-gray-700'>
              Optima Trade Marketmay set minimum stop levels on some instruments
              to account for market volatility. These values may vary and are
              not applicable when using expert strategies or tight scalping.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
