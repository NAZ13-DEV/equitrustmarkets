import React from "react";
import backgroundImage from "../../img/bgimg.jpg";

const AboutEquitrust = () => {
  return (
    <section className="relative w-full min-h-[500px] bg-white ">
      {/* Background Image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-right lg:bg-[center_top] brightness-[.9]"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-white/90 via-white/80 to-white/60 lg:to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-start justify-between">
        <div className="max-w-xl text-left">
          <h2 className="text-4xl font-bold text-[#142528] mb-4">
            This is EquitrustMarkets
          </h2>
          <p className="text-[#3f6870] text-base leading-relaxed">
            EquitrustMarkets is a multi-asset, tech-focused brokerage delivering precision and performance through algorithmic trading solutions. We empower traders with cutting-edge tools, data transparency, and seamless execution under any market condition.
          </p>
          {/* <p className="text-[#3f6870] text-base mt-4 leading-relaxed">
            Built on a foundation of trust and innovation, our platform ensures lightning-fast trade processing, minimal slippage, and access to deep liquidity pools — all designed to give your strategy the edge it needs in today's dynamic markets.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default AboutEquitrust;
