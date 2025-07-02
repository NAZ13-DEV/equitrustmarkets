import React, { useState } from "react";

const UtilityPool = () => {
  const [activeTab, setActiveTab] = useState("Delegate");

  return (
    <div className="mt-2 space-y-6 lg:mt-0">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">SD Utility Pool</h2>
        <p className="mt-1 text-sm text-gray-600">
          Delegate SD to the SD Utility Pool and receive rewards for fueling
          Ethereum decentralization while supporting ETHx node operators.{" "}
          <a href="#" className="text-green-600 underline">
            Learn More
          </a>
        </p>
      </div>

      {/* Stats Section */}
      <div className="bg-[#f9fafb] p-6 rounded-xl space-y-3 ">
        {/* APR Row */}
        <div className="flex items-center justify-between text-sm font-medium text-gray-500">
          <span className="flex items-center gap-1">
            APR <span className="text-black">ℹ️</span>
          </span>
          <span className="text-base font-semibold text-gray-900">8.41%</span>
        </div>

        {/* Delegated & Utilized Stats */}
        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-gray-500">Total SD Delegated</span>
            <span className="font-semibold text-gray-900">
              5,677,248 SD{" "}
              <span className="font-normal text-gray-400">| $2,362,274</span>
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-500">Total SD Utilized</span>
            <span className="font-semibold text-gray-900">
              5,020,409 SD{" "}
              <span className="font-normal text-gray-400">| $2,088,967</span>
            </span>
          </div>
        </div>
      </div>

      {/* Tab Buttons */}
      <div className="flex w-full max-w-md mx-auto overflow-hidden bg-white shadow rounded-t-xl">
        {["Delegate", "Withdraw", "Claim"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 px-4 py-2 text-sm font-medium transition ${
              activeTab === tab
                ? "bg-white text-black border-b-2 border-green-500"
                : "bg-gray-100 text-gray-500 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Panel */}
      <div className="w-full max-w-md p-6 mx-auto space-y-4 bg-white shadow rounded-b-xl">
        {activeTab === "Delegate" && (
          <>
            <div>
              <label className="block mb-1 text-sm text-gray-600">
                Enter SD amount
              </label>
              <div className="relative">
                <input
                  type="number"
                  placeholder="0.0"
                  className="w-full px-4 text-lg text-gray-700 border border-green-600 rounded-xl py-7 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="absolute px-3 py-2 text-sm font-medium text-green-600 bg-gray-100 rounded-xl right-2 top-2 bottom-2 hover:bg-gray-200">
                  MAX
                </button>
              </div>
            </div>

            <div className="flex justify-between text-sm text-gray-500">
              <span>Transaction cost</span>
              <span className="font-medium text-gray-700">$1.39</span>
            </div>

            <button className="w-full py-3 font-medium text-white transition bg-green-600 rounded-md hover:bg-green-700">
              Connect Wallet
            </button>
          </>
        )}

        {activeTab === "Withdraw" && (
          <>
            <div>
              <label className="block mb-1 text-sm text-gray-600">
                Enter SD amount
              </label>
              <div className="relative">
                <input
                  type="number"
                  placeholder="0.0"
                  className="w-full px-4 text-lg text-gray-700 border border-green-600 rounded-xl py-7 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="absolute px-3 text-sm font-medium text-green-600 bg-gray-100 rounded-md right-2 top-2 bottom-2 hover:bg-gray-200">
                  MAX
                </button>
              </div>
            </div>

            <div className="flex justify-between text-sm text-gray-500">
              <span>Transaction cost</span>
              <span className="font-medium text-gray-700">$2.06</span>
            </div>

            <div className="flex items-center justify-between p-4 text-sm text-gray-500 bg-gray-100 rounded-md">
              <div>
                <p className="text-gray-600">Withdraw limit</p>
                <p className="font-medium text-gray-800">618.88K</p>
              </div>
              <div className="text-right">
                <p className="text-gray-600">
                  Unbonding period <span className="text-black">ℹ️</span>
                </p>
                <p className="font-medium text-gray-800">7 Days</p>
              </div>
            </div>

            <button className="w-full py-3 font-medium text-white transition bg-green-600 rounded-md hover:bg-green-700">
              Connect Wallet
            </button>
          </>
        )}

        {activeTab === "Claim" && (
          <div className="py-10 space-y-4 text-center">
            <p className="text-lg font-semibold text-gray-800">
              Wallet not connected
            </p>
            <p className="text-sm text-gray-500">
              Connect your wallet to view and claim your unstaked assets
            </p>
            <button className="w-full py-3 mt-4 font-medium text-white transition bg-green-600 rounded-md hover:bg-green-700">
              Connect Wallet
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UtilityPool;
