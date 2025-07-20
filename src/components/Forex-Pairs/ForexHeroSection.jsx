/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import forexHeroSm from '../../img/fxlg.jpg'
import forexHeroLg from '../../img/fxsm.jpg'

export default function ForexHeroSection() {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat text-white relative"
      style={{
        backgroundImage: `url(${forexHeroSm})`,
      }}
    >
      {/* Background override for large screens */}
      <div
        className="hidden lg:block absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${forexHeroLg})` }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-36">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Forex trading with <br />
            <span className="">tight and consistent spreads</span>
          </h1>

          <p className="text-base md:text-lg mb-8 text-white">
            Access global currency markets and trade the most popular forex pairs with professional-grade conditions.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link
              to="/register"
              className="bg-[#0fc76e] hover:bg-[#059b4f] text-white px-5 py-2 rounded font-medium transition"
            >
              Register
            </Link>
            <Link
              to="/demo"
              className="bg-white text-gray-900 hover:bg-gray-200 px-5 py-2 rounded font-medium transition"
            >
              Try free demo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
