/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const forexTabs = [
  { name: 'Majors', key: 'majors' },
  { name: 'Minors', key: 'minors' },
  { name: 'Exotics', key: 'exotics' },
];

const forexData = {
  majors: [
    { pair: 'EUR/USD', spread: '0.8', leverage: '1:500', commission: '0' },
    { pair: 'USD/JPY', spread: '0.6', leverage: '1:500', commission: '0' },
    { pair: 'GBP/USD', spread: '1.0', leverage: '1:500', commission: '0' },
  ],
  minors: [
    { pair: 'EUR/GBP', spread: '1.2', leverage: '1:300', commission: '0' },
    { pair: 'AUD/JPY', spread: '1.5', leverage: '1:300', commission: '0' },
    { pair: 'CAD/CHF', spread: '1.6', leverage: '1:300', commission: '0' },
  ],
  exotics: [
    { pair: 'USD/TRY', spread: '4.2', leverage: '1:100', commission: '0' },
    { pair: 'EUR/ZAR', spread: '3.5', leverage: '1:100', commission: '0' },
    { pair: 'GBP/SGD', spread: '3.8', leverage: '1:100', commission: '0' },
  ],
};

export default function ForexPairsTabbedTables() {
  const [activeTab, setActiveTab] = useState('majors');

  return (
    <section className='bg-white py-16 px-4'>
      <div className='max-w-6xl mx-auto'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-3xl font-bold text-center  mb-6'
        >
          Optima Trade MarketForex Pairs
        </motion.h2>

        {/* Tabs */}
        <div className='flex justify-center gap-4 mb-8'>
          {forexTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2 rounded-full border transition font-medium ${
                activeTab === tab.key
                  ? 'bg-[#07A658] text-white border-[#07A658]'
                  : 'bg-white text-[#07A658] border-[#07A658] hover:bg-[#07A658]/10'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tables */}
        <div className='relative  lg:overflow-hidden overflow-x-auto'>
          <AnimatePresence mode='wait'>
            <motion.table
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className='w-full table-auto border border-gray-300 rounded shadow-md'
            >
              <thead className=' text-green-600  border-gray-300 border-b-1'>
                <tr>
                  <th className='px-4 py-3 text-left'>Pair</th>
                  <th className='px-4 py-3 text-left'>Spread (pips)</th>
                  <th className='px-4 py-3 text-left'>Leverage</th>
                  <th className='px-4 py-3 text-left'>Commission</th>
                </tr>
              </thead>
              <tbody className='text-gray-700'>
                {forexData[activeTab].map((row, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    className='even:bg-gray-50'
                  >
                    <td className='px-4 py-3 font-medium'>{row.pair}</td>
                    <td className='px-4 py-3'>{row.spread}</td>
                    <td className='px-4 py-3'>{row.leverage}</td>
                    <td className='px-4 py-3'>{row.commission}</td>
                  </motion.tr>
                ))}
              </tbody>
            </motion.table>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
