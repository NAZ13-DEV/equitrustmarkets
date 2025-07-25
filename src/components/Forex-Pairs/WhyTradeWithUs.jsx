/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import stable from '../../img/stable.svg'; // your SVG file

// Example placeholders for additional icons
import execution from '../../img/execution.svg';
import protection from '../../img/stop.svg';

const features = [
  {
    icon: protection,
    title: 'Stop Out Protection',
    description:
      'Trade with confidence using Optima Trade Market’ market protection tools that help defend your positions from sudden volatility and avoid forced stop-outs.',
  },
  {
    icon: stable,
    title: 'Stable & Low Spreads',
    description:
      'Access tight spreads that remain consistent—even during major market events. Perfect for cost-conscious traders.',
  },
  {
    icon: execution,
    title: 'Lightning-Fast Execution',
    description:
      'Execute trades in milliseconds across top currency pairs. Benefit from real-time execution on our award-winning platform.',
  },
];

export default function WhyTradeWithUs() {
  return (
    <section className='bg-white py-20 px-4'>
      <div className='max-w-6xl mx-auto text-center'>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'
        >
          Why trade forex with Optima Trade Market
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className='text-gray-600 max-w-2xl mx-auto mb-12'
        >
          Join a trusted platform and trade top currency pairs using powerful
          tools and reliable execution—backed by award-winning infrastructure.
        </motion.p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className='bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition border-gray-300'
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className='w-12 h-12 mb-4 mx-auto'
              />
              <h3 className='text-lg font-semibold mb-2'>{feature.title}</h3>
              <p className='text-sm text-gray-600'>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
