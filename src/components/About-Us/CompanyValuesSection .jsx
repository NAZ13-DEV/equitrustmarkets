import React from 'react';

const CompanyValuesSection = () => {
  return (
    <section className='py-20 px-6 bg-white text-[#142528]'>
      <div className='max-w-7xl mx-auto text-center'>
        {/* Stats */}
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-6 mb-14'>
          <div>
            <h3 className='text-2xl font-bold'>2,000+</h3>
            <p className='text-sm text-gray-600'>Team Members</p>
          </div>
          <div>
            <h3 className='text-2xl font-bold'>13 offices</h3>
            <p className='text-sm text-gray-600'>Worldwide</p>
          </div>
          <div>
            <h3 className='text-2xl font-bold'>98</h3>
            <p className='text-sm text-gray-600'>Nationalities</p>
          </div>
          <div>
            <h3 className='text-2xl font-bold'>5</h3>
            <p className='text-sm text-gray-600'>Continents</p>
          </div>
        </div>

        {/* Section Title */}
        <div className='mb-16'>
          <h2 className='text-3xl sm:text-4xl font-semibold mb-3'>
            Our values guide every step forward
          </h2>
          <p className='text-gray-600 max-w-xl mx-auto'>
            From strategy to customer service, every decision at Optima Trade
            Marketis shaped by our 4 fundamental values.
          </p>
        </div>

        {/* Values Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200'>
          <div className='bg-white p-6 text-left'>
            <h3 className='text-lg font-semibold mb-2'>Innovation-First</h3>
            <p className='text-sm text-gray-700'>
              We constantly innovate, rethink norms, and refuse to settle. If
              something doesn’t exist, we build it. If it does, we make it
              better.
            </p>
          </div>
          <div className='bg-white p-6 text-left'>
            <h3 className='text-lg font-semibold mb-2'>Client-Centric</h3>
            <p className='text-sm text-gray-700'>
              We prioritize our traders. Every feature we release and decision
              we make is guided by a desire to give our users a superior
              experience.
            </p>
          </div>
          <div className='bg-white p-6 text-left'>
            <h3 className='text-lg font-semibold mb-2'>Technical Expertise</h3>
            <p className='text-sm text-gray-700'>
              We leverage advanced systems and analytics to deliver robust
              trading conditions that protect clients and maximize
              opportunities.
            </p>
          </div>
          <div className='bg-white p-6 text-left'>
            <h3 className='text-lg font-semibold mb-2'>Dependable</h3>
            <p className='text-sm text-gray-700'>
              Stability is non-negotiable. From execution to support, our
              platform is built for reliability in every market condition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyValuesSection;
