/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import currencyGuyImg from '../../img/another-guy.jpg';

export default function CurrencyPairsSection() {
  return (
    <section className='py-20 px-6 bg-white'>
      <div className='max-w-7xl mx-auto text-center mb-16'>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-3xl md:text-4xl font-bold text-gray-900'
        >
          Capitalize on currency pair price <br className='hidden md:block' />{' '}
          movements
        </motion.h2>
      </div>

      <div className='max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10'>
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='space-y-10'
        >
          <div>
            <h3 className='font-semibold text-lg text-gray-900'>
              Trade FX majors, minors, and exotics
            </h3>
            <p className='text-sm text-gray-600'>
              with ultra-tight spreads and flexible leverage.¹
            </p>
          </div>

          <div>
            <h3 className='font-semibold text-lg text-gray-900'>
              Access your earnings
            </h3>
            <p className='text-sm text-gray-600'>with no unnecessary delays.</p>
          </div>

          <div>
            <h3 className='font-semibold text-lg text-gray-900'>
              Enjoy fast and precise execution
            </h3>
            <p className='text-sm text-gray-600'>
              on trader-favorite platforms like MT4, MT5, the Optima Trade
              MarketWeb Terminal and Optima Trade MarketWeb app.
            </p>
          </div>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={currencyGuyImg}
            alt='Man trading currency pairs'
            className='rounded-lg shadow-lg w-full'
          />
        </motion.div>
      </div>
    </section>
  );
}
