import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const opportunities = [
  {
    asset: ['SD', 'USDC'],
    provider: 'Quickswap',
    providerLogo: 'https://cryptologos.cc/logos/polygon-matic-logo.svg?v=025',
    activity: 'Polygon',
    apy: 57.4,
    tvl: 80000,
    link: 'https://quickswap.exchange',
  },
  {
    asset: ['SD', 'HBARX'],
    provider: 'Saucerswap',
    providerLogo: 'https://cryptologos.cc/logos/hedera-hbar-logo.svg?v=025',
    activity: 'Hedera',
    apy: 34.38,
    tvl: 40000,
    link: 'https://saucerswap.finance',
  },
  {
    asset: ['SD', 'ETHx'],
    provider: 'Balancer',
    providerLogo: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=025',
    activity: 'Ethereum',
    apy: 33.51,
    tvl: 18000,
    link: 'https://balancer.fi',
  },
  {
    asset: ['SD', 'MaticX'],
    provider: 'Balancer',
    providerLogo: 'https://cryptologos.cc/logos/polygon-matic-logo.svg?v=025',
    activity: 'Polygon',
    apy: 17.38,
    tvl: 73000,
    isNew: true,
    link: 'https://balancer.fi',
  },
  {
    asset: ['SD', 'USDC'],
    provider: 'Uniswap',
    providerLogo: 'https://cryptologos.cc/logos/uniswap-uni-logo.svg?v=025',
    activity: 'Ethereum',
    apy: 3.34,
    tvl: 5250000,
    link: 'https://app.uniswap.org',
  },
];

const activityFilters = ['Ethereum', 'Polygon', 'Hedera'];

const DeFiOpportunitiesTable = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [tvlSort, setTvlSort] = useState('desc');
  const [apySort, setApySort] = useState('desc');
  const [selectedActivities, setSelectedActivities] = useState([...activityFilters]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowFilter(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const toggleActivity = (activity) => {
    setSelectedActivities((prev) =>
      prev.includes(activity) ? prev.filter((a) => a !== activity) : [...prev, activity]
    );
  };

  const sortedData = [...opportunities]
    .filter((o) => selectedActivities.includes(o.activity))
    .sort((a, b) => {
      if (apySort) {
        return apySort === 'desc' ? b.apy - a.apy : a.apy - b.apy;
      } else {
        return tvlSort === 'desc' ? b.tvl - a.tvl : a.tvl - b.tvl;
      }
    });

  return (
    <div className="px-4 md:px-10 pb-10 bg-[#F8F9FB]">
      <div className="mb-6 text-center">
        <h2 className="text-xl font-semibold text-[#0A0B0D]">SD DeFi Opportunities</h2>
        <p className="text-sm text-[#5B5E63]">
          Use SD and explore rewards using DeFi opportunities
        </p>
      </div>

      {/* Filter and Header */}
      <div className="relative flex items-center justify-between mb-2">
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowFilter((prev) => !prev)}
            className="flex items-center gap-1 px-4 py-1.5 border rounded-md text-sm bg-white"
          >
            Activity <ChevronDown className="w-4 h-4" />
          </button>
          {showFilter && (
            <div className="absolute z-20 mt-2 bg-white border rounded-md shadow-md w-44">
              <div className="p-2 space-y-2">
                {activityFilters.map((activity) => (
                  <label key={activity} className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={selectedActivities.includes(activity)}
                      onChange={() => toggleActivity(activity)}
                      className="accent-green-600"
                    />
                    {activity}
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
        <span className="text-sm font-medium text-[#0A0B0D]">Top Opportunities</span>
      </div>

      {/* Table */}
      <div className="px-4 py-4 overflow-x-auto bg-white rounded-2xl md:px-6">
        <table className="w-full text-sm text-[#0A0B0D] border-collapse">
          <thead>
            <tr className="text-left font-semibold text-xs text-[#5B5E63]">
              <th className="py-3">Assets</th>
              <th>Provider</th>
              <th>Activity</th>
              <th
                className="cursor-pointer"
                onClick={() => {
                  setApySort(apySort === 'desc' ? 'asc' : 'desc');
                  setTvlSort(null);
                }}
              >
                APY {apySort === 'desc' ? '↑' : '↓'}
              </th>
              <th
                className="cursor-pointer"
                onClick={() => {
                  setTvlSort(tvlSort === 'desc' ? 'asc' : 'desc');
                  setApySort(null);
                }}
              >
                TVL {tvlSort === 'desc' ? '↑' : '↓'}
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row, i) => (
              <tr key={i} className="text-sm font-medium text-[#0A0B0D]">
                <td className="flex items-center gap-2 py-4">
                  {row.asset.map((coin, j) => (
                    <span
                      key={j}
                      className="px-2 py-1 text-xs font-semibold text-green-600 bg-green-100 rounded-full"
                    >
                      {coin}
                    </span>
                  ))}
                  {row.isNew && (
                    <span className="bg-[#E6F0FF] text-[#357CE0] text-[10px] font-semibold px-2 py-[2px] rounded ml-1">
                      NEW
                    </span>
                  )}
                </td>
                <td className="flex items-center gap-2 py-4">
                  <img src={row.providerLogo} alt="" className="w-5 h-5" />
                  {row.provider}
                </td>
                <td>{row.activity}</td>
                <td>{row.apy.toFixed(2)} %</td>
                <td>
                  {row.tvl > 1000000
                    ? `$${(row.tvl / 1000000).toFixed(2)}M`
                    : `$${(row.tvl / 1000).toFixed(0)}K`}
                </td>
                <td className="flex gap-2">
                  <a
                    href={row.link}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-green-600 text-white px-3 py-1.5 rounded-md text-xs"
                  >
                    ADD LIQUIDITY
                  </a>
                  <a
                    href={row.link}
                    target="_blank"
                    rel="noreferrer"
                    className="border px-3 py-1.5 rounded-md text-xs"
                  >
                    SWAP
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeFiOpportunitiesTable;
