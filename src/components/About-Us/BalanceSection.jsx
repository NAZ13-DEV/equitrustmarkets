/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import image from '../../img/computer.jpg';

const BalanceSection = () => {
  return (
    <section className='bg-white py-16 px-6'>
      <div className='max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12'>
        {/* Image */}
        <motion.div
          className='w-full lg:w-1/2 overflow-hidden rounded-xl shadow-lg'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <img
            src={image}
            alt='Optima Trade MarketOffice'
            className='w-full h-auto object-cover'
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className='w-full lg:w-1/2'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className='text-2xl sm:text-3xl font-semibold text-[#142528] mb-4'>
            The Optima Trade Marketway is about balance
          </h2>
          <p className='text-gray-700 text-base leading-relaxed mb-4'>
            We set out in 2008 to balance ethics and technology to reimagine how
            the ideal trading experience could be. Today, as a leader in the
            industry of CFD trading, servicing over 1 million active traders, we
            know we're on the right path.
          </p>
          <p className='text-gray-700 text-base leading-relaxed mb-4'>
            We built our proprietary trading features so we could offer
            something unique, something no other broker had ever attempted. We
            were the first to offer traders instant withdrawals, stop-out
            protection and more. Features that give traders an edge.
          </p>
          <p className='text-gray-700 text-base leading-relaxed'>
            Trading is just one part of the picture. We believe in creating
            ecosystems of benefit for traders, partners, and employees to thrive
            within. Making what once was deemed impossible, a reality.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BalanceSection;
