/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import mobileBg from "../../img/herosm.png"; 
import desktopBg from "../../img/herolg.png"; 
import { Link } from "react-router-dom";

const DepositWithdrawHero = () => {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      {/* Background Images */}
      <picture>
        <source media="(min-width: 768px)" srcSet={desktopBg} />
        <img
          src={mobileBg}
          alt="Deposits & Withdrawals"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </picture>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-start px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-white max-w-md"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-snug mb-6">
            Deposits and <br /> withdrawals
          </h1>
          <div className="flex gap-4">
            <Link to={'/register'} className="bg-[#00ff37] text-black font-semibold px-5 py-2 rounded hover:bg-yellow-400 transition">
              Register
            </Link >
            <Link to={'/register'} className="bg-[#2b2e38] text-white font-semibold px-5 py-2 rounded hover:bg-[#3a3d47] transition">
              Try free demo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DepositWithdrawHero;
