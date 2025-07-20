/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import arrowDown from '../../img/instant.svg'
import circleTrade from '../../img/swap1.svg'
import lightning from '../../img/stop12.svg'

export default function WhyTradeCrypto() {
  return (
    <section className="bg-white py-20 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why trade crypto with Equitrustmarkets
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          From Bitcoin to Ethereum and more, you can trade digital assets against the USD with
          fast, secure, and cost-effective execution at Equitrustmarkets.
        </p>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            icon: lightning,
            title: 'Instant Withdrawals',
            text: 'Withdraw your funds quickly with no delays. Choose your preferred method and enjoy fast approvals from Equitrustmarkets.'
          },
          {
            icon: circleTrade,
            title: 'Swap-free Crypto Trading',
            text: 'Keep your crypto positions open overnight with no extra charges, whether going long or short on your favorite coins.'
          },
          {
            icon: arrowDown,
            title: 'Downside Protection',
            text: 'Enjoy advanced protection that minimizes risk during high volatility — reducing exposure to sharp market movements.'
          }
        ].map(({ icon, title, text }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="border p-6 rounded-lg shadow-sm text-left border-gray-300"
          >
            <img src={icon} alt={title} className="w-10 h-10 mb-4" />
            <h4 className="text-lg font-semibold mb-2">{title}</h4>
            <p className="text-gray-600 text-sm">{text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
