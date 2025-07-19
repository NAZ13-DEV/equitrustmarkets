/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import DepositImage from '../../img/deposit-guy.jpg'; // Ensure this image matches the one in your screenshot

const steps = [
  {
    title: 'Step 1',
    description: 'Register and verify your account',
  },
  {
    title: 'Step 2',
    description: 'Choose one of the available payment methods',
  },
  {
    title: 'Step 3',
    description: 'Complete your deposit request',
  },
];

export default function DepositSteps() {
  return (
    <section className="w-full bg-white px-4 py-16">
      <div className="max-w-5xl mx-auto text-center mb-8">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold text-gray-900"
        >
          Deposit your funds in 3 easy steps
        </motion.h2>
      </div>

      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="rounded-xl overflow-hidden shadow-md bg-white">
          <img
            src={DepositImage}
            alt="Deposit Illustration"
            className="w-full h-auto object-cover rounded-t-xl"
          />
        </div>

        <div className="grid md:grid-cols-3 bg-gray-50 rounded-b-xl shadow-md overflow-hidden border-t border-gray-200 mt-[-5px]">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`p-6 text-left ${
                index !== 0 ? 'border-l border-gray-200' : ''
              }`}
            >
              <div className="text-sm text-gray-500 mb-2">{step.title}</div>
              <div className="text-md font-medium text-gray-800">
                {step.description}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
