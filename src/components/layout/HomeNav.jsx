import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import viteLogo from '../../../public/vite.svg';
import Logo from '../../img/stader-icon.svg';

// Social icons (use Lucide or SVGs as placeholders)
const socials = [
  { name: 'Twitter', icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.09 9.09 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.4 4.07 3.67 1.64.9c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.94 3.65A4.48 4.48 0 01.96 6v.06c0 2.13 1.52 3.91 3.54 4.31-.37.1-.76.16-1.16.16-.28 0-.55-.03-.81-.08.55 1.72 2.16 2.97 4.07 3A9.05 9.05 0 010 19.54a12.8 12.8 0 006.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.01-.58A9.22 9.22 0 0023 3z" /></svg>
  ) },
//   { name: 'Discord', icon: (
//     <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20.317 4.369A19.791 19.791 0 0016.885 3.2a.486.486 0 00-.522.243c-.724 1.25-1.447 2.5-2.17 3.75a.486.486 0 00.13.617c.36.27.72.54 1.08.81a.486.486 0 00.617-.13c.724-1.25 1.447-2.5 2.17-3.75a.486.486 0 00-.13-.617z" /></svg>
//   ) },
  { name: 'Telegram', icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21.05 2.29a1.5 1.5 0 00-1.6-.13L3.5 10.13a1.5 1.5 0 00.13 2.7l4.2 1.4 1.4 4.2a1.5 1.5 0 002.7.13l7.97-15.95a1.5 1.5 0 00-.13-1.6z" /></svg>
  ) },
  { name: 'Reddit', icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><circle cx="8.5" cy="10.5" r="1.5" /><circle cx="15.5" cy="10.5" r="1.5" /><path d="M12 17c2.5 0 4.5-1.5 4.5-3.5h-9C7.5 15.5 9.5 17 12 17z" /></svg>
  ) },
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
      <nav className="hidden lg:flex w-full bg-white px-6 py-3 items-center justify-between shadow-sm">
        {/* Logo & Nav */}
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
                {/* Dropdown */}
                {openDropdown === idx && link.dropdown && (
                  <div
                    className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2 z-20"
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
        {/* Socials & Auth */}
        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <button key={s.name} className="w-10 h-10 flex items-center justify-center rounded-full bg-green-50 hover:bg-green-100">
              {s.icon}
            </button>
          ))}
          <button className="ml-4 px-6 py-2 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600">Register</button>
          <button className="ml-2 px-6 py-2 rounded-lg border border-green-500 text-green-600 font-semibold hover:bg-green-50">Login</button>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="flex lg:hidden w-full bg-white px-4 py-3 items-center justify-between shadow-sm bg-[#142528]">
        <div className="flex items-center gap-2 w-full justify-center">
          <button onClick={() => setSidebarOpen(true)} className="p-2 rounded-lg hover:bg-green-50 transition absolute left-2">
            <Menu className="w-7 h-7 text-green-600" />
          </button>
          <img src={Logo} alt="Logo" className="w-8 h-8" />
          <span className="text-xl font-bold tracking-tight text-gray-900 ml-1">EquitrustMarkets</span>
        </div>
      </nav>

      {/* Sidebar for mobile & md */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex ">
          {/* Overlay: clicking this closes the sidebar */}
          {/* <div
            className="fixed inset-0 z-40 bg-black bg-opacity-30 cursor-pointer"
            onClick={() => setSidebarOpen(false)}
          /> */}
          {/* Sidebar: clicking inside does NOT close */}
          <aside
            className="relative w-full max-w-full bg-[#142528] text-white h-full flex flex-col p-6 animate-slide-down shadow-xl z-50"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <img src={Logo} alt="Logo" className="w-8 h-8" />
                <span className="text-xl font-extrabold tracking-tight">EquitrustMarkets</span>
              </div>
              <button onClick={() => setSidebarOpen(false)} className="p-2 rounded-lg hover:bg-green-100 transition">
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
            {/* Nav Links */}
            <div className="flex flex-col gap-2 mb-8">
              {navLinks.map((link) => (
                <div key={link.label} className="mb-2">
                  <details className="group">
                    <summary className="flex items-center justify-between w-full py-3 px-2 text-lg font-semibold cursor-pointer hover:bg-green-50 rounded-lg group-open:bg-green-50 transition">
                      {link.label}
                      {link.dropdown && <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />}
                    </summary>
                    {link.dropdown && (
                      <div className="ml-4 mt-1 flex flex-col gap-1 animate-fade-in">
                        {link.dropdown.map((item) => (
                          <a key={item} href="#" className="block px-2 py-1 text-gray-200 hover:text-green-400 text-base rounded transition">
                            {item}
                          </a>
                        ))}
                      </div>
                    )}
                  </details>
                </div>
              ))}
            </div>
            {/* Auth Buttons */}
            <div className="flex flex-col gap-3 pt-2">
              <button className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-700 text-white font-bold shadow-md hover:scale-105 transition">Register</button>
              <button className="w-full px-6 py-3 rounded-full border-2 border-green-500 text-green-500 font-bold shadow-md hover:bg-green-50 transition">Login</button>
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
