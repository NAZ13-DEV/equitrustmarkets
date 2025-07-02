import React from 'react';

const StayTuned = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow text-sm space-y-4">
      {/* Heading */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900">Stay tuned</h2>
        <p className="text-sm text-gray-500 mt-1">
          Subscribe to our newsletter and never miss our latest news
        </p>
      </div>

      {/* Form */}
      <div className="space-y-3">
        <input
          type="email"
          placeholder="Enter email address"
          className="w-full px-4 py-3 text-sm bg-gray-100 text-gray-700 rounded-md focus:outline-none"
        />
        <button
          className="w-full border border-green-600 text-green-600 font-medium py-2 rounded-md hover:bg-green-50 transition"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default StayTuned;
