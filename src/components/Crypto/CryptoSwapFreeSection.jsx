/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import smBg from '../../img/bgsm1.jpg';
import lgBg from '../../img/bglg1.jpg';

export default function CryptoSwapFreeSection() {
  return (
    <section
      className="w-full relative bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url(${smBg})`,
      }}
    >
      {/* Large screen override background */}
      <div
        className="hidden lg:block absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url(${lgBg})`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-36">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Trade crypto <br />
            <span className="">with zero overnight fees</span>
          </h1>
          <p className="text-lg md:text-lg mb-8 font-bold">
            Open positions on top cryptocurrencies like BTC/USD and ETH/USD with no rollover charges. Available 24/7 on Equitrustmarkets.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link
              to="/register"
              className="bg-[#07A658] hover:bg-[#059b4f] text-white px-5 py-2 rounded font-medium transition"
            >
              Register
            </Link>
            <Link
              to="/register"WhyTradeCrypto
              className="bg-white text-gray-900 hover:bg-gray-100 px-5 py-2 rounded font-medium transition"
            >
              Try free demo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
