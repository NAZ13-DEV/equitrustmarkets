import React from "react";
import { MousePointerClick, Link as LinkIcon, BarChart2 } from "lucide-react";

const features = [
  {
    title: "Trade as fast as you can click",
    description:
      "Open, close, and modify orders in milliseconds with reliable market execution.",
    icon: <MousePointerClick className="w-6 h-6 text-[#142528]" />,
  },
  {
    title: "Enjoy full transparency",
    description:
      "Backtest your strategy with our public tick history or double-check your strategy’s performance against our pricing.",
    icon: <LinkIcon className="w-6 h-6 text-[#142528]" />,
  },
  {
    title: "Execute at the price you want",
    description:
      "Capture every pip possible, with reduced market execution slippage and low requotes on instant execution.",
    icon: <BarChart2 className="w-6 h-6 text-[#142528]" />,
  },
];

const OrderExecutionFeatures = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#142528] mb-2">
          Order execution process at EquitrustMarkets
        </h2>
        <p className="text-[#3f6870] mb-12 text-sm sm:text-base">
          Here’s why over 1 million active traders choose to execute their trading strategies at EquitrustMarkets.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {features.map((item, idx) => (
            <div key={idx} className="px-6 py-8 flex flex-col items-center text-center">
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-semibold text-[#142528] text-sm sm:text-base mb-2">
                {item.title}
              </h3>
              <p className="text-[#3f6870] text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrderExecutionFeatures;
