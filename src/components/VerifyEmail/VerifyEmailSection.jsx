import React from "react";

const VerifyEmailSection = () => {
  return (
    <div className="flex items-center justify-center px-4 py-24 bg-white">
      <div className="max-w-xl text-center">
        {/* Header */}
        <h1 className="mb-4 text-3xl font-extrabold text-[#07A658] lg:text-4xl animate-fade-up">
          Verify Your Email 📩
        </h1>

        {/* Body */}
        <p className="text-base leading-relaxed text-[#3f6870] lg:text-lg animate-fade-up delay-100">
          A confirmation link has been sent to your email. Please check your inbox
          and click the link to verify your email address and activate your account.
        </p>

        {/* Glow bar */}
        <div className="flex justify-center mt-10">
          <div className="w-[200px] h-2 rounded-full bg-gradient-to-r from-[#07A658] to-[#43e97b] animate-pulse-glow" />
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-up {
          animation: fadeUp 0.8s ease-out forwards;
        }

        .animate-fade-up.delay-100 {
          animation-delay: 0.2s;
        }

        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(6, 148, 78, 0.4);
          }
          50% {
            box-shadow: 0 0 10px 4px rgba(6, 148, 78, 0.4);
          }
        }

        .animate-pulse-glow {
          animation: pulseGlow 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default VerifyEmailSection;
