import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { question: "What is an execution order?", answer: "An execution order is a directive given by a trader to buy or sell a financial asset." },
  { question: "What is instant execution?", answer: "Instant execution allows orders to be filled immediately at the trader’s requested price or not at all." },
  { question: "What is market execution?", answer: "Market execution fills your order at the best available market price with high-speed processing." },
  { question: "What is the order execution process and policy at EquitrustMarkets?", answer: "EquitrustMarkets uses advanced systems to ensure trades are executed fairly, reliably, and quickly with minimal slippage." },
  { question: "How is a trade order executed at EquitrustMarkets?", answer: "Once submitted, an order goes through our infrastructure and is matched with market pricing algorithms to ensure optimal fill." },
  { question: "What is EquitrustMarkets order execution speed?", answer: "Our network achieves millisecond execution speeds thanks to low-latency infrastructure and global server locations." },
  { question: "How are orders closed with instant execution?", answer: "Orders are closed at your specified price if available; if not, the system prompts for approval before executing." },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left Side Title */}
        <div className="lg:w-1/3">
          <h2 className="text-2xl font-bold text-[#142528]">
            Frequently<br />asked questions
          </h2>
        </div>

        {/* Right Side Accordion */}
        <div className="lg:w-2/3 w-full">
          <ul className="border-t border-gray-200">
            {faqs.map((faq, index) => (
              <li key={index} className="border-b border-gray-200">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center text-left px-4 py-4 focus:outline-none"
                >
                  <span className="text-sm text-[#142528] font-medium">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeIndex === index && (
                  <div className="px-4 pb-4 text-sm text-[#3f6870]">
                    {faq.answer}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
