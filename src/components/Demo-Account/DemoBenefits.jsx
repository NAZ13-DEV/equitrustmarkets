/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

// Placeholder imports — you’ll replace with actual images
import platformImg from '../../img/platform.jpg';
import strategyImg from '../../img/strategy.jpg';
import skillImg from '../../img/computer-guy.jpg';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

export default function DemoBenefits() {
  return (
    <section className='bg-white px-4 py-16'>
      <motion.div {...fadeInUp} className='text-center max-w-2xl mx-auto mb-12'>
        <h2 className='text-2xl md:text-3xl font-bold text-gray-900'>
          Benefits of using an Optima Trade Marketdemo trading account
        </h2>
        <p className='text-gray-600 mt-2 text-sm'>
          Our demo account can be your “secret weapon” to test out strategies
          and hone your skills with zero risk. Here’s how you’ll benefit:
        </p>
      </motion.div>

      {/* Top Grid: 2 Items */}
      <div className='grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-6'>
        {/* Skill Development */}
        <motion.div
          {...fadeInUp}
          className='relative overflow-hidden rounded-lg shadow-md'
        >
          <img
            src={skillImg}
            alt='Skill development'
            className='w-full h-64 object-cover'
          />
          <div className='absolute inset-0  bg-opacity-40 flex flex-col justify-end p-4'>
            <h3 className='text-white font-semibold text-lg'>
              Skill development
            </h3>
            <p className='text-white text-sm'>
              Hone trading abilities, from market analysis to decision-making.
            </p>
          </div>
        </motion.div>

        {/* Platform Orientation */}
        <motion.div
          {...fadeInUp}
          className='relative overflow-hidden rounded-lg shadow-md'
        >
          <img
            src={platformImg}
            alt='Platform orientation'
            className='w-full h-64 object-cover'
          />
          <div className='absolute inset-0 bg-opacity-40 flex flex-col justify-end p-4'>
            <h3 className='text-white font-semibold text-lg'>
              Platform orientation
            </h3>
            <p className='text-white text-sm'>
              Get comfortable with trading platform tools and features.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Centered Bottom Card: Strategy Testing */}
      <motion.div
        {...fadeInUp}
        className='max-w-xl mx-auto relative overflow-hidden rounded-lg shadow-md'
      >
        <img
          src={strategyImg}
          alt='Strategy testing'
          className='w-full h-64 object-cover'
        />
        <div className='absolute inset-0  bg-opacity-10 flex flex-col justify-end p-4'>
          <h3 className='text-white font-semibold text-lg'>Strategy testing</h3>
          <p className='text-white text-sm'>
            Experiment with various strategies in real market conditions.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
