/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import userImage from '../../img/guy.jpg'; // replace with your image path

export default function PaymentFeatures() {
  return (
    <section className="w-full bg-white px-4 py-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Text Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="space-y-10">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Simplified Global Transactions</h3>
              <p className="text-gray-600 mt-2">
                Seamlessly send and receive payments around the world. Fast, secure, and tailored for modern users.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Withdraw Anytime, Anywhere</h3>
              <p className="text-gray-600 mt-2">
                Enjoy full access to your funds 24/7 — no delays, no excuses. Control your money on your terms.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Zero Fees, Maximum Freedom</h3>
              <p className="text-gray-600 mt-2">
                Say goodbye to annoying withdrawal fees. We cover your transaction costs — because you deserve better.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Image with Flags */}
        <motion.div
          className="flex-1 relative w-full max-w-md"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <img
            src={userImage}
            alt="User with global currency options"
            className="rounded-xl w-full object-cover"
          />


        </motion.div>
      </div>
    </section>
  );
}
