/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const accounts = [
  {
    name: 'Raw Spread',
    description:
      'Tightest spreads possible with predictable flat-rate fees. Built for precision-focused traders.',
    deposit: '$500',
    spread: 'From 0 pips',
    commission: 'Up to $3.50 per lot (both sides)',
    leverage: '1:Unlimited',
    instruments:
      'Forex, metals, cryptocurrencies, energies, stocks, indices',
  },
  {
    name: 'Zero',
    description:
      'No spreads on top traded instruments. Perfect for short-term, high-volume strategies.',
    deposit: '$500',
    spread: 'From 0 pips',
    commission: 'From $0.05 per lot (both sides)',
    leverage: '1:Unlimited',
    instruments:
      'Forex, metals, cryptocurrencies, energies, stocks, indices',
  },
  {
    name: 'Pro',
    description:
      'Low spreads. Zero commissions. Instant execution. Ideal for retail traders and algo bots.',
    deposit: '$500',
    spread: 'From 0.1 pips',
    commission: 'No commission',
    leverage: '1:Unlimited',
    instruments:
      'Forex, metals, cryptocurrencies, energies, stocks, indices',
  },
];

export default function ProfessionalAccountCards() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold "
        >
          Choose the Right Account for Your Trading Style
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-600"
        >
          Equitrustmarkets offers flexible account types tailored for every level of trader.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {accounts.map((acc, idx) => (
          <motion.div
            key={acc.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="border rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 border-green-100"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-green-800">{acc.name}</h3>
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-sm text-gray-700 mt-2 mb-4">{acc.description}</p>

            <hr className="mb-4 border-gray-200" />

            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <strong className="text-green-700">Minimum deposit:</strong> {acc.deposit}
              </li>
              <li>
                <strong className="text-green-700">Spread:</strong> {acc.spread}
              </li>
              <li>
                <strong className="text-green-700">Commission:</strong> {acc.commission}
              </li>
              <li>
                <strong className="text-green-700">Maximum leverage:</strong> {acc.leverage}
              </li>
              <li>
                <strong className="text-green-700">Instruments:</strong> {acc.instruments}
              </li>
            </ul>
            <br />
            <Link to={'/register'} className="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition px-2 ">
              Register
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
