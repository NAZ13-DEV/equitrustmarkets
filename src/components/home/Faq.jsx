import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is Equitrustmarkets?",
    answer:
      "Equitrustmarkets is a premier forex trading platform where users can analyze, place, and manage trades on various global financial markets.",
  },
  {
    question: "How do I start trading?",
    answer:
      "Simply create an account, verify your identity, fund your wallet, and begin trading directly from your dashboard.",
  },
  {
    question: "Is my money safe on Equitrustmarkets?",
    answer:
      "Absolutely. We use top-tier encryption and partner with regulated brokers to ensure fund security.",
  },
  {
    question: "What trading instruments are available?",
    answer:
      "We offer forex pairs, commodities, indices, and CFDs including cryptocurrencies — all in one platform.",
  },
  {
    question: "Is there a demo account?",
    answer:
      "Yes, we offer demo accounts for practice with real market data and zero risk.",
  },
  {
    question: "Are there any fees?",
    answer:
      "Equitrustmarkets charges minimal spreads and zero commissions on most instruments.",
  },
  {
    question: "Can I withdraw my funds anytime?",
    answer:
      "Yes, withdrawals are processed within 24 hours on business days.",
  },
];

export default function Faq() {
  const [expanded, setExpanded] = useState(false);
  const [openIndexes, setOpenIndexes] = useState({});

  const toggleAnswer = (index) => {
    setOpenIndexes((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="bg-white w-full py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {(expanded ? faqs : faqs.slice(0, 3)).map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full flex justify-between items-center px-4 py-4 text-left text-gray-800 font-semibold text-sm md:text-base hover:bg-gray-50 transition"
                onClick={() => toggleAnswer(index)}
              >
                {faq.question}
                {openIndexes[index] ? (
                  <ChevronUp className="w-5 h-5 text-green-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-green-500" />
                )}
              </button>
              <div
                className={`px-4 pb-4 text-gray-600 text-sm transition-all duration-500 ease-in-out ${
                  openIndexes[index] ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

        {!expanded && (
          <div className="text-center mt-8">
            <button
              onClick={() => setExpanded(true)}
              className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition"
            >
              View more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
