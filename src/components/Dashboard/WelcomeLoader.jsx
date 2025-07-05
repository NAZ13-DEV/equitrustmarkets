import React from 'react';
import BigLogo from '../../img/stader-icon.svg';

const WelcomeLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-white">
      <div className="text-center animate-fade-in-up">
        <div className="flex items-center justify-center mb-8 animate-glow-up">
          <img
            src={BigLogo}
            alt="Equitrustmarkets"
            className="w-24 h-24 border-4 border-green-500 rounded-full shadow-lg"
          />
        </div>

        <h1 className="text-3xl font-extrabold text-green-700 sm:text-4xl md:text-5xl animate-text-glow">
          Welcome back, Broker
        </h1>
        <p className="mt-3 tracking-wide text-green-600 text-md sm:text-lg">
          Preparing your trading dashboard...
        </p>

        <div className="flex items-center justify-center mt-10">
          <div className="scale-125 loader-dots" />
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes glowPulse {
          0% { text-shadow: 0 0 0px #10B981; }
          50% { text-shadow: 0 0 15px #10B981; }
          100% { text-shadow: 0 0 0px #10B981; }
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-text-glow {
          animation: glowPulse 2s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out both;
        }

        @keyframes glowLogo {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0px #10B981; }
          50% { transform: scale(1.05); box-shadow: 0 0 20px #10B98188; }
        }

        .animate-glow-up {
          animation: glowLogo 2.5s ease-in-out infinite;
        }

        /* Dots loader */
        .loader-dots {
          display: inline-block;
          position: relative;
          width: 64px;
          height: 24px;
        }

        .loader-dots::before,
        .loader-dots::after {
          content: "";
          position: absolute;
          top: 0;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #10B981;
          animation: bounce 0.6s infinite alternate;
        }

        .loader-dots::before {
          left: 0;
          animation-delay: 0s;
        }

        .loader-dots::after {
          left: 24px;
          animation-delay: 0.2s;
        }

        .loader-dots span {
          position: absolute;
          top: 0;
          left: 48px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #10B981;
          animation: bounce 0.6s infinite alternate;
          animation-delay: 0.4s;
        }

        @keyframes bounce {
          to {
            transform: translateY(-12px);
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};

export default WelcomeLoader;
