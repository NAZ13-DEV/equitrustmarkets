/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import newsImage from '../../img/news.jpg'; // Replace with your actual image

export default function MarketNews() {
  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-14 overflow-hidden">
      
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Market news by <span className="text-green-600"></span>
        </h2>
        <p className="text-gray-700 text-lg mb-3">
          Stay ahead of the markets with EquitrustMarkets’s real-time news feed. Our updates bring you expert market insights and headlines as they break.
        </p>
        <p className="text-gray-600">
          Available anytime in your <a href="#" className="text-blue-600 hover:underline">EquitrustMarkets Dashboard</a>.
        </p>
      </motion.div>

      {/* Animated Image */}
      <motion.div
        initial={{ opacity: 0, x: 80, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <img
          src={newsImage}
          alt="Live Market News on Mobile"
          className="rounded-xl shadow-xl border border-gray-200"
        />
      </motion.div>
    </section>
  );
}
