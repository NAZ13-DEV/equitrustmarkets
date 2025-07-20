/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Image1 from "../../img/company-stock.jpg"; 
import Chart1 from "../../img/graph.jpg";
import Chart2 from "../../img/abstract.jpg";
import Chart3 from "../../img/company-stock.jpg";

const articles = [
  {
    title: "Discover what stock trading is and how to trade CFDs",
    image: Image1,
  },
  {
    title: "RSI indicator for trading: basics and beyond",
    image: Chart1,
  },
  {
    title: "Swing Trading: How to trade stocks beyond a day",
    image: Chart2,
  },
  {
    title: "Position trading: Riding the waves of long-term trading",
    image: Chart3,
  },
];

export default function TradingPerspectives() {
  return (
    <section className="py-20 px-6 md:px-14 bg-white">
      <motion.div
        className="text-center max-w-3xl mx-auto mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Gain new perspectives on trading stocks
        </h2>
        <p className="text-gray-600 mt-4">
          Arm yourself with cutting-edge knowledge, revolutionize your trading strategies and
          navigate the stock market with prowess.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-4 max-w-7xl mx-auto">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-sm bg-white border hover:shadow-md transition border-gray-200"
          >
            <img src={article.image} alt={article.title} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-800">{article.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
