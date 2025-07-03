import React from 'react';
import stake from '../../img/stake.png';
import receive from '../../img/recieve.png';
import defi from '../../img/defi.png';

const steps = [
  {
    img: stake,
    title: 'Open a Trading Account',
    desc: 'Register, verify your identity, and fund your account to get started.',
  },
  {
    img: receive,
    title: 'Execute Your First Trade',
    desc: 'Buy or sell any major, minor, or exotic forex pair with real-time execution.',
  },
  {
    img: defi,
    title: 'Monitor & Optimize Positions',
    desc: 'Track your trades, manage risk, and refine your strategy with advanced tools.',
  },
];

export default function Work() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-14">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
        How EquitrustMarkets Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div
            key={i}
            className="flex flex-col items-center rounded-2xl p-6 shadow-sm transition-all"
          >
            <img
              src={step.img}
              alt={step.title}
              className="object-contain mb-6 rounded-xl"
              loading="lazy"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
              {step.title}
            </h3>
            <p className="text-gray-600 text-center text-base">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
