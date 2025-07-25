/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is the maximum lot size available for each instrument?',
    answer:
      'The maximum lot size varies by instrument and market conditions. Check the instrument specifications within your Optima Trade Marketdashboard for detailed limits.',
  },
  {
    question: 'Can I withdraw funds to a third-party account?',
    answer:
      'No, for security and compliance reasons, withdrawals must be made to an account in your name.',
  },
  {
    question: 'How long do deposits take to process?',
    answer:
      'Most deposits are processed instantly. Some methods may take up to 24 hours depending on your bank or provider.',
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='py-20 px-4 bg-white'>
      <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-10'>
        <h2 className='text-3xl font-semibold text-gray-900'>
          Frequently <br className='hidden md:block' /> asked questions
        </h2>

        <div className='space-y-4'>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className='border-b border-gray-300 cursor-pointer'
            >
              <button
                onClick={() => toggleIndex(index)}
                className='flex items-center justify-between w-full py-4 text-sm text-left text-gray-800 font-medium'
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key='content'
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className='overflow-hidden text-sm text-gray-600 pb-4 pr-8'
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
