import React from 'react';
import { ExternalLink } from 'lucide-react';

const DecentralisationStats = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow text-sm space-y-5">
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-900">SD decentralisation stats</h2>

      {/* Total node operators */}
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
          <span role="img" aria-label="operators">👥</span> {/* Replace with actual icon if desired */}
        </div>
        <div>
          <p className="text-base font-semibold text-gray-900">293</p>
          <p className="text-xs text-gray-500">Total node operators</p>
        </div>
      </div>

      {/* Node operator bond */}
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
          <span role="img" aria-label="bond">💼</span> {/* Replace with icon */}
        </div>
        <div>
          <p className="text-base font-semibold text-gray-900">
            6,188,128 SD <span className="text-blue-600">| $2,590,820</span>
          </p>
          <p className="text-xs text-gray-500 flex items-center gap-1">
            Node operator bond <span title="More info">ℹ️</span>
          </p>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-200 my-2" />

      {/* Dune Dashboards */}
      <a href="#" className="flex items-center justify-between hover:underline">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-red-600 to-blue-600" />
          <span className="text-sm text-gray-700">Dune Dashboards</span>
        </div>
        <ExternalLink className="w-4 h-4 text-gray-400" />
      </a>

      {/* Contract Link */}
      <a
        href="#"
        className="block text-xs bg-gray-100 text-gray-700 rounded-md py-2 px-3 mt-2 text-center hover:underline"
      >
        SD Utility Pool contract 0xE...602
      </a>
    </div>
  );
};

export default DecentralisationStats;
