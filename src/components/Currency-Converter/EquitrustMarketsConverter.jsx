/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const conversionRates = {
  USD: {
    EUR: 0.8601,
    GBP: 0.7457,
    JPY: 148.824,
    BTC: 0.000847,
    XAU: 0.029846,
    USD: 1.0,
  },
  EUR: {
    USD: 1.163,
    GBP: 0.867,
    JPY: 173.0,
    BTC: 0.000984,
    XAU: 0.0347,
    EUR: 1.0,
  },
  GBP: {
    USD: 1.341,
    EUR: 1.153,
    JPY: 199.5,
    BTC: 0.001123,
    XAU: 0.0385,
    GBP: 1.0,
  },
  JPY: {
    USD: 0.0067,
    EUR: 0.0058,
    GBP: 0.005,
    BTC: 5.68e-6,
    XAU: 2.01e-4,
    JPY: 1.0,
  },
  BTC: {
    USD: 1180.64,
    EUR: 1014.16,
    GBP: 890.54,
    JPY: 175951.2,
    XAU: 35.23,
    BTC: 1.0,
  },
  XAU: {
    USD: 3350.1,
    EUR: 2881.5,
    GBP: 2596.9,
    JPY: 49686.2,
    BTC: 0.0284,
    XAU: 1.0,
  },
};

const currencies = Object.keys(conversionRates);

export default function EquitrustMarketsConverter() {
  const [amount, setAmount] = useState(100);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('EUR');
  const [result, setResult] = useState(null);

  const handleConvert = () => {
    const rate = conversionRates[from][to];
    setResult((amount * rate).toFixed(6));
  };

  return (
    <div className=' flex items-center justify-center bg-gradient-to-br from-blue-800 via-green-400 to-white-500 p-8'>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className='w-full max-w-2xl bg-white/10 backdrop-blur-md text-white rounded-xl p-8 shadow-xl border border-white/20'
      >
        <h2 className='text-3xl font-bold mb-6 text-center'>
          Optima Trade MarketCurrency Converter
        </h2>
        <div className='grid md:grid-cols-3 gap-4 items-end'>
          <div>
            <label className='block mb-1'>Amount</label>
            <input
              type='number'
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className='w-full p-2 rounded bg-white/10 text-black border border-white/30'
            />
          </div>
          <div>
            <label className='block mb-1'>From</label>
            <select
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className='w-full p-2 rounded bg-white/10 text-black border border-white/30'
            >
              {currencies.map((cur) => (
                <option key={cur} className='bg-inherit' value={cur}>
                  {cur}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className='block mb-1'>To</label>
            <select
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className='w-full p-2 rounded bg-white/10 text-black border border-white/30'
            >
              {currencies.map((cur) => (
                <option key={cur} value={cur}>
                  {cur}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={handleConvert}
          className='mt-6 w-full bg-green-500 hover:bg-green-600 transition-all text-white py-2 rounded shadow-lg'
        >
          Convert
        </button>

        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='mt-6 text-center text-lg'
          >
            {amount} {from} ={' '}
            <span className='font-bold text-white'>
              {result} {to}
            </span>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
