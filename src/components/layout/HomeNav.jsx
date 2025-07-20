import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '../../img/stader-icon.svg';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const navLinks = [
  {
    label: 'Markets',
    dropdown: [
      { name: 'Forex Pairs', path: '/forex-pairs' },
      { name: 'Commodities', path: '/markets/commodities' },
      { name: 'Crypto CFDs', path: '/markets/crypto' },
    ],
  },
  {
    label: 'Analysis',
    dropdown: [
      { name: 'Technical', path: '/analysis/technical' },
      { name: 'Fundamental', path: '/analysis/fundamental' },
      { name: 'News', path: '/analysis/news' },
      { name: 'Calendar', path: '/analysis/calendar' },
    ],
  },
  {
    label: 'Trading',
    dropdown: [
      { name: 'Standard Account ', path: '/standard-accounts' },
      { name: 'Professional Account', path: '/professional-accounts' },
      { name: 'Demo Account', path: '/demo-accounts' },
    ],
  },
  {
    label: 'Education',
    dropdown: [
      { name: 'Deposit & Withdrawals', path: '/deposit-withdrawal' },
      { name: 'Order Execution', path: '/order-execution' },
    ],
  },
  {
    label: 'About',
    dropdown: [
      { name: 'About Us', path: '/about-us' },
      { name: 'Contact', path: '/contact-us' },
    ],
  },
];

const socials = [
  {
    name: 'Twitter',
    path: 'M22.46 6c-.77.35-1.6.59-2.46.69a4.26 4.26 0 001.88-2.35 8.38 8.38 0 01-2.68 1.02 4.22 4.22 0 00-7.21 3.85 12 12 0 01-8.7-4.41 4.22 4.22 0 001.3 5.63 4.19 4.19 0 01-1.91-.53v.05a4.22 4.22 0 003.39 4.13 4.2 4.2 0 01-1.9.07 4.22 4.22 0 003.94 2.93A8.47 8.47 0 012 18.57 11.93 11.93 0 008.29 20c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.36 8.36 0 0022.46 6z',
  },
  {
    name: 'Discord',
    path: 'M20.317 4.369a19.791 19.791 0 00-4.885-1.515.07.07 0 00-.074.035c-.211.375-.444.864-.608 1.248a18.262 18.262 0 00-5.487 0 12.51 12.51 0 00-.622-1.248.07.07 0 00-.073-.035 19.736 19.736 0 00-4.886 1.515.064.064 0 00-.03.027C2.358 8.021 1.784 11.585 2.102 15.093a.078.078 0 00.028.051 19.996 19.996 0 006.005 3.048.07.07 0 00.076-.027c.46-.63.873-1.295 1.226-1.994a.07.07 0 00-.038-.095c-.662-.25-1.293-.55-1.885-.895a.07.07 0 01-.007-.118c.126-.094.252-.19.371-.287a.07.07 0 01.073-.01c3.927 1.793 8.18 1.793 12.061 0a.07.07 0 01.074.009c.12.098.246.194.372.288a.07.07 0 01-.006.118 12.298 12.298 0 01-1.886.894.07.07 0 00-.038.096c.36.698.773 1.362 1.225 1.993a.07.07 0 00.076.028 19.888 19.888 0 006.005-3.048.077.077 0 00.028-.05c.5-5.177-.838-9.694-3.549-10.697a.06.06 0 00-.03-.03zM8.02 13.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.213 0 2.177 1.096 2.157 2.418 0 1.334-.955 2.419-2.157 2.419zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.213 0 2.177 1.096 2.157 2.418 0 1.334-.944 2.419-2.157 2.419z',
  },
  {
    name: 'Telegram',
    path: 'M21.05 2.29a1.5 1.5 0 00-1.6-.13L3.5 10.13a1.5 1.5 0 00.13 2.7l4.2 1.4 1.4 4.2a1.5 1.5 0 002.7.13l7.97-15.95a1.5 1.5 0 00-.13-1.6z',
  },
  {
    name: 'Reddit',
    path: 'M20 12c0-4.418-3.582-8-8-8s-8 3.582-8 8 3.582 8 8 8 8-3.582 8-8zm-11.25.75a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zm6.5 0a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zm-5.95 3.55a.75.75 0 111.15-.95 2.5 2.5 0 003.1 0 .75.75 0 111.15.95 4 4 0 01-5.4 0z',
  },
];

