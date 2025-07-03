import React, { useState } from 'react';

import pantera from '../../img/pantera.webp'
import blockchain from '../../img/blockchain.webp'
import coinbase from '../../img/coinbase.webp'
import True from '../../img/true.webp'
import jump from '../../img/jump.webp'
import ledger from '../../img/ledger.webp'
import Aave from '../../img/aave.webp'
import balancer from '../../img/balancer.webp'
import beefy from '../../img/beefy.webp'
import swissborg from '../../img/swissborg.webp'
import quickswap from '../../img/quickswap.webp'
import anchorage from '../../img/anchorage.webp'
import bitgo from '../../img/bitgo.webp'
import okx from '../../img/okx.svg'
import bybit from '../../img/bybit.webp'
import gateio from '../../img/gate-io.webp'
import kucoin from '../../img/kucoin.webp'
import huobi from '../../img/huobi.svg'
import crypto from '../../img/crypto.webp'






const tabs = ['Private sale', 'Ecosystem', 'Exchange'];

const partnersData = {
  'Private sale': [
    { name: 'Pantera Capital', logo: pantera },
    { name: 'Blockchain.com', logo: blockchain },
    { name: 'Coinbase Ventures', logo: coinbase },
    { name: 'True Ventures', logo: True },
    { name: 'Jump Crypto', logo: jump },
  ],
  Ecosystem: [
    { name: 'Ledger', logo: ledger },
    { name: 'Aave', logo: Aave },
    { name: 'Balancer', logo: balancer },
    { name: 'Beefy Finance', logo: beefy },
    { name: 'Swissborg', logo: swissborg },
    { name: 'Quickswap', logo: quickswap },
    { name: 'Anchorage', logo: anchorage },
    { name: 'BitGo', logo: bitgo },
  ],
  Exchange: [
    { name: 'OKX', logo: okx },
    { name: 'Bybit', logo: bybit },
    { name: 'Gate.io', logo: gateio },
    { name: 'Kucoin', logo: kucoin },
    { name: 'Huobi', logo: huobi },
    { name: 'Crypto.com', logo:  crypto },
  ],
};

export default function Partner() {
  const [activeTab, setActiveTab] = useState('Private sale');

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12 text-center">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-6">Our partners</h2>

      {/* Tabs */}
      <div className="inline-flex items-center justify-center mb-8 bg-white p-1 rounded-full border border-green-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full font-semibold text-sm md:text-base transition ${
              activeTab === tab
                ? 'bg-green-500 text-white shadow'
                : 'text-gray-800 hover:text-green-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Partner Grid */}
      <div className="bg-[#E6F7F0] rounded-3xl p-6 md:p-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
        {partnersData[activeTab].map((partner) => (
          <div key={partner.name} className="flex flex-col items-center">
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-10 h-10 object-contain rounded-full mb-2"
            />
            <span className="text-sm font-medium text-gray-800">{partner.name}</span>
          </div>
        ))}

        {/* "View all Partners" button (only for Private Sale) */}
        {activeTab === 'Private sale' && (
          <div className="col-span-full flex justify-center mt-4">
            <button className="px-5 py-2 border border-green-500 text-green-600 font-semibold rounded-md hover:bg-green-50 transition text-sm">
              View all Partners
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
