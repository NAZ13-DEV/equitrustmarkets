/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const faqs = [
  {
    question: 'What is blockchain technology, and how does it work?',
    answer:
      'Blockchain is a decentralized digital ledger that records transactions across multiple computers. It provides security, transparency, and immutability for all operations.',
  },
  {
    question:
      'How do I decide the best cryptocurrencies to trade in the 2024 crypto market?',
    answer:
      'It depends on market trends, liquidity, volatility, and your trading strategy. Always research before investing and use Optima Trade Markettools to analyze performance.',
  },
  {
    question: 'Is Bitcoin a good cryptocurrency to trade?',
    answer:
      'Bitcoin remains the most traded crypto due to its high liquidity and strong market presence. It’s suitable for both long-term holders and short-term traders.',
  },
  {
    question: 'Can I trade during the weekend?',
    answer:
      'Yes! The crypto market is open 24/7, including weekends, allowing you to trade anytime using Optima Trade Market’ platform.',
  },
  {
    question: 'How do you deal with price gaps?',
    answer:
      'Optima Trade Marketuses fast execution and advanced algorithms to minimize the impact of price gaps during high volatility events.',
  },
  {
    question:
      'What are your rules for pending orders, stop loss (SL), and take profit (TP)?',
    answer:
      'You can place SL and TP on all positions. Pending orders are triggered based on market price, and you can manage risk with built-in tools provided on our platform.',
  },
  {
    question: "What's the hedged margin on my cryptocurrency positions?",
    answer:
      'The margin for hedged positions is significantly reduced compared to unhedged trades. Specific values depend on your asset and leverage setting.',
  },
];

export default function CryptoFaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className='max-w-7xl mx-auto px-4 py-20'>
      <div className='flex flex-col md:flex-row gap-10 items-start'>
        {/* Left Title */}
        <motion.div
          className='w-full md:w-1/3'
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 leading-snug'>
            Frequently <br /> asked questions
          </h2>
        </motion.div>

        {/* Right FAQs */}
        <div className='w-full md:w-2/3'>
          {faqs.map((faq, index) => (
            <div key={index} className='border-b border-gray-300'>
              <button
                onClick={() => toggleFAQ(index)}
                className='w-full flex justify-between items-center py-4 text-left'
              >
                <span className='text-sm md:text-base font-medium text-gray-800'>
                  {faq.question}
                </span>
                <ChevronDownIcon
                  className={`w-4 h-4 transform transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className='pb-4 text-sm text-gray-600'
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
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
