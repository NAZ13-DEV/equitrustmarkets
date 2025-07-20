/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import tradeImg from '../../img/stock-woman.jpg'

export default function TradeStocksSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
            Open an account and trade <br className="hidden md:inline" /> stocks
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Diversify your portfolio</h3>
              <p className="text-gray-600">
                Access shares from global giants like Alphabet, Boeing, Nike, and more—all in one place.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Low and stable spreads</h3>
              <p className="text-gray-600">
                Take advantage of tight, transparent spreads to trade more efficiently in the stock market.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Enjoy superior execution</h3>
              <p className="text-gray-600">
                Trade seamlessly on MetaTrader or our Web Terminal, engineered for real-time execution and ease.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Image with Labels */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src={tradeImg}
            alt="Trade Stocks"
            className="rounded-xl shadow-lg"
          />


        </motion.div>
      </div>
    </section>
  )
}
