/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import demoImage from '../../img/demo-guy.jpg';

const steps = [
  {
    title: 'Step 1',
    heading: 'Register',
    description:
      'Register an Optima Trade MarketPersonal Area by clicking Try free demo on this page.',
  },
  {
    title: 'Step 2',
    heading: 'Get demo balance',
    description:
      'Click Demo account and get a Standard MT5 demo account with $10,000 demo balance.',
  },
  {
    title: 'Step 3',
    heading: 'Explore the platform',
    description:
      'Choose a trading instrument, configure the chart to your liking and place your first demo trade.',
  },
];

export default function HowToOpenDemoAccount() {
  return (
    <section className='w-full bg-white px-4 py-20'>
      <div className='max-w-5xl mx-auto text-center mb-10'>
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='text-2xl md:text-3xl font-semibold text-gray-900'
        >
          How to open an Optima Trade Market demo trading account
        </motion.h2>
      </div>

      <motion.div
        className='max-w-6xl mx-auto bg-white rounded-lg overflow-hidden shadow-md'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Image */}
        <div className='md:grid md:grid-cols-1'>
          <img
            src={demoImage}
            alt='Demo Account'
            className='w-full object-cover h-[300px]'
          />
        </div>

        {/* Steps */}
        <div className='grid md:grid-cols-3 bg-gray-50 text-left'>
          {steps.map((step, index) => (
            <div
              key={index}
              className='p-6 border-t md:border-t-0 md:border-l first:md:border-l-0 border-gray-200'
            >
              <div className='text-sm text-gray-500 mb-1'>{step.title}</div>
              <div className='text-md font-semibold text-gray-900'>
                {step.heading}
              </div>
              <p className='text-sm text-gray-700 mt-1'>{step.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
