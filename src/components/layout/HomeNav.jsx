import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '../../img/stader-icon.svg';
import { Link } from 'react-router-dom';

const socials = [
  {
    name: 'Twitter', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.09 9.09 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.4 4.07 3.67 1.64.9c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.94 3.65A4.48 4.48 0 01.96 6v.06c0 2.13 1.52 3.91 3.54 4.31-.37.1-.76.16-1.16.16-.28 0-.55-.03-.81-.08.55 1.72 2.16 2.97 4.07 3A9.05 9.05 0 010 19.54a12.8 12.8 0 006.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.01-.58A9.22 9.22 0 0023 3z" /></svg>
    )
  },
  {
    name: 'Telegram', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M21.05 2.29a1.5 1.5 0 00-1.6-.13L3.5 10.13a1.5 1.5 0 00.13 2.7l4.2 1.4 1.4 4.2a1.5 1.5 0 002.7.13l7.97-15.95a1.5 1.5 0 00-.13-1.6z" /></svg>
    )
  },
  {
    name: 'Reddit', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><circle cx="8.5" cy="10.5" r="1.5" /><circle cx="15.5" cy="10.5" r="1.5" /><path d="M12 17c2.5 0 4.5-1.5 4.5-3.5h-9C7.5 15.5 9.5 17 12 17z" /></svg>
    )
  },
];

const navLinks = [
  { label: 'Markets', dropdown: ['Forex Pairs', 'Indices', 'Commodities', 'Crypto CFDs'] },
  { label: 'Analysis', dropdown: ['Technical', 'Fundamental', 'News', 'Calendar'] },
  { label: 'Brokers', dropdown: ['Top Brokers', 'Compare', 'Reviews'] },
  { label: 'Education', dropdown: ['Courses', 'Glossary', 'Strategies'] },
  { label: 'About', dropdown: ['Company', 'Contact', 'Careers'] },
];

export default function HomeNav() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="items-center justify-between hidden w-full px-6 py-4 bg-white shadow-sm lg:flex">
        <div className="flex items-center justify-between w-full gap-10 mx-auto max-w-7xl">
          <div className="flex items-center gap-10">
            <img src={Logo} alt="Logo" className="w-8 h-8" />
            <span className="text-2xl font-bold text-gray-800">EquitrustMarkets</span>
            <div className="flex gap-6 ml-8">
              {navLinks.map((link, idx) => (
                <div key={link.label} className="relative group">
                  <button
                    className="flex items-center gap-1 font-medium text-gray-800 hover:text-green-600 focus:outline-none"
                    onMouseEnter={() => setOpenDropdown(idx)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {link.label}
                    {link.dropdown && <ChevronDown className="w-4 h-4" />}
                  </button>
                  {openDropdown === idx && link.dropdown && (
                    <div
                      className="absolute left-0 z-20 w-40 py-2 mt-2 bg-white rounded-lg shadow-lg"
                      onMouseEnter={() => setOpenDropdown(idx)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {link.dropdown.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <button key={s.name} className="flex items-center justify-center w-10 h-10 rounded-full bg-green-50 hover:bg-green-100">
                {s.icon}
              </button>
            ))}
            <Link to={'/register'} className="px-6 py-2 ml-4 font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600">Register</Link>
            <Link to={'/login'} className="px-6 py-2 ml-2 font-semibold text-green-600 border border-green-500 rounded-lg hover:bg-green-50">Login</Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="flex items-center w-full px-4 py-3 bg-white shadow-sm lg:hidden">
        <div className="flex items-center gap-4">
          <button onClick={() => setSidebarOpen(true)} className="p-2 transition rounded-lg hover:bg-green-50">
            <Menu className="text-green-600 w-7 h-7" />
          </button>
          <img src={Logo} alt="Logo" className="w-8 h-8" />
          <span className="ml-1 text-xl font-semibold tracking-tight text-gray-900">EquitrustMarkets</span>
        </div>
      </nav>

      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          <aside
            className="relative w-full max-w-full bg-[#142528] text-white h-full flex flex-col p-6 animate-slide-down shadow-xl z-50"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <img src={Logo} alt="Logo" className="w-8 h-8" />
                <span className="text-xl font-extrabold tracking-tight text-white">EquitrustMarkets</span>
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 transition rounded-lg hover:bg-green-100"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="flex flex-col gap-2 mb-8 overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <details className="group">
                    <summary className="flex items-center justify-between w-full px-2 py-3 text-lg font-semibold text-white transition-colors cursor-pointer hover:text-green-400">
                      {link.label}
                      {link.dropdown && (
                        <ChevronDown className="w-5 h-5 text-white transition-transform group-open:text-green-400 group-open:rotate-180" />
                      )}
                    </summary>
                    {link.dropdown && (
                      <div className="flex flex-col gap-1 mt-1 ml-4 animate-fade-in">
                        {link.dropdown.map((item) => (
                          <a
                            key={item}
                            href="#"
                            className="block px-2 py-1 text-base text-gray-200 transition hover:text-green-400"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    )}
                  </details>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <Link to={'/register'} className="w-full px-6 py-3 font-bold text-center text-white transition rounded-full shadow-md bg-gradient-to-r from-green-500 to-green-700 hover:scale-105">Register</Link>
              <Link to={'/login'} className="w-full px-6 py-3 font-bold text-center text-green-500 transition border-2 border-green-500 rounded-full shadow-md hover:bg-green-50">Login</Link>
            </div>
          </aside>

          <style>{`
            @keyframes slide-down {
              0% { transform: translateY(-100%); opacity: 0; }
              100% { transform: translateY(0); opacity: 1; }
            }
            .animate-slide-down {
              animation: slide-down 0.45s cubic-bezier(0.4,0,0.2,1) both;
            }
            @keyframes fade-in {
              0% { opacity: 0; transform: translateY(10px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in {
              animation: fade-in 0.3s cubic-bezier(0.4,0,0.2,1) both;
            }
          `}</style>
        </div>
      )}
    </>
  );
}
