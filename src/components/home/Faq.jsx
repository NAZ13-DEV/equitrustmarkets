import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="bg-white w-full py-16 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
          Frequently asked questions
        </h2>

        <div className="space-y-3">
          {(expanded ? faqs : faqs.slice(0, 3)).map((faq, index) => {
            const isOpen = openIndexes[index];
            return (
              <div key={index} className="bg-[#F9FAFB] rounded-lg">
                <button
                  onClick={() => toggleAnswer(index)}
                  className="flex items-center justify-between w-full py-3 px-4 text-base font-semibold text-gray-900 rounded-lg transition-all"
                >
                  {faq.question}
                  <ChevronDown
                    className={`w-5 h-5 text-gray-700 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-gray-700 text-sm leading-relaxed animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {!expanded && (
          <div className="text-center mt-10">
            <button
              onClick={() => setExpanded(true)}
              className="px-6 py-2 border border-green-500 text-green-600 font-medium rounded-lg transition hover:bg-green-50"
            >
              View more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
