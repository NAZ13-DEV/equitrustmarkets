/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: 'What analytical trading tools do traders use?',
    answer:
      'Traders commonly use tools like economic calendars, Trading Central signals, FXStreet news feeds, technical indicators (RSI, MACD, Bollinger Bands), and charting platforms such as MetaTrader and TradingView.',
  },
  {
    question: 'Which analytical tool is the best?',
    answer:
      'There’s no single best tool — it depends on your strategy. For fundamental analysis, economic calendars are key. For technical analysis, indicators and real-time charting platforms offer deep insights.',
  },
  {
    question: 'Where can I get free trading signals?',
    answer:
      'You can access free trading signals directly through the Optima Trade Marketdashboard or mobile app. Our platform integrates expert-curated insights, powered by industry leaders.',
  },
];

export default function AnalyticalToolsFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className='py-16 px-4 md:px-8 max-w-6xl mx-auto grid md:grid-cols-[300px_1fr] gap-12'>
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className='text-3xl md:text-4xl font-bold leading-tight text-gray-900'>
          Frequently
          <br />
          asked questions
        </h2>
      </motion.div>

      {/* FAQ Items */}
      <div className='space-y-2 w-full'>
        {faqData.map((item, index) => (
          <div key={index} className='border-b border-gray-200'>
            <button
              onClick={() => toggle(index)}
              className='w-full flex justify-between items-center py-4 px-2 text-left hover:text-green-600 transition-colors'
            >
              <span className='font-medium text-gray-800'>{item.question}</span>
              <span className='text-xl transform transition-transform duration-300'>
                {activeIndex === index ? '−' : '+'}
              </span>
            </button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className='overflow-hidden px-2 pb-4 text-sm text-gray-600'
                >
                  <p>{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
