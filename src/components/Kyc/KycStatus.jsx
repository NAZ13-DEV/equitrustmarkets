import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetails } from "../../redux/slices/fetchUserSlice";
import Dashboard from "../../pages/Dashboard";

const KycStatus = () => {
  const dispatch = useDispatch();
  const [showDashboard, setShowDashboard] = useState(false);
  const { user } = useSelector((state) => state.fetchUserDetails);

  useEffect(() => {
    const storedUserId = localStorage.getItem("uId");
    if (storedUserId) {
      dispatch(fetchUserDetails(storedUserId));
    }
  }, [dispatch]);

  useEffect(() => {
    if (user?.kyc === "true" && user?.verifi === "true") {
      setShowDashboard(true);
    }
  }, [user]);

  if (showDashboard) return <Dashboard />;

  return (
    <section className="flex justify-center w-full px-2 py-4">
    <div className="w-full max-w-[95%] sm:max-w-2xl md:max-w-3xl bg-[#0a0f1f] border border-[#07A658] shadow-xl rounded-xl p-3 sm:p-5 md:p-8 text-center animate-fade-in">
      <h3 className="mb-3 text-xl xxs:text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold leading-snug text-[#fff]">
        KYC Submitted
      </h3>
  
      <p className="mx-auto text-sm xxs:text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed text-[#fff] max-w-[92%] sm:max-w-[90%]">
        Your KYC submission has been received and is awaiting approval. We will notify you once the verification is complete.
      </p>
  
      <div className="flex justify-center mt-6">
        <div className="w-[120px] sm:w-[140px] md:w-[160px] h-2 bg-gradient-to-r from-[#07A658] to-[#27dd0f] rounded-full animate-pulse" />
      </div>
    </div>
  
    <style>{`
      @keyframes fade-in {
        0% {
          opacity: 0;
          transform: translateY(20px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .animate-fade-in {
        animation: fade-in 0.6s ease-out;
      }
    `}</style>
  </section>
  
  );
};

export default KycStatus;
