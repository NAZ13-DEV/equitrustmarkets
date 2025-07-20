/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqItems = [
  {
    question: "What is the trading calculator?",
    answer: "The trading calculator is a tool that helps you estimate essential trading metrics such as margin, spread cost, swap rates, commission, and pip value before placing a trade."
  },
  {
    question: "What do the terms of the trading calculator results mean?",
    answer: "Terms like margin, pip value, swap, and spread cost refer to the financial details of your trade. Margin is the capital required to open a position. Spread cost is the difference between bid and ask. Pip value shows profit/loss per pip movement."
  },
  {
    question: "Why is Leverage disabled for some instruments?",
    answer: "Leverage might be disabled or limited due to regulatory restrictions or the inherent risk associated with specific instruments like stocks or volatile assets."
  },
  {
    question: "How accurate is the trading calculator?",
    answer: "The trading calculator gives close estimates based on current spreads and trading conditions. Actual results may vary slightly based on market fluctuations at the time of execution."
  },
  {
    question: "Can I account for different investment scenarios with the calculator?",
    answer: "Yes. By adjusting the input parameters like lot size, leverage, and account type, you can simulate different trading scenarios to understand their impact."
  },
  {
    question: "How to calculate pips?",
    answer: "Pips are calculated as the smallest price movement in a currency pair. For most pairs, 1 pip = 0.0001. Multiply pip value by the number of lots to determine your gain/loss."
  },
  {
    question: "What is pip value?",
    answer: "Pip value is the monetary worth of a one-pip movement in a trading position. It depends on your lot size, the instrument, and your account currency."
  },
  {
    question: "What are long and short swaps?",
    answer: "Swaps are rollover interest rates charged or earned for holding a position overnight. Long swaps apply to buy trades and short swaps to sell trades. Rates vary per instrument."
  },
  {
    question: "What is margin in trading?",
    answer: "Margin is the amount of capital required to open a trade. It acts as collateral and depends on leverage, lot size, and the instrument being traded."
  }
];

export default function FAQCalculator() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (idx) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section className="py-12 max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-[300px_1fr] gap-10">
      <div>
        <h2 className="text-3xl font-bold leading-tight">
          Frequently<br />asked questions
        </h2>
      </div>

      <div className="space-y-2 w-full">
        {faqItems.map((item, idx) => (
          <div
            key={idx}
            className="border-b border-gray-200"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full text-left py-4 px-2 flex justify-between items-center hover:text-green-600 transition-colors"
            >
              <span className="font-medium">{item.question}</span>
              <span className="text-xl transform transition-transform duration-300">
                {activeIndex === idx ? '−' : '+'}
              </span>
            </button>

            <AnimatePresence>
              {activeIndex === idx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden px-2 pb-4 text-sm text-gray-600"
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