export default function HomeNav() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setSidebarOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const toggleDropdown = (idx) => {
    setOpenDropdown(openDropdown === idx ? null : idx);
  };

  const handleLinkClick = (path) => {
    navigate(path);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden lg:flex justify-between items-center px-6 py-4 bg-white shadow-sm w-full">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-2">
            <img src={Logo} alt="Logo" className="w-8 h-8" />
            <span className="text-2xl font-bold text-gray-800">EquitrustMarkets</span>
          </Link>
          <div className="flex gap-6">
            {navLinks.map((link, idx) => (
              <div key={link.label} className="relative">
                <button
                  onClick={() => toggleDropdown(idx)}
                  className="flex items-center gap-1 font-medium text-gray-800 hover:text-green-600"
                >
                  {link.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${openDropdown === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                {openDropdown === idx && (
                  <div className="absolute left-0 top-full mt-2 border-1 bg-white  shadow-lg border-green-600 rounded-md z-20 px-4">
                    {link.dropdown.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleLinkClick(item.path)}
                        className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-green-50 hover:text-green-600"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4 ml-6">
            {socials.map((s) => (
              <div key={s.name} className="p-3 rounded-full bg-green-100">
                <svg
                  className="w-5 h-5 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path d={s.path} />
                </svg>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/register"
            className="px-6 py-2 font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="px-6 py-2 font-semibold text-green-600 border border-green-500 rounded-lg hover:bg-green-50"
          >
            Login
          </Link>
        </div>
      </nav>

      {/* Mobile / Tablet Navbar */}
      <nav className="lg:hidden w-full bg-white shadow-md px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={Logo} alt="Logo" className="w-8 h-8" />
            <span className="text-xl font-bold text-gray-800">EquitrustMarkets</span>
          </div>
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-md bg-green-100 text-green-700"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {sidebarOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex">
            <div className="bg-[#142528] text-white w-4/5 sm:w-2/3 md:w-1/3 p-6 overflow-y-auto animate-slide-in">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <img src={Logo} alt="Logo" className="w-8 h-8" />
                  <span className="text-lg font-bold">EquitrustMarkets</span>
                </div>
                <button onClick={() => setSidebarOpen(false)} className="text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {navLinks.map((link, idx) => (
                  <div key={link.label}>
                    <button
                      className="flex items-center justify-between w-full text-left py-2 px-2 font-semibold hover:text-green-400"
                      onClick={() => toggleDropdown(idx)}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === idx ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === idx && (
                      <div className="mt-1 ml-4 border-l border-green-700 pl-4">
                        {link.dropdown.map((item) => (
                          <button
                            key={item.name}
                            onClick={() => handleLinkClick(item.path)}
                            className="block py-1 text-left text-sm text-gray-200 hover:text-green-400"
                          >
                            {item.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="mt-6 flex flex-col gap-2">
                  <button
                    onClick={() => handleLinkClick('/register')}
                    className="bg-green-600 hover:bg-green-700 text-white py-2 rounded text-center font-bold"
                  >
                    Register
                  </button>
                  <button
                    onClick={() => handleLinkClick('/login')}
                    className="border border-green-600 text-green-400 hover:bg-green-800 py-2 rounded text-center font-bold"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <style>{`
          @keyframes slide-in {
            from { transform: translateX(-100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          .animate-slide-in {
            animation: slide-in 0.3s ease forwards;
          }
        `}</style>
      </nav>
    </>
  );
}
