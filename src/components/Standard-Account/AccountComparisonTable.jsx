/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const accountData = [
  { label: 'Minimum deposit', standard: '$10', cent: '$10' },
  { label: 'Spread¹', standard: 'From 0.2 pips', cent: 'From 0.3 pips' },
  { label: 'Commission', standard: 'No commission', cent: 'No commission' },
  { label: 'Maximum leverage', standard: '1:Unlimited', cent: '1:Unlimited' },
  {
    label: 'Instruments',
    standard: 'Forex, metals, cryptocurrencies, energies, stocks, indices',
    cent: 'Forex, metals, cryptocurrencies',
  },
  { label: 'Minimum lot size', standard: '0.01', cent: '0.01' },
  {
    label: 'Maximum lot size',
    standard: '200 (7:00 - 20:59 GMT+0), 60 (21:00 - 6:59 GMT+0)',
    cent: '200',
  },
  {
    label: 'Maximum number of positions',
    standard: 'Unlimited',
    cent: '10,000',
  },
  { label: 'Hedged margin', standard: '0%', cent: '0%' },
  { label: 'Margin call', standard: '60%', cent: '60%' },
  {
    label: 'Stop out',
    standard: (
      <>
        0%{' '}
        <a
          href="#"
          className="text-blue-600 underline hover:text-blue-800 text-sm"
        >
          (see details about stocks)
        </a>
      </>
    ),
    cent: '0%',
  },
  { label: 'Order execution', standard: 'Market', cent: 'Market' },
  { label: 'Swap-free', standard: 'Available', cent: 'Available' },
];

export default function AccountComparisonTable() {
  return (
    <section className="w-full bg-white px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center"
        >
          Compare Our Trading Accounts
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="overflow-x-auto shadow-md rounded-lg border border-gray-200"
        >
          <table className="min-w-full text-sm text-left bg-white">
            <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
              <tr>
                <th className="px-6 py-4 w-1/3">Features</th>
                <th className="px-6 py-4 text-center">Standard</th>
                <th className="px-6 py-4 text-center">Standard Cent</th>
              </tr>
            </thead>
            <tbody className="text-gray-800 divide-y divide-gray-200">
              {accountData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 font-medium">{row.label}</td>
                  <td className="px-6 py-4 text-center">{row.standard}</td>
                  <td className="px-6 py-4 text-center">{row.cent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
