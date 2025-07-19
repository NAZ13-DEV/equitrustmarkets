import React from "react";
import { FaRegQuestionCircle, FaRegFrown } from "react-icons/fa";

const GeneralInquiries = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center text-[#142528] mb-10">
        General inquiries
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Help Center */}
        <div className="bg-[#f9fafa] rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <div className="flex items-start gap-4">
            <FaRegQuestionCircle size={24} className="mt-1 text-[#142528]" />
            <div>
              <h3 className="text-base font-semibold text-[#142528] mb-1">
                Help Center
              </h3>
              <p className="text-sm text-[#3f6870]">
                Find in-depth information about trading with Equitrustmarkets at the{" "}
                <a
                  href="#"
                  className="text-[#2a72de] underline hover:text-[#1a5bc2]"
                >
                  Equitrustmarkets Help Center
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Open a Ticket */}
        <div className="bg-[#f9fafa] rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <div className="flex items-start gap-4">
            <FaRegFrown size={24} className="mt-1 text-[#142528]" />
            <div>
              <h3 className="text-base font-semibold text-[#142528] mb-1">
                Open a ticket
              </h3>
              <p className="text-sm text-[#3f6870]">
                Already registered? Log in to your Personal Area, go to the{" "}
                <a
                  href="#"
                  className="text-[#2a72de] underline hover:text-[#1a5bc2]"
                >
                  Support Hub
                </a>
                , and submit a ticket there. We’ll get back to you in 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralInquiries;
