/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'What are instant deposits and withdrawals?',
    answer:
      'Optima Trade Marketoffers real-time processing for most payment methods, ensuring you can access your funds without delays.',
  },
  {
    question: 'How long do Optima Trade Marketwithdrawals take via bank card?',
    answer:
      'Withdrawals to bank cards typically process within 1–3 business days depending on your bank.',
  },
  {
    question: 'Can I withdraw funds to an account that is not my own?',
    answer:
      'No. For security reasons, withdrawals are only allowed to accounts registered in your name.',
  },
  {
    question: 'What payment accounts can I use to deposit and withdraw?',
    answer:
      'You can use credit/debit cards, e-wallets, crypto wallets, and local bank transfers available in your region.',
  },
  {
    question: 'When can I deposit and withdraw?',
    answer:
      'Deposits and withdrawals are available 24/7 for most methods, except traditional banks which follow business hours.',
  },
  {
    question: 'Can I withdraw money from a demo account?',
    answer:
      'No. Demo accounts use virtual funds and are for practice purposes only.',
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className='w-full px-4 py-16 bg-white'>
      <div className='max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-start'>
        <h2 className='text-2xl md:text-3xl font-semibold text-gray-900 leading-snug'>
          Frequently asked <br /> questions
        </h2>

        <div className='md:col-span-2 space-y-4'>
          {faqs.map((faq, index) => (
            <div key={index} className='border-b border-gray-200'>
              <button
                onClick={() => toggle(index)}
                className='w-full flex justify-between items-center py-4 text-left font-medium text-gray-800 hover:text-green-600 transition-all'
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180 text-green-600' : ''
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className='overflow-hidden pb-4 text-gray-600 text-sm'
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
