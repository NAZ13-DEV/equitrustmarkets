/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import bgLG from '../../img/stocklg.jpg'
import bgSM from '../../img/stocksm.jpg'
import { Link } from 'react-router-dom'

export default function StockHeroSection() {
  return (
    <section className="relative bg-no-repeat bg-cover bg-center min-h-[600px] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${bgLG})`
      }}
    >
      {/* Mobile BG Override */}
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: `url(${bgSM})` }}
      />

      {/* Overlay (for darkness/contrast) */}
      <div className="absolute inset-0 bg-black/60 md:bg-black/50 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl px-6 md:px-10 text-left w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-xl space-y-6 py-20 md:py-36"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            Trade stocks <br className="hidden md:block" /> with zero commission
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Trade stocks of the biggest names in the international stock market with low transaction costs.
          </p>

          <div className="flex gap-4 pt-4">
            <Link to={'/register'} className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-lg transition">
              Register
            </Link>
            <Link to={'/register'}  className="bg-white/20 hover:bg-white/30 text-white font-medium px-6 py-3 rounded-lg transition">
              Try free demo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
