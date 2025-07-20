/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import fastExecution from "../../img/fast.svg";
import lowSpreads from "../../img/low.svg";
import stopOutProtection from "../../img/stop.svg";

export default function WhyTradeStocks() {
  const items = [
    {
      title: "Fast execution",
      desc: "Never miss a pip. Get your orders executed in milliseconds on both the MT platforms and proprietary Equitrust Terminals.",
      icon: fastExecution,
    },
    {
      title: "Low and stable spreads",
      desc: "Trade both rising and falling stock markets with low spreads that stay stable, even during high-impact stock market news.",
      icon: lowSpreads,
    },
    {
      title: "Stop Out Protection",
      desc: "Take on volatile markets with a unique protection feature that strengthens your positions and helps delay or avoid stop outs.",
      icon: stopOutProtection,
    },
  ];

  return (
    <section className="py-20 bg-white px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-900">
          Why trade stocks with Equitrustmarkets
        </h2>
        <p className="text-gray-600 mt-4">
          From Big Tech to Big Pharma and more, trade stocks from large-cap companies in the global stock market with conditions designed to empower your strategy.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="border rounded-lg p-6 text-left bg-white shadow-sm hover:shadow-md transition border-gray-300"
          >
            <img src={item.icon} alt={item.title} className="h-10 w-10 mb-5" />
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
