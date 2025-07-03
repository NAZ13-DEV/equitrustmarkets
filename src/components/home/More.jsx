import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function More() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#F9FAFB] w-full rounded-md p-4 md:p-6">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-base md:text-lg font-medium text-gray-900"
      >
        Know more about Liquid Staking with Equitrustmarkets
        <ChevronDown
          className={`w-5 h-5 text-gray-800 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Content */}
      {isOpen && (
        <div className="mt-6 space-y-8 animate-fade-in text-[15px] text-gray-800 leading-relaxed">
          <div>
            <h1 className="text-lg font-semibold mb-1">
              Liquid Staking Platform | Earn Flexible Staking Returns with Equitrustmarkets
            </h1>
          </div>

          <div>
            <h2 className="text-md font-semibold mb-1">
              Liquidity Meets Leverage: Redefining Decentralized Yield Strategies
            </h2>
            <p className="text-justify">
              Liquid staking platforms like <strong>Equitrustmarkets</strong> are transforming the brokerage and trading industry by allowing traders to earn staking yields while retaining full liquidity. Clients can simultaneously deploy their staked assets in margin trading, derivatives, or yield farming — maximizing capital efficiency.
              <br /><br />
              This dual-utility enhances asset turnover, promotes hedging flexibility, and lowers capital lock-in, leading to smarter portfolio structuring and greater alpha generation across diversified asset classes.
            </p>
          </div>

          <div>
            <h2 className="text-md font-semibold mb-1">
              Why Brokers and Traders Trust Equitrustmarkets for Liquid Staking
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Instant Liquidity:</strong> Withdraw or reallocate capital without unbonding delays, perfect for active traders.</li>
              <li><strong>Risk Hedging:</strong> Maintain open positions while still earning staking rewards in the background.</li>
              <li><strong>Pro-Level Security:</strong> All smart contracts are audited by Tier-1 firms. Trading infrastructure follows strict compliance protocols.</li>
              <li><strong>Cross-Asset Compatibility:</strong> Stake crypto assets while retaining access to CFDs, FX pairs, and commodities markets.</li>
              <li><strong>Competitive APRs:</strong> Enjoy rates on par with traditional lock-up staking, without sacrificing liquidity.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-md font-semibold mb-1">The Future of Brokerage: Dynamic or Traditional?</h2>
            <p className="text-justify">
              Dynamic liquid staking offers more capital agility than static staking models. With growing adoption of DeFi and real-time asset rebalancing, professional traders and fund managers are leaning towards platforms like <strong>Equitrustmarkets</strong> that support non-custodial, liquid staking alongside full-spectrum trading tools.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
