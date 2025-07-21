import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear session
    document.cookie = 'uId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    localStorage.removeItem('uId');
    localStorage.removeItem('url');

    // Delay redirect
    const timeout = setTimeout(() => {
      navigate('/login');
    }, 2500);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0a0f1f] px-4">
      <div className="relative text-center animate-fadeInSlow">
        {/* Glowing pulse background */}
        <div className="absolute -inset-10 bg-[#07A658] opacity-10 blur-2xl rounded-full animate-pulse z-0" />

        {/* Spinner */}
        <div className="relative z-10 mb-8">
          <div className="w-16 h-16 border-4 border-[#07A658] border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>

        {/* Texts */}
        <h3 className="text-3xl lg:text-4xl font-bold text-[#fff] mb-3 z-10 relative">
          Logging out...
        </h3>
        <p className="text-[#fff] text-base mb-6 z-10 relative">
          You’ll be redirected to login shortly
        </p>

        {/* Progress Bar */}
        <div className="relative w-64 h-3 bg-[#0a0f1f] rounded-full overflow-hidden mx-auto z-10">
          <div className="absolute top-0 left-0 h-full w-full bg-[#07A658] animate-slideRight" />
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes slideRight {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }

          .animate-slideRight {
            animation: slideRight 2.5s linear infinite;
          }

          @keyframes fadeInSlow {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-fadeInSlow {
            animation: fadeInSlow 0.8s ease-out;
          }
        `}
      </style>
    </div>
  );
};

export default LogoutPage;
