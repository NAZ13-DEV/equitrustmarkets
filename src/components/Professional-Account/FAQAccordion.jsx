/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqList = [
  {
    question: 'What is the maximum lot size available for each instrument?',
    answer:
      'The maximum lot size varies depending on the instrument and market conditions.',
  },
  // Add more questions if needed
];

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Left Title */}
        <div className="md:col-span-1">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Frequently<br />asked questions
          </h2>
        </div>

        {/* Right Accordion */}
        <div className="md:col-span-2 space-y-2">
          {faqList.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                className="w-full text-left flex justify-between items-center py-4 text-sm text-gray-700 hover:text-green-600 transition"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="pb-4 text-gray-600 text-sm"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
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
