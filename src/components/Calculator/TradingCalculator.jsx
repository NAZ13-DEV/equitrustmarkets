/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const instruments = [
  { name: 'EUR/USD', pipValue: 10, marginRate: 0.02, spread: 1.2, commission: 0 },
  { name: 'USD/JPY', pipValue: 9.5, marginRate: 0.025, spread: 1.4, commission: 0 },
  { name: 'XAU/USD', pipValue: 1.0, marginRate: 0.05, spread: 3.5, commission: 2 },
];

const leverages = ['1:50', '1:100', '1:200', '1:500'];

export default function TradingCalculator() {
  const [accountType, setAccountType] = useState('Standard');
  const [currency, setCurrency] = useState('USD');
  const [instrument, setInstrument] = useState(instruments[0]);
  const [lot, setLot] = useState(0.01);
  const [leverage, setLeverage] = useState('1:200');
  const [results, setResults] = useState(null);

  const calculate = () => {
    const leverageValue = parseInt(leverage.split(':')[1]);
    const margin = lot * 100000 * instrument.marginRate;
    const spreadCost = instrument.spread * lot * 10;
    const commission = instrument.commission * lot;
    const pipValue = instrument.pipValue * lot;
    const swapShort = pipValue * -0.2;
    const swapLong = pipValue * 0.15;

    setResults({
      margin: margin.toFixed(2),
      spreadCost: spreadCost.toFixed(2),
      commission: commission.toFixed(2),
      swapShort: swapShort.toFixed(2),
      swapLong: swapLong.toFixed(2),
      pipValue: pipValue.toFixed(2),
    });
  };

  const reset = () => {
    setAccountType('Standard');
    setCurrency('USD');
    setInstrument(instruments[0]);
    setLot(0.01);
    setLeverage('1:200');
    setResults(null);
  };

  return (
    <section className="px-6 py-12 max-w-5xl mx-auto">
      <motion.h2
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Trading Calculator
      </motion.h2>
      <p className="text-gray-600 mb-8 max-w-2xl">
        Calculate pips, margin, spread, commission and more. Our calculator helps you simplify complex trades.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="font-semibold text-lg mb-4">Your Order</h3>

          <label className="block mb-2">Account Type</label>
          <select className="w-full border border-gray-300 p-2 mb-4 rounded-lg" value={accountType} onChange={e => setAccountType(e.target.value)}>
            <option>Standard</option>
            <option>Raw Spread</option>
            <option>Zero</option>
          </select>

          <label className="block mb-2">Account Currency</label>
          <select className="w-full border border-gray-300 p-2 mb-4 rounded-lg" value={currency} onChange={e => setCurrency(e.target.value)}>
            <option>USD</option>
            <option>EUR</option>
            <option>GBP</option>
          </select>

          <label className="block mb-2">Instrument</label>
          <select
            className="w-full border border-gray-300 p-2 mb-4 rounded-lg"
            value={instrument.name}
            onChange={e => setInstrument(instruments.find(i => i.name === e.target.value))}
          >
            {instruments.map(i => (
              <option key={i.name} value={i.name}>{i.name}</option>
            ))}
          </select>

          <label className="block mb-2">Lot</label>
          <input
            type="number"
            className="w-full border border-gray-300 p-2 mb-4 rounded-lg"
            value={lot}
            onChange={e => setLot(parseFloat(e.target.value))}
            step="0.01"
            min="0.01"
          />

          <label className="block mb-2">Leverage</label>
          <select
            className="w-full border border-gray-300 p-2 mb-4 rounded-lg"
            value={leverage}
            onChange={e => setLeverage(e.target.value)}
          >
            {leverages.map(l => <option key={l}>{l}</option>)}
          </select>

          <div className="flex gap-4">
            <button
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl"
              onClick={calculate}
            >
              Calculate
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-black px-6 py-2 rounded-xl"
              onClick={reset}
            >
              Reset
            </button>
          </div>
        </div>

        <motion.div
          className="bg-gray-50 p-6 rounded-lg shadow-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h3 className="font-semibold text-lg mb-4">Results</h3>
          {results ? (
            <ul className="space-y-3">
              <li><strong>Margin:</strong> ${results.margin}</li>
              <li><strong>Spread Cost:</strong> ${results.spreadCost}</li>
              <li><strong>Commission:</strong> ${results.commission}</li>
              <li><strong>Swap Short:</strong> ${results.swapShort}</li>
              <li><strong>Swap Long:</strong> ${results.swapLong}</li>
              <li><strong>Pip Value:</strong> ${results.pipValue}</li>
            </ul>
          ) : (
            <p className="text-gray-500">Enter values and click calculate.</p>
          )}
        </motion.div>
      </div>
      
    </section>
  );
}
