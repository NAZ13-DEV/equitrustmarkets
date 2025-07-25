import React from 'react';
import { Database, Gift, Users } from 'lucide-react';

const PlatformStats = () => {
  return (
    <div className='bg-white p-6 rounded-xl shadow text-sm space-y-5'>
      {/* Title */}
      <h2 className='text-lg font-semibold text-gray-900'>Platform</h2>

      {/* Stat 1 */}
      <div className='flex items-center space-x-3'>
        <div className='w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center'>
          <Database className='w-5 h-5 text-gray-500' />
        </div>
        <div>
          <p className='text-base font-semibold text-gray-900'>$511.4M +</p>
          <p className='text-xs text-gray-500'>
            Optima Trade Market TVL across all blockchains
          </p>
        </div>
      </div>

      {/* Stat 2 */}
      <div className='flex items-center space-x-3'>
        <div className='w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center'>
          <Gift className='w-5 h-5 text-gray-500' />
        </div>
        <div>
          <p className='text-base font-semibold text-gray-900'>$25M +</p>
          <p className='text-xs text-gray-500'>
            Optima Trade Market total rewards paid
          </p>
        </div>
      </div>

      {/* Stat 3 */}
      <div className='flex items-center space-x-3'>
        <div className='w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center'>
          <Users className='w-5 h-5 text-gray-500' />
        </div>
        <div>
          <p className='text-base font-semibold text-gray-900'>100,000+</p>
          <p className='text-xs text-gray-500'>Stakers</p>
        </div>
      </div>
    </div>
  );
};

export default PlatformStats;
