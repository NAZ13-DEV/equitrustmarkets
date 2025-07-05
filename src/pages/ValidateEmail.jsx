import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import api from "../redux/slices/api";
import HomeNav from "../components/layout/HomeNav";
import Footer from "../components/layout/Footer";

const ValidateEmail = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const mail = searchParams.get("mail");
  const [message, setMessage] = useState("Verifying your email address...");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || !mail) {
      setMessage("Invalid verification link.");
      return;
    }

    api
      .post("verUser", {
        encryptedEmail: token,
        email: mail,
      })
      .then((response) => {
        if (response.status === 201) {
          setMessage(response.data.message);
          setTimeout(() => navigate("/login"), 3000);
        }
      })
      .catch((error) => {
        const err =
          error.response?.status === 422
            ? error.response.data.errors[0]
            : "Verification failed. Please try again.";
        setMessage(err);
      });
  }, [token, mail, navigate]);

  return (
    <>
      <HomeNav />

      <div className="relative flex items-center justify-center px-6 py-24 overflow-hidden bg-white">
        {/* Glowing background */}
        <div className="absolute bg-green-300 rounded-full w-96 h-96 -top-20 -left-16 blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute w-[500px] h-[500px] bg-green-400 rounded-full -bottom-32 -right-16 blur-3xl opacity-30 animate-pulse-slower"></div>

        <div className="relative z-10 max-w-xl text-center">
          <h1 className="text-3xl font-bold text-[#07A658] sm:text-4xl lg:text-5xl animate-fade-up">
            {message}
          </h1>
          <p className="mt-4 text-base text-[#3f6870] animate-fade-up delay-100">
            This will only take a moment. You’ll be redirected shortly.
          </p>

          <div className="flex justify-center mt-10">
            <div className="w-[200px] h-2 rounded-full bg-gradient-to-r from-[#07A658] to-[#43e97b] animate-pulse-glow"></div>
          </div>
        </div>

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

          @keyframes pulseSlow {
            0%, 100% { transform: scale(1); opacity: 0.3; }
            50% { transform: scale(1.05); opacity: 0.5; }
          }

          @keyframes pulseSlower {
            0%, 100% { transform: scale(1); opacity: 0.25; }
            50% { transform: scale(1.1); opacity: 0.4; }
          }

          .animate-pulse-glow {
            animation: pulseGlow 2s infinite;
          }

          .animate-pulse-slow {
            animation: pulseSlow 6s ease-in-out infinite;
          }

          .animate-pulse-slower {
            animation: pulseSlower 10s ease-in-out infinite;
          }
        `}</style>
      </div>

      <Footer />
    </>
  );
};

export default ValidateEmail;
