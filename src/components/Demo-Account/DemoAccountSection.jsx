/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function DemoAccountSection() {
  return (
    <section className='bg-white px-6 py-20 text-center'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='max-w-3xl mx-auto'
      >
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
          Try Demo Trading with Optima Trade Market
        </h2>
        <p className='text-gray-600 mb-6 text-sm md:text-base'>
          The Optima Trade Marketdemo account gives you a risk-free opportunity
          to practice your trading strategies, explore advanced tools, and build
          confidence—without risking real capital.
        </p>
        <Link
          to={'/register'}
          className='bg-green-400 hover:bg-green-500 text-black font-medium text-sm px-5 py-2 rounded'
        >
          Try Free Demo
        </Link>
      </motion.div>
    </section>
  );
}
