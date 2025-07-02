import React from 'react';

const SDContractAddresses = () => {
  const icons = [
    {
      name: 'Ethereum',
      svg: (
        <svg viewBox="0 0 256 417" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
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
      name: 'BNB',
      svg: (
        <svg viewBox="0 0 2500 2500" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
          <path fill="#F3BA2F" d="M1250 0l271 271-271 271-271-271L1250 0zm0 978l271 271-271 271-271-271 271-271zm978-271l271 271-271 271-271-271 271-271zm-1956 0l271 271-271 271-271-271 271-271zm978 978l271 271-271 271-271-271 271-271z"/>
        </svg>
      ),
    },
    {
      name: 'Polygon',
      svg: (
        <svg viewBox="0 0 38 33" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.0536 1.24805L6.81358 5.49371C6.24812 5.8286 5.86181 6.37878 5.75293 6.99636V14.9854C5.86017 15.603 6.24553 16.1531 6.81358 16.4881L14.0536 20.7338C14.6186 21.0657 15.382 21.0657 15.947 20.7338L23.187 16.4881C23.7545 16.1539 24.14 15.6041 24.2474 14.9854V6.99636C24.1395 6.37878 23.7532 5.8286 23.1877 5.49371L15.947 1.24805C15.382 0.916154 14.6186 0.916154 14.0536 1.24805Z" fill="#8247E5"/>
        </svg>
      ),
    },
    {
      name: 'NEAR',
      svg: (
        <svg viewBox="0 0 100 100" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
          <path fill="#00C1DE" d="M40.7,41.4L67.5,72H59.2L32.5,41.4v35.2H20.5V25.5h11.9L67.5,56.2V25.5h11.9V72h-11L40.7,41.4z"/>
        </svg>
      ),
    },
    {
      name: 'Fantom',
      svg: (
        <svg viewBox="0 0 400 400" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
          <path fill="#1969FF" d="M200 0C89.7 0 0 89.7 0 200s89.7 200 200 200 200-89.7 200-200S310.3 0 200 0zm56 104l64 37-64 37-64-37 64-37zm-72 42l64 37v74l-64-37v-74zm-16 0v74l-64 37v-74l64-37zm-64 112l64-37 64 37-64 37-64-37zm144 0v-74l64-37v74l-64 37z"/>
        </svg>
      ),
    },
    {
      name: 'Cosmos',
      svg: (
        <svg viewBox="0 0 256 256" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
          <circle cx="128" cy="128" r="128" fill="url(#grad)" />
          <path d="M129 95l-34 59h68z" fill="#fff" />
          <defs>
            <radialGradient id="grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FF9A3E"/>
              <stop offset="100%" stopColor="#FF4F33"/>
            </radialGradient>
          </defs>
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow text-sm space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">SD contract addresses</h2>
      <div className="flex items-center gap-3 mt-1">
        {icons.map(({ name, svg }, i) => (
          <span
            key={i}
            className="w-10 h-10 rounded-full flex items-center justify-center "
            title={name}
          >
            {svg}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SDContractAddresses;
