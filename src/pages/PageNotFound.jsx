import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import HomeNav from '../components/layout/HomeNav';
import Footer from '../components/layout/Footer';

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <HomeNav />
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-white animate-fade-slide-in">
        <div className="relative">
          <h1 className="text-[7rem] md:text-[9rem] font-extrabold text-[#07A658] drop-shadow-2xl tracking-wider animate-pop">
            404
          </h1>
          <div className="absolute top-0 right-0 w-24 h-24 bg-green-100 rounded-full opacity-50 filter blur-2xl animate-pulse-slow" />
        </div>

        <h2 className="mb-4 text-2xl md:text-3xl font-bold text-[#142528]">
          Oops! Page Not Found
        </h2>
        <p className="max-w-md mb-8 text-base text-gray-600 md:text-lg">
          The page you’re looking for doesn’t exist or has been moved. Please check the URL or return to the homepage.
        </p>

        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 px-6 py-3 font-semibold text-white transition-all duration-300 bg-[#07A658] hover:bg-[#06994e] rounded-md shadow-md hover:scale-105"
        >
          <ArrowLeft size={20} />
          Back to Home
        </button>
      </div>
      <Footer />

      <style>{`
        @keyframes fade-slide-in {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.7;
          }
        }
        @keyframes pop {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-fade-slide-in {
          animation: fade-slide-in 0.6s ease-out;
        }
        .animate-pop {
          animation: pop 0.6s ease-out;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s infinite ease-in-out;
        }
      `}</style>
    </>
  );
};

export default PageNotFound;
