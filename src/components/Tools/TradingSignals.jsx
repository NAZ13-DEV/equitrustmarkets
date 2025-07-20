/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import signalImage from '../../img/signal.jpg'; 

export default function TradingSignals() {
  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 overflow-hidden">
      {/* Image Animation */}
      <motion.div
        initial={{ opacity: 0, x: -60, rotate: -3 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <img
          src={signalImage}
          alt="Trading Signal Interface"
          className="rounded-xl shadow-2xl border border-gray-200"
        />
      </motion.div>

      {/* Content Animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 leading-tight">
          Trading signals by <span className="text-green-600">EquitrustMarkets Intelligence</span>
        </h2>

        <p className="text-gray-700 text-lg mb-4">
          Leverage EquitrustMarkets signal engine to shape smarter strategies, time your entries with precision, and stay confident in any market condition.
        </p>

        <p className="text-gray-600">
          These real-time signals combine powerful analytics with multi-timeframe analysis. 
          You can access them in your <a href="#" className="text-blue-600 hover:underline">EquitrustMarkets Portal</a>.
        </p>
      </motion.div>
    </section>
  );
}
