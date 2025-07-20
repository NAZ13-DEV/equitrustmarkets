import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/stader-icon.svg';


const icons = {
  Twitter: (
    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.633 7.997c.013.175.013.351.013.526 0 5.376-4.092 11.575-11.575 11.575-2.3 0-4.437-.675-6.236-1.837.325.038.637.05.975.05 1.912 0 3.673-.65 5.077-1.75a4.079 4.079 0 01-3.808-2.825c.25.038.487.063.75.063.35 0 .7-.05 1.025-.138a4.072 4.072 0 01-3.267-3.987v-.05c.538.3 1.15.475 1.8.5a4.072 4.072 0 01-1.812-3.4c0-.762.2-1.45.55-2.05a11.575 11.575 0 008.4 4.263 4.07 4.07 0 017.05-2.775 8.062 8.062 0 002.575-.975 4.052 4.052 0 01-1.788 2.238 8.12 8.12 0 002.337-.625 8.773 8.773 0 01-2.038 2.113z" />
    </svg>
  ),
  Github: (
    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0a12 12 0 00-3.79 23.38c.6.113.82-.263.82-.587 0-.288-.013-1.238-.013-2.238-3.013.65-3.65-1.45-3.65-1.45-.537-1.363-1.312-1.725-1.312-1.725-1.075-.737.087-.725.087-.725 1.2.087 1.838 1.238 1.838 1.238 1.063 1.825 2.788 1.3 3.475.988.1-.775.412-1.3.75-1.6-2.4-.275-4.925-1.2-4.925-5.313 0-1.175.425-2.138 1.138-2.888-.112-.288-.488-1.45.113-3.025 0 0 .9-.288 2.95 1.112A10.3 10.3 0 0112 6.663c.912.012 1.825.125 2.675.363 2.038-1.4 2.937-1.112 2.937-1.112.6 1.575.225 2.737.112 3.025.713.75 1.137 1.712 1.137 2.888 0 4.125-2.538 5.025-4.95 5.287.425.362.8 1.087.8 2.212 0 1.6-.012 2.887-.012 3.275 0 .325.213.7.825.587A12.013 12.013 0 0012 0z" />
    </svg>
  ),
  Telegram: (
    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M9.996 15.134l-.4 4.25c.575 0 .825-.25 1.125-.55l2.7-2.538 5.6 4.112c1.025.575 1.75.263 2.025-.95l3.65-16.725c.35-1.575-.55-2.212-1.8-1.75L1.487 9.587c-1.55.6-1.537 1.475-.262 1.862l4.512 1.412 10.487-6.6c.487-.3.938-.137.575.163l-8.5 7.575z" />
    </svg>
  ),
  Reddit: (
    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.26 10.89a2.6 2.6 0 00-4.31-2.55c-1.33-.82-3.13-1.33-5.19-1.33s-3.86.51-5.19 1.33a2.6 2.6 0 00-4.31 2.55c0 .68.26 1.31.69 1.76a6.88 6.88 0 00-.39 2.21c0 3.63 4.03 6.58 9 6.58s9-2.95 9-6.58c0-.78-.14-1.53-.39-2.21.43-.45.69-1.08.69-1.76zM6.74 13.14c0-.8.66-1.45 1.48-1.45.81 0 1.47.65 1.47 1.45 0 .8-.66 1.45-1.47 1.45-.82 0-1.48-.65-1.48-1.45zm7.26 4.11c-1.02 1.01-3.07 1.04-3.08 1.04h-.01c-.01 0-2.05-.03-3.07-1.04a.5.5 0 01.7-.71c.66.66 1.84.73 2.37.73h.01c.52 0 1.7-.07 2.36-.73a.5.5 0 01.7.71zm-.25-2.66c-.81 0-1.47-.65-1.47-1.45 0-.8.66-1.45 1.47-1.45.82 0 1.48.65 1.48 1.45 0 .8-.66 1.45-1.48 1.45z" />
    </svg>
  ),
};

const navLinks = [
  {
    label: 'Markets',
    dropdown: [
      { name: 'Forex CFD', path: '/forex-pairs' },
      { name: 'Stock CFD', path: '/stock' },
      { name: 'Crypto CFD', path: '/crypto' },
    ],
  },
  {
    label: 'Analysis',
    dropdown: [
      { name: 'Tools', path: '/tools' },
      { name: 'Currency Converter', path: '/currency-converter' },
      { name: 'Calculator', path: '/calculator' },
    ],
  },
  {
    label: 'Trading',
    dropdown: [
      { name: 'Standard Account', path: '/standard-accounts' },
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

const Footer = () => {
  return (
    <footer className="bg-[#0B1D1E] text-white py-12 px-4">
      <div className="grid grid-cols-1 gap-8 mx-auto max-w-7xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        <div className="flex flex-col items-start gap-4">
          <img src={Logo} alt="Logo" className="w-8 h-8" />
          <div className="flex items-center gap-3 mt-2">
            {Object.entries(icons).map(([name, icon]) => (
              <button
                key={name}
                className="p-2 bg-[#112626] rounded-full hover:bg-[#1a2f2f] transition"
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        {navLinks.map((section) => (
          <div key={section.label}>
            <h4 className="mb-3 text-sm font-bold">{section.label}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {section.dropdown.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:underline">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-between px-4 mt-12 text-xs text-gray-400 md:flex-row">
        <p>© Copyright 2025 Equitrustmarkets. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link to="/terms" className="hover:underline">Terms of service</Link>
          <Link to="/privacy" className="hover:underline">Privacy policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
