import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import api from "../redux/slices/api";
import HomeNav from "../components/layout/HomeNav";
import Footer from "../components/layout/Footer";

const VerifyResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("T");
  const mail = searchParams.get("m");
  const num = searchParams.get("n");
  const [message, setMessage] = useState("Verifying Reset Link...");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || !mail || !num) {
      setMessage("Invalid verification link.");
      return;
    }

    api
      .post("verifyResetPassword", {
        token,
        email: mail,
        num,
      })
      .then((response) => {
        if (response.status === 201) {
          setMessage(response.data.message);
          setTimeout(() => {
            navigate(`/ChangePassword?mail=${encodeURIComponent(mail)}`);
          }, 3000);
        }
      })
      .catch((error) => {
        const err =
          error.response?.status === 422
            ? error.response.data.errors[0]
            : "Verification failed. Please try again.";
        setMessage(err);
      });
  }, [token, mail, num, navigate]);

  return (
    <>
      <HomeNav />
      <div className="relative flex items-center justify-center px-6 py-24 overflow-hidden bg-white">
        {/* Glowing Background Decorations */}
        <div className="absolute bg-green-200 rounded-full -top-10 -left-10 w-72 h-72 blur-[100px] opacity-30 animate-pulse-slow" />
        <div className="absolute bg-green-300 rounded-full -bottom-20 -right-10 w-80 h-80 blur-[120px] opacity-40 animate-pulse-slower" />

        {/* Main Content */}
        <div className="relative z-10 max-w-2xl px-10 py-16 mx-auto text-center bg-white border border-green-100 shadow-xl rounded-2xl animate-fade-up">
          <h1 className="mb-4 text-3xl font-extrabold text-green-700 md:text-4xl">
            {message}
          </h1>
          <p className="text-sm text-green-600 md:text-base">
            Please wait while we process your request...
          </p>
          <div className="w-[190px] h-2 mx-auto mt-10 rounded-full bg-gradient-to-r from-[#07A658] to-green-400 animate-pulse" />
        </div>
      </div>
      <Footer />

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.05); opacity: 0.5; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }

        @keyframes pulse-slower {
          0%, 100% { transform: scale(1); opacity: 0.25; }
          50% { transform: scale(1.1); opacity: 0.4; }
        }
        .animate-pulse-slower {
          animation: pulse-slower 8s ease-in-out infinite;
        }

        @keyframes fade-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fade-up 0.7s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default VerifyResetPassword;
