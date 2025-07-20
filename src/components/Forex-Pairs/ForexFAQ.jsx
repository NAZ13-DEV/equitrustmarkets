/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'What are the most popular currency pairs to trade?',
    answer:
      'Popular pairs include EUR/USD, USD/JPY, GBP/USD, and AUD/USD, often referred to as the major pairs.',
  },
  {
    question: 'What is leverage in forex trading?',
    answer:
      'Leverage allows you to control a larger trade size with a smaller capital. At Equitrustmarkets, flexible leverage options are provided based on your trading experience.',
  },
  {
    question: 'What is margin in online forex trading?',
    answer:
      'Margin is the amount of money required in your account to open or maintain a position. It acts as a security deposit.',
  },
  {
    question: 'Does my account equity affect the maximum leverage I can use?',
    answer:
      'Yes, higher account equity may reduce available leverage according to our risk policy at Equitrustmarkets.',
  },
  {
    question: 'Why are there higher margin requirements around news?',
    answer:
      'During major economic events, margin requirements are increased temporarily to reduce risk due to potential volatility.',
  },
  {
    question: 'Do margin requirements change around weekends and holidays?',
    answer:
      'Yes, weekend and holiday periods usually come with higher margin requirements to safeguard against market gaps.',
  },
  {
    question:
      'When does the weekend period of increased margin requirements start and finish?',
    answer:
      'Typically, higher weekend margins apply from Friday evening until early Monday, depending on the trading instrument.',
  },
];

export default function ForexFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-gray-900 leading-tight">
            Frequently <br /> asked questions
          </h2>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="md:col-span-2 space-y-2"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border-b border-gray-300">
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex justify-between items-center py-4 text-left text-sm font-medium text-gray-900 hover:text-green-600 transition"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transform transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pb-4 text-sm text-gray-600"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
