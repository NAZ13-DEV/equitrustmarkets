/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

export default function ProfessionalAccounts() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-left">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-gray-900"
        >
          Elite Trading Accounts
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-4 max-w-3xl text-sm md:text-base text-gray-700"
        >
          Designed for expert traders who demand peak performance and precision.
          These accounts offer raw spreads, lightning-fast execution, and
          flexible trading conditions tailored for scalpers, institutional
          investors, and algorithmic strategies.
        </motion.p>
      </div>
    </section>
  );
}
