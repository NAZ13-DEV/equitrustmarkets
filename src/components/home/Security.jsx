import React from 'react';
import security from '../../img/security.png';

function Security() {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-14 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-2">Top security for your crypto</h2>
      <p className="text-gray-500 text-center mb-7 text-sm md:text-base max-w-xl">
        Audited and secured by leading blockchain experts to ensure the safety of your assets
      </p>
      {/* <button className="mb-10 px-8 py-2 border border-green-500 text-green-700 font-semibold rounded-lg hover:bg-green-50 transition">
        View audits
      </button> */}
      <div className="w-full flex justify-center">
        <img
          src={security}
          alt="Security"
          className="w-full max-w-lg md:max-w-2xl lg:max-w-3xl object-contain mx-auto"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default Security