import { useState } from 'react'

const tabs = ['Standard', 'Standard Cent', 'Pro']

const tableData = {
  Standard: [
    { symbol: 'BTC/AUDm', spread: '75.8', commission: '$0', margin: '0.25%', longSwap: '-38.7', shortSwap: '-42.95', stopLevel: '0' },
    { symbol: 'BTC/CNHm', spread: '707.8', commission: '$0', margin: '0.25%', longSwap: '-177.04', shortSwap: '-484.4', stopLevel: '0' },
    { symbol: 'BTC/JPYm', spread: '568.6', commission: '$0', margin: '0.25%', longSwap: '-372.88', shortSwap: '-952.31', stopLevel: '0' },
    { symbol: 'BTC/USDm', spread: '478.05', commission: '$0', margin: '0.25%', longSwap: '-73.88', shortSwap: '-447.14', stopLevel: '0' },
  ],
  'Standard Cent': [
    { symbol: 'ETH/USDm', spread: '18', commission: '$0', margin: '0.25%', longSwap: '-1.86', shortSwap: '0', stopLevel: '0' },
    { symbol: 'BTC/CADm', spread: '216.6', commission: '$0', margin: '0.25%', longSwap: '-252.88', shortSwap: '0', stopLevel: '0' },
    { symbol: 'BTC/CZKm', spread: '465.3', commission: '$0', margin: '0.25%', longSwap: '-104.57', shortSwap: '-197.1', stopLevel: '0' },
  ],
  Pro: [
    { symbol: 'BTC/PLNm', spread: '107.6', commission: '$0', margin: '0.25%', longSwap: '-46.88', shortSwap: '-34.01', stopLevel: '0' },
  ],
  Zero: [],
  'Raw Spread': [],
}

export default function CryptoSpreadsTabs() {
  const [activeTab, setActiveTab] = useState('Standard')

  return (
    <section className="px-6 py-20 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Crypto market spreads and margins
        </h2>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded border transition text-sm font-medium ${
                activeTab === tab
                  ? 'bg-[#07A658] text-white border-[#07A658]'
                  : 'bg-white text-[#07A658] border-[#07A658]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Table */}
        {tableData[activeTab] && tableData[activeTab].length > 0 ? (
          <div className="overflow-x-auto border  border-gray-300 rounded-lg shadow-sm">
            <table className="min-w-full table-auto text-sm">
              <thead className="bg-[#07A658] text-white">
                <tr>
                  <th className="px-4 py-2 text-left">Symbol</th>
                  <th className="px-4 py-2">Avg. spread<sup>*</sup> (pips)</th>
                  <th className="px-4 py-2">Commission (per lot/side)</th>
                  <th className="px-4 py-2">Margin</th>
                  <th className="px-4 py-2">Long swap (pips)</th>
                  <th className="px-4 py-2">Short swap (pips)</th>
                  <th className="px-4 py-2">Stop level<sup>*</sup> (pips)</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {tableData[activeTab].map((row, index) => (
                  <tr key={index} className="border-t hover:bg-green-50 border-gray-400">
                    <td className="px-4 py-2 font-medium">{row.symbol}</td>
                    <td className="px-4 py-2 text-center">{row.spread}</td>
                    <td className="px-4 py-2 text-center">{row.commission}</td>
                    <td className="px-4 py-2 text-center">{row.margin}</td>
                    <td className="px-4 py-2 text-center">{row.longSwap}</td>
                    <td className="px-4 py-2 text-center">{row.shortSwap}</td>
                    <td className="px-4 py-2 text-center">{row.stopLevel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-500">No data available for this tab.</p>
        )}
      </div>
    </section>
  )
}
