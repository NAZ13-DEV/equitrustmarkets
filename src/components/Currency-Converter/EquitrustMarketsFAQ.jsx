/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const faqs = [
  {
    question: 'How is the exchange rate calculated?',
    answer:
      'Exchange rates are calculated based on the global currency markets using data from financial institutions, central banks, and liquidity providers.',
  },
  {
    question: 'What day of the week is the best time to exchange currency?',
    answer:
      'Generally, mid-week (Tuesday to Thursday) sees the most stability in currency prices. However, this can vary depending on market conditions.',
  },
  {
    question: 'Which currency converter is the best?',
    answer:
      'The best currency converter offers real-time rates, clear interface, and reliability—EquitrustMarkets offers all three for traders worldwide.',
  },
  {
    question: 'How often are the exchange rates in the currency converter updated?',
    answer:
      'Our rates are updated frequently throughout the day based on market movements to ensure you get the most accurate conversion.',
  },
];

export default function EquitrustMarketsFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto px-6 md:px-12 py-16">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Frequently<br />asked questions
          </h2>
        </div>

        <div className="md:col-span-2 space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-300">
              <button
                onClick={() => toggleIndex(idx)}
                className="w-full flex justify-between items-center py-4 text-left text-gray-900 font-medium hover:text-black focus:outline-none"
              >
                {faq.question}
                <ChevronDownIcon
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden text-gray-600 pb-4"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
