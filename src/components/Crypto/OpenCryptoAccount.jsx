/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import cryptoWomanImg from '../../img/woman.jpg'; 

export default function OpenCryptoAccount() {
  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Text Block */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Get started with crypto trading on Equitrustmarkets
          </h2>

          <div className="space-y-6 text-gray-800">
            <div>
              <h4 className="font-semibold text-lg">Explore diverse crypto markets</h4>
              <p className="text-sm text-gray-600">
                Tap into price movements without owning the asset, using advanced tools built for performance.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg">Trade multiple coins swap-free</h4>
              <p className="text-sm text-gray-600">
                Open and hold crypto positions without worrying about overnight fees — zero cost, always.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg">Utilize strategic trading tools</h4>
              <p className="text-sm text-gray-600">
                Strengthen your market approach with powerful analytics and execution precision.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <img
            src={cryptoWomanImg}
            alt="Crypto trading interface"
            className="rounded-lg shadow-lg w-full max-w-md mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
