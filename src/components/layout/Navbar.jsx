import React from 'react';
import { Menu, MoreVertical } from 'lucide-react';
import Optima Trade MarketLogo from '../../img/Optima Trade Market-icon.png';

const Navbar = ({ toggleSidebar }) => {
  return (
    <header className="w-full bg-[#F8F9FB] px-4 py-2 flex justify-between items-center">
      {/* Left Controls: Hamburger + Logo */}
      <div className="flex items-center gap-3">
        {/* Hamburger Menu - only on mobile */}
        <button onClick={toggleSidebar} className="p-1 lg:hidden">
          <Menu className="w-5 h-5 text-gray-700" />
        </button>

        {/* Logo - show on sm and md only */}
        <img
          src={Optima Trade MarketLogo}
          alt="Optima Trade Market Logo"
          className="hidden w-5   sm:block lg:hidden"
        />
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-2 mr-0 lg:mr-16">
        <button className="px-4 py-4 text-sm font-semibold text-green-600 transition-all bg-white rounded-lg lg:px-14 sm:text-xs md:text-sm md:px-5 whitespace-nowrap hover:bg-green-50">
          Connect wallet
        </button>
        <button className="flex items-center justify-center w-10 h-10 py-4 bg-white rounded-xl hover:bg-gray-100">
          <MoreVertical className="w-4 h-4 text-black" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
