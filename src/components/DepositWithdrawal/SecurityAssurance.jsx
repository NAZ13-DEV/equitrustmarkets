/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const securityFeatures = [
  {
    title: 'Tier-1 Bank Protection',
    description: 'Your funds are stored securely in Tier-1 global banks — separated from operational accounts.',
  },
  {
    title: 'Instant Withdrawals',
    description: 'Withdraw your funds instantly, backed by robust verification and fraud-prevention tools.',
  },
  {
    title: 'Certified Data Compliance',
    description: 'We comply with the latest PCI DSS standards to protect all customer payment data.',
  },
  {
    title: 'Advanced 3D Secure',
    description: 'We support 3D Secure protocols for all card transactions — reducing risk and ensuring peace of mind.',
  },
];

export default function SecurityAssurance() {
  return (
    <section className="w-full bg-white px-6 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        {/* Left: Title and Subtext */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Your funds are secure — always
          </h2>
          <p className="mt-4 text-gray-600">
            As a globally trusted trading platform, we apply enterprise-grade security at every level to keep your money and data safe.
          </p>
        </motion.div>

        {/* Right: List of Features */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {securityFeatures.map((item, index) => (
            <motion.div
              key={index}
              className="flex justify-between items-start border-b pb-6 lg:pb-4 border-gray-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="font-semibold text-gray-800">{item.title}</div>
              <div className="text-sm text-gray-600 max-w-sm pl-8">{item.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


