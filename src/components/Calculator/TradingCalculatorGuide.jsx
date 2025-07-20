/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import guideImage from '../../img/system-guy.jpg';

export default function TradingCalculatorGuide() {
  return (
    <section className="px-4 py-12 max-w-6xl mx-auto text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        How to use the EquitrustMarkets trading calculator
      </motion.h2>

      <motion.div
        className="relative w-full max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <img
          src={guideImage}
          alt="EquitrustMarkets trading calculator guide"
          className="rounded-xl w-full shadow-md"
        />

        <div className="grid md:grid-cols-3 gap-4 mt-6 text-left">
          {[
            {
              step: 'Step 1',
              text: 'Choose your EquitrustMarkets account type and specify your account’s leverage and currency.',
            },
            {
              step: 'Step 2',
              text: 'Select your desired trading instrument from the available list.',
            },
            {
              step: 'Step 3',
              text: "Determine your trade's lot size and proceed to calculate by clicking the 'Calculate' button.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white shadow rounded-lg p-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.2, duration: 0.6 }}
            >
              <p className="text-gray-500 font-medium mb-2">{item.step}</p>
              <p className="text-sm text-gray-800 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
