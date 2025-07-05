import React from "react";

const ResetMessageSection = () => {
  return (
    <div className="flex items-center justify-center px-4 py-24 bg-white">
      <div className="max-w-xl text-center">
        <h1 className="mb-4 text-3xl font-extrabold text-[#07A658] lg:text-4xl animate-fade-up">
          Check Your Email 📬
        </h1>
        <p className="text-base leading-relaxed text-[#3f6870] lg:text-lg animate-fade-up delay-100">
          A reset link has been sent to your email address. Please check your
          inbox and follow the instructions to reset your password.
        </p>

        <div className="flex justify-center mt-10">
          <div className="w-[200px] h-2 rounded-full bg-gradient-to-r from-[#07A658] to-[#43e97b] animate-pulse-glow" />
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
    @keyframes fadeUp {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fade-up {
      animation: fadeUp 0.8s ease-out forwards;
    }
    .animate-fade-up.delay-100 {
      animation-delay: 0.1s;
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

export default ResetMessageSection;
