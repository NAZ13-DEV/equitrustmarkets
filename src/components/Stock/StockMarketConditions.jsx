/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

export default function StockMarketConditions() {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Title and Intro */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:col-span-1"
        >
          <h2 className="text-3xl font-bold text-gray-900">Stock market<br />conditions</h2>
          <p className="text-sm text-gray-600 mt-4">
            The stock market is a global exchange for stocks and securities. Trading stocks allows you to capitalize on the share price movements of a company, whether they are rising or falling.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:col-span-2 space-y-10"
        >
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Stocks trading hours</h3>
            <p className="text-gray-600 mt-2">
              All stocks can be traded from Monday to Friday, between the hours of 13:40 to 19:45.
              Pre-market trading from 10:00 to 13:40 is available for the following stocks:
            </p>
            <p className="text-sm text-gray-700 mt-3">
              INTC, BAC, TSLA, WFC, BABA, NFLX, C, AMD, PFE, META, JNJ, PYPL, ORCL, NVDA, MSFT, AMZN,
              AAPL, BA, BEKE, BIDU, BILI, FTNT, JD, LI, NIO, NTES, PDD, TAL, TSM, XPEV, FUTU.
            </p>
            <p className="text-gray-600 mt-2">
              Please note, you can only close open orders during these pre-market hours.
              Opening new orders during pre-market is not possible.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              All timings are in server time (GMT+0). Learn more about trading hours in our <a href="#" className="text-blue-600 underline">Help Center</a>.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">Spreads</h3>
            <p className="text-gray-600 mt-2">
              Spreads are always floating, so the spreads in the table above are yesterday’s averages.
              For live spreads, please refer to the trading platform.
            </p>
            <p className="text-gray-600 mt-2">
              Please note that spreads may widen when the markets experience lower liquidity.
              This may persist until liquidity levels are restored.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">Swaps</h3>
            <p className="text-gray-600 mt-2">
              Swaps occur at 21:00 GMT+0 each day, excluding the weekend, until the position is closed.
              Please bear in mind that when trading stocks, triple swaps are charged on Fridays to cover financing costs incurred over the weekend.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">Stop level</h3>
            <p className="text-gray-600 mt-2">
              Please note that the stop level values in the table above are subject to change and may not be available for traders using certain high-frequency trading strategies or Expert Advisors.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
