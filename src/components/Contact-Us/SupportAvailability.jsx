/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const supportData = [
  { status: "Online 24/7", color: "green", languages: "English, Thai, Chinese, Vietnamese, Arabic, Bengali, Hindi, Urdu" },
  { status: "In 4 hours", color: "red", languages: "French" },
  { status: "In 4 hours", color: "red", languages: "Swahili" },
  { status: "Online", color: "green", languages: "Indonesian" },
  { status: "In 48 hours", color: "red", languages: "Korean" },
  { status: "In 14 hours", color: "red", languages: "Portuguese" },
  { status: "In 6 hours", color: "red", languages: "Spanish" },
];

const SupportAvailability = () => {
  return (
    <>
      <style>{`
        @keyframes pulse-status {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(7, 166, 88, 0.7); }
          70% { transform: scale(1.2); box-shadow: 0 0 0 6px rgba(7, 166, 88, 0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(7, 166, 88, 0); }
        }
        .animate-pulse-status {
          animation: pulse-status 2s ease-in-out infinite;
        }
      `}</style>

      <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-16">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-[#142528] mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Support availability
        </motion.h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-[#142528]">
            <thead>
              <tr className="border-b border-gray-200 text-[#3f6870]">
                <th className="py-3 px-2 font-medium">Availability</th>
                <th className="py-3 px-2 font-medium">Language</th>
              </tr>
            </thead>
            <tbody>
              {supportData.map((item, idx) => (
                <tr
                  key={idx}
                  className="border-b border-gray-100 hover:bg-[#f4fbf7] transition"
                >
                  <td className="py-4 px-2 flex items-center gap-2 whitespace-nowrap">
                    <span
                      className={`h-2.5 w-2.5 rounded-full mt-[2px] ${
                        item.color === "green" ? "bg-[#07A658] animate-pulse-status" : "bg-red-500"
                      }`}
                    ></span>
                    <span>{item.status}</span>
                  </td>
                  <td className="py-4 px-2 whitespace-normal break-words max-w-md">{item.languages}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default SupportAvailability;
