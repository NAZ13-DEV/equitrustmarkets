import React from 'react';
import { Twitter, Send, Gamepad2, ChevronRight } from 'lucide-react';
import logo from '../../img/fav.png';
import sdLogo from '../../img/sd_light.svg';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
  const networks = [
    {
      name: 'Ethereum',
      svg: (
        <svg className="w-5 h-5" viewBox="0 0 256 417" xmlns="http://www.w3.org/2000/svg">
          <path fill="#343434" d="M127.6 0L124 12.2v263.5l3.6 3.6 127.6-75.5z" />
          <path fill="#8C8C8C" d="M127.6 0L0 203.8l127.6 75.5V142.1z" />
          <path fill="#3C3C3B" d="M127.6 291.3l-2 2.5v120.1l2 5.8 128-180.2z" />
          <path fill="#8C8C8C" d="M127.6 419.7V291.3L0 239z" />
          <path fill="#141414" d="M127.6 279.3l127.6-75.5-127.6-59.2z" />
          <path fill="#393939" d="M0 203.8l127.6 75.5v-134.7z" />
        </svg>
      ),
    },
    {
      name: 'Polygon',
      svg: (
        <svg className="w-5 h-5" viewBox="0 0 38 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.0536 1.24805L6.81358 5.49371C6.24812 5.8286 5.86181 6.37878 5.75293 6.99636V14.9854C5.86017 15.603 6.24553 16.1531 6.81358 16.4881L14.0536 20.7338C14.6186 21.0657 15.382 21.0657 15.947 20.7338L23.187 16.4881C23.7545 16.1539 24.14 15.6041 24.2474 14.9854V6.99636C24.1395 6.37878 23.7532 5.8286 23.1877 5.49371L15.947 1.24805C15.382 0.916154 14.6186 0.916154 14.0536 1.24805Z" fill="#8247E5"/>
        </svg>
      ),
    },
    {
      name: 'BNB',
      svg: (
        <svg className="w-5 h-5" viewBox="0 0 2500 2500" xmlns="http://www.w3.org/2000/svg">
          <path fill="#F3BA2F" d="M1250 0l271 271-271 271-271-271L1250 0zm0 978l271 271-271 271-271-271 271-271zm978-271l271 271-271 271-271-271 271-271zm-1956 0l271 271-271 271-271-271 271-271zm978 978l271 271-271 271-271-271 271-271z"/>
        </svg>
      ),
    },
    {
      name: 'Hedera',
      svg: (
        <svg className="w-5 h-5" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" stroke="#000" strokeWidth="4" />
          <path d="M35 25v50M65 25v50M35 50h30" stroke="#000" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      ),
    },
  ];

  return (
    <div
      className={`fixed inset-0 bg-white lg:static lg:bg-transparent z-50 lg:z-auto transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 w-full lg:w-72 overflow-y-auto h-screen lg:h-auto border-r lg:border-r-0`}
    >
      <div className="flex flex-col justify-between h-full p-4">
        {/* Header */}
        <div>
          {/* Mobile Close */}
          <div className="flex items-center justify-between mb-4 lg:hidden">
            {/* <h2 className="text-xl font-bold">Optima Trade Market</h2> */}
            <h1></h1>
            <button onClick={onClose} className="text-2xl">&times;</button>
          </div>

          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <img src={logo} alt="logo" className="w-6 h-6" />
            <span className="text-2xl font-semibold text-gray-800">Optima Trade Market</span>
          </div>

          {/* SD Navigation Card */}
          <div className="p-4 mb-6 space-y-2 bg-white shadow-sm rounded-xl">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <img src={sdLogo} alt="sd" className="w-5 h-5" />
              <span>SD</span>
            </div>

            <div className="mt-2 space-y-2">
              <Link to={"/"} className="block px-3 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-md">
                SD Utility Pool
              </Link>
              <Link to={"/defi"} className="block px-3 py-2 text-sm text-gray-700 hover:text-green-600">
                DeFi
              </Link>
              <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:text-green-600">
                Bridge
              </a>
              <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:text-green-600">
                Community Forum
              </a>
            </div>
          </div>

          {/* Explore Liquid Staking */}
          <div>
            <p className="text-[11px] text-gray-500 font-semibold tracking-wide mb-3">
              EXPLORE LIQUID STAKING
            </p>
            <div className="space-y-3 text-sm text-gray-700">
              {networks.map(({ name, svg }) => (
                <a
                  href="#"
                  key={name}
                  className="flex items-center justify-between hover:text-green-600"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5">{svg}</span>
                    <span>{name}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-green-500" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Join Community */}
        <div className="mt-10">
          <div className="flex items-center justify-center gap-6 p-4 bg-white shadow-sm rounded-xl">
            <Twitter className="w-5 h-5 text-gray-600 cursor-pointer hover:text-green-600" />
            <Send className="w-5 h-5 text-gray-600 cursor-pointer hover:text-green-600" />
            <Gamepad2 className="w-5 h-5 text-gray-600 cursor-pointer hover:text-green-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
