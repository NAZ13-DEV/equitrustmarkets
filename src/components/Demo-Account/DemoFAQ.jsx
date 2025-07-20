/* eslint-disable no-unused-vars */
import { Disclosure } from '@headlessui/react'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

const faqs = [
  {
    question: 'What is the difference between a real and demo trading account?',
    answer:
      'A demo account allows you to trade with virtual funds, helping you practice strategies risk-free. A real account uses actual money for live trading.',
  },
  {
    question: 'How do I top up my demo trading account?',
    answer:
      'You can top up your demo balance from your dashboard by selecting your demo account and choosing the "Top Up" option.',
  },
  {
    question: 'Can I use real money on a demo trading account?',
    answer:
      'No. Demo accounts use virtual funds only and are strictly for practice and strategy testing.',
  },
]

export default function DemoFAQ() {
  return (
    <section className="px-4 py-16 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-gray-900 leading-tight">
            Frequently <br /> asked questions
          </h2>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:col-span-2"
        >
          <div className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <Disclosure key={index}>
                {({ open }) => (
                  <div className="border-b border-gray-200">
                    <Disclosure.Button className="flex justify-between items-center w-full py-4 text-left text-gray-900 text-sm font-medium focus:outline-none">
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                          open ? 'rotate-180' : ''
                        }`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-4 text-sm text-gray-700">
                      {faq.answer}
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
