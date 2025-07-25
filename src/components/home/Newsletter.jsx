import React from 'react';

export default function NewsLetter() {
  return (
    <section className='w-full px-4 py-16 flex justify-center items-center'>
      <div className='max-w-md w-full text-center'>
        <h2 className='text-xl md:text-2xl font-extrabold text-gray-900 mb-2'>
          Join Optima Trade Market’s newsletter
        </h2>
        <p className='text-sm text-gray-600 mb-6'>
          Get the latest updates, new DeFi strategies and exclusive offers right
          in your email box
        </p>

        <form className='flex flex-col items-center gap-4'>
          <input
            type='email'
            placeholder='Email address'
            className='w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 transition text-sm'
          />
          <button
            type='submit'
            className='bg-green-600 hover:bg-green-700 transition text-white font-semibold px-6 py-2 rounded-md text-sm'
          >
            Subscribe
          </button>
        </form>

        <p className='text-xs text-gray-500 mt-4'>
          You are subscribing to all our networks
        </p>
        <button className='text-green-600 text-xs font-semibold underline underline-offset-2 mt-1 hover:text-green-700 transition'>
          Select networks
        </button>
      </div>
    </section>
  );
}
