import React from "react";
import phoneImage from "../../img/phoneimage2.jpg"; // adjust path if needed

const ExecutionTypeSection = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#142528] mb-3">
          Choose your preferred execution type
        </h2>
        <p className="text-[#3f6870] text-sm sm:text-base max-w-xl mx-auto mb-12">
          Exness offers two types of order execution, both built on sophisticated algorithms to
          provide a seamless experience.
        </p>

        {/* Content Row */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          {/* Left Text Content */}
          <div className="text-left max-w-lg">
            <h3 className="text-lg font-semibold text-[#142528] mb-2">
              Instant execution
            </h3>
            <p className="text-[#3f6870] text-sm mb-6 leading-relaxed">
              Open trades at the price you request or approve, or not at all. This is ideal for traders
              whose strategies revolve around price certainty, and who have strict risk management parameters.
            </p>

            <h3 className="text-lg font-semibold text-[#142528] mb-2">
              Instant execution at Exness
            </h3>
            <p className="text-[#3f6870] text-sm leading-relaxed">
              Our complex algorithms are designed to provide stable pricing so you can experience a
              smooth execution process with the lowest requote rate possible.
            </p>
          </div>

          {/* Right Image */}
          <div className="bg-[#dbe2e7] rounded-xl p-4">
            <img
              src={phoneImage}
              alt="Instant Execution"
              className="w-full max-w-xs object-contain rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutionTypeSection;
