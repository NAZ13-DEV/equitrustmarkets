/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What time does the stock market open?",
    answer:
      "The stock market typically opens at 9:30 AM EST and closes at 4:00 PM EST, Monday through Friday.",
  },
  {
    question: "What is a “moving average” in the stock market?",
    answer:
      "A moving average is a statistical calculation that smooths out price data to identify trends over time, commonly used in technical analysis.",
  },
  {
    question: "How can I invest in stocks with intraday trading?",
    answer:
      "Intraday trading involves buying and selling stocks within the same trading day. You can start by choosing a broker, funding your account, and using real-time charts to analyze opportunities.",
  },
  {
    question: "What are the most popular stocks to trade?",
    answer:
      "Popular stocks include large-cap companies like Apple (AAPL), Amazon (AMZN), Tesla (TSLA), Microsoft (MSFT), and Meta (META).",
  },
];

export default function FAQStockSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6 py-20 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 md:col-span-1"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Frequently <br /> asked questions
        </motion.h2>

        <div className="md:col-span-2 space-y-6 w-full">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border-b pb-2 border-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <button
                className="flex justify-between w-full text-left text-sm font-medium text-gray-800"
                onClick={() => toggleIndex(index)}
              >
                <span>{faq.question}</span>
                <span>{openIndex === index ? "▴" : "▾"}</span>
              </button>
              {openIndex === index && (
                <motion.div
                  className="text-sm text-gray-600 mt-2"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
