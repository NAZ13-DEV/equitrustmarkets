/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

export default function StandardAccountSection() {
  return (
    <section className='w-full bg-white px-4 py-20'>
      <div className='max-w-5xl mx-auto'>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4'
        >
          Trading accounts: <br />
          <span className='text-gray-900'>Standard</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className='text-gray-700 text-base sm:text-lg max-w-3xl'
        >
          Feature-rich, commission-free trading accounts built for today’s
          active traders. Experience tight spreads, no hidden fees, and fast
          execution—making the Standard account the perfect starting point for
          beginners and pros alike. Join Optima Trade Marketand discover the
          power of simplicity in trading.
        </motion.p>
      </div>
    </section>
  );
}
