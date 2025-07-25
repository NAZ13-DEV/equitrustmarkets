/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import calendarImage from '../../img/calendar.jpg'; // Replace with actual economic calendar image if different

export default function AnalyticalTools() {
  return (
    <section className='py-20 px-6 md:px-12 max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12'>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className='text-4xl font-bold text-gray-900 mb-4'>
          Analytical tools
        </h2>
        <p className='text-gray-700 text-lg mb-6'>
          Gain access to Optima Trade Marketcutting-edge analysis tools that
          help you interpret global economic trends and optimize your trading
          decisions in real time.
        </p>

        <h3 className='text-xl font-semibold text-gray-900 mb-2'>
          Economic Insights Hub
        </h3>
        <p className='text-gray-600'>
          Stay informed with timely updates on high-impact events, central bank
          policies, and macroeconomic news via our Economic Insights Hub. Access
          it directly from the{' '}
          <a href='#' className='text-blue-600 hover:underline'>
            Optima Trade Marketwebsite
          </a>{' '}
          .
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className='w-full max-w-md mx-auto'
      >
        <img
          src={calendarImage}
          alt='Economic Calendar Preview'
          className='rounded-xl shadow-lg'
        />
      </motion.div>
    </section>
  );
}
