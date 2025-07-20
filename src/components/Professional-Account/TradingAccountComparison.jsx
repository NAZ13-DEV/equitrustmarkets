/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const data = [
  {
    label: 'Minimum deposit',
    values: ['$500', '$500', '$500'],
  },
  {
    label: 'Spread',
    values: ['From 0.1 pips', 'From 0 pips', 'From 0 pips'],
  },
  {
    label: 'Commission',
    values: ['No commission', 'From $0.05 each side per lot', 'Up to $3.50 each side per lot'],
  },
  {
    label: 'Maximum leverage',
    values: ['1:Unlimited', '1:Unlimited', '1:Unlimited'],
  },
  {
    label: 'Instruments',
    values: [
      'Forex, metals, cryptocurrencies, energies, stocks, indices',
      'Forex, metals, cryptocurrencies, energies, stocks, indices',
      'Forex, metals, cryptocurrencies, energies, stocks, indices',
    ],
  },
  {
    label: 'Minimum lot size',
    values: ['0.01', '0.01', '0.01'],
  },
  {
    label: 'Maximum lot size',
    values: [
      '200 (7:00 - 20:59 GMT+0), 60 (21:00 - 6:59 GMT+0)',
      '200 (7:00 - 20:59 GMT+0), 60 (21:00 - 6:59 GMT+0)',
      '200 (7:00 - 20:59 GMT+0), 60 (21:00 - 6:59 GMT+0)',
    ],
  },
  {
    label: 'Maximum number of positions',
    values: ['Unlimited', 'Unlimited', 'Unlimited'],
  },
  {
    label: 'Hedged margin',
    values: ['0%', '0%', '0%'],
  },
  {
    label: 'Margin call',
    values: ['30%', '30%', '30%'],
  },
  {
    label: 'Stop out',
    values: [
      '0% (see details about stocks)',
      '0% (see details about stocks)',
      '0% (see details about stocks)',
    ],
  },
  {
    label: 'Order execution',
    values: [
      'Instant (forex, metals, energies, stocks, indices), market (cryptocurrencies)',
      'Market',
      'Market',
    ],
  },
  {
    label: 'Swap-free',
    values: ['Available', 'Available', 'Available'],
  },
];

const headers = ['Pro', 'Zero', 'Raw Spread'];

export default function TradingAccountComparison() {
  return (
    <section className="bg-white py-20 px-4">
      <motion.div
        className="max-w-7xl mx-auto overflow-x-auto shadow-lg rounded-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <table className="min-w-full table-auto border border-gray-200">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="text-left p-4"> </th>
              {headers.map((header, idx) => (
                <th key={idx} className="text-left p-4">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-sm">
            {data.map((row, i) => (
              <tr key={i} className="hover:bg-green-50">
                <td className="font-medium p-4 text-gray-800 w-1/3">{row.label}</td>
                {row.values.map((val, idx) => (
                  <td key={idx} className="p-4 text-gray-600">
                    {val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
}
