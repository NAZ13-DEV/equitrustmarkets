/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import IconWithdraw from '../../img/withdraw.svg';
import IconExecution from '../../img/execution.svg';
import IconProtection from '../../img/protection.svg';

const features = [
  {
    title: 'Instant withdrawals',
    description:
      'Remain in control of your funds. Simply choose your preferred payment method, make a withdrawal request, and enjoy instant automatic approval.',
    icon: IconWithdraw,
  },
  {
    title: 'Ultra-fast execution',
    description:
      'Stay ahead of the trends with lightning-fast execution. Get your orders executed in milliseconds on all available platforms at EquitrustMarkets.',
    icon: IconExecution,
  },
  {
    title: 'Stop Out Protection',
    description:
      'Enjoy our unique Stop Out Protection feature. Delay and sometimes completely avoid stop outs while trading with EquitrustMarkets.',
    icon: IconProtection,
  },
];

export default function EquitrustMarketsHighlights() {
  return (
    <section className="bg-white text-gray-900 px-6 md:px-12 py-16 max-w-6xl mx-auto">
      {/* How to use section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">How to use the currency converter</h2>
        <p className="text-gray-600 mb-4">
          Our currency converter helps you quickly convert one currency to another using recent exchange rate data.
          An essential tool when making deposits and withdrawals on your trading account.
        </p>
        <ul className="text-left text-gray-700 list-disc list-inside space-y-2">
          <li>From the six available dropdown lists, select your base currency.</li>
          <li>Choose up to five other currencies to convert to.</li>
          <li>Enter the amount you want to convert from the base currency.</li>
          <li>The currency converter will automatically calculate and display the exchange rates for your chosen currencies.</li>
        </ul>
      </motion.div>

      {/* Why EquitrustMarkets section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-semibold">Why EquitrustMarkets</h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Better-than-market conditions, unique features, and cutting-edge security, partnered with our dedication to transparency and excellent customer service, are the reasons traders continue to choose EquitrustMarkets.
        </p>
      </motion.div>

      {/* Feature cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.2 }}
            className="bg-gray-100 rounded-xl p-6 text-left shadow-md hover:shadow-lg transition-shadow"
          >
            <img src={feature.icon} alt="" className="w-8 h-8 mb-4" />
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-700">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
