import React, { useState } from 'react';
import cabbage from '../../img/cabbage.png';
import deeper from '../../img/deeper.png';
import liquidity from '../../img/liquidity.png';

const blogPosts = [
  {
    image: cabbage,
    title: 'The Cabbage Roadmap: A Leaf by Leaf Recipe',
    time: '4 mins read / updated on Mon Jan 27 2025',
  },
  {
    image: liquidity,
    title: 'Stader Labs: Building liquidity across chains',
    time: '4 mins read / updated on Wed Jan 22 2025',
  },
  {
    image: deeper,
    title: 'Diving Deeper into SD Tokenomics',
    time: '5 mins read / updated on Tue Jan 14 2025',
  },
];

export default function Update() {
  const [activeIndex, setActiveIndex] = useState(0);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10">
        Stay updated with our blog
      </h2>

      {/* Desktop layout */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8 animate-fade-in-up">
        {blogPosts.map((post, idx) => (
          <div key={idx} className="bg-[#E6F7F0] rounded-xl overflow-hidden shadow-sm transition hover:shadow-lg hover:-translate-y-1 duration-300">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-base font-semibold text-gray-900 mb-2">{post.title}</h3>
              <p className="text-xs text-gray-500">{post.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile carousel */}
      <div className="md:hidden relative flex flex-col items-center mb-8">
        <div className="w-full animate-slide-in">
          <div className="bg-[#E6F7F0] rounded-xl overflow-hidden shadow-md">
            <img src={blogPosts[activeIndex].image} alt={blogPosts[activeIndex].title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-base font-semibold text-gray-900 mb-2">{blogPosts[activeIndex].title}</h3>
              <p className="text-xs text-gray-500">{blogPosts[activeIndex].time}</p>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex gap-2 mt-4">
          {blogPosts.map((_, i) => (
            <button
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === activeIndex ? 'bg-green-600' : 'bg-green-300'
              }`}
              onClick={() => handleDotClick(i)}
            />
          ))}
        </div>
      </div>

      {/* View more button */}
      <div className="flex justify-center">
        <button className="px-6 py-2 border border-green-500 text-green-600 font-medium rounded-md hover:bg-green-50 transition text-sm">
          View more
        </button>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out both;
        }

        @keyframes slideIn {
          from { opacity: 0; transform: scale(0.98) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-slide-in {
          animation: slideIn 0.6s ease-out both;
        }
      `}</style>
    </section>
  );
}
