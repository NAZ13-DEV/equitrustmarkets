/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    title: 'Standard',
    icon: <Star className="text-green-600 w-4 h-4 inline mb-1 mr-1" />,
    highlight: 'Our best choice. Built for traders of all experience levels.',
    minDeposit: '$10',
    spread: 'From 0.2 pips',
    commission: 'No commission',
    leverage: '1:Unlimited',
    instruments: 'Forex, metals, crypto, energies, indices',
    featured: true,
  },
  {
    title: 'Standard Cent',
    icon: null,
    highlight:
      'Ideal for beginners. Start small with micro lot trading.',
    minDeposit: '$10',
    spread: 'From 0.3 pips',
    commission: 'No commission',
    leverage: '1:Unlimited',
    instruments: 'Forex, metals, cryptocurrencies',
    featured: false,
  },
];

export default function TradingCardPlans() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`border rounded-lg p-6 shadow-sm ${
              plan.featured
                ? 'border-green-500 ring-1 ring-green-500 bg-green-50'
                : 'border-gray-200'
            }`}
          >
            <h3 className="text-lg font-semibold mb-1 text-gray-900">
              {plan.icon}
              {plan.title}
            </h3>
            <p className="text-sm text-gray-700 mb-4">{plan.highlight}</p>
            <hr className="mb-4" />
            <div className="text-sm text-gray-600 space-y-2">
              <div>
                <span className="font-medium text-gray-800">Minimum deposit</span><br />
                {plan.minDeposit}
              </div>
              <div>
                <span className="font-medium text-gray-800">Spread¹</span><br />
                {plan.spread}
              </div>
              <div>
                <span className="font-medium text-gray-800">Commission</span><br />
                {plan.commission}
              </div>
              <div>
                <span className="font-medium text-gray-800">Maximum leverage</span><br />
                {plan.leverage}
              </div>
              <div>
                <span className="font-medium text-gray-800">Instruments</span><br />
                {plan.instruments}
              </div>
            </div>

            <br />
            <Link to={'/register'} className="mt-6 bg-green-600 hover:bg-green-700 text-white px-5 py-2 text-sm font-semibold rounded transition">
              Register
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
