/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetails, clearUserState } from "../../redux/slices/fetchUserSlice";
import SubscriptionDeposit from "./SubscriptionDeposit";

const Subscribe = () => {
  const dispatch = useDispatch();
  const { user, error } = useSelector((state) => state.fetchUserDetails);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [preSelectedPlan, setPreSelectedPlan] = useState(null);
  const [showError, setShowError] = useState(null);

  useEffect(() => {
    const storedId = localStorage.getItem("uId");
    if (storedId) {
      dispatch(fetchUserDetails(storedId));
    } else {
      setShowError("User ID not found. Please log in again.");
    }
    return () => dispatch(clearUserState());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      setShowError("Failed to fetch user details. Please try again.");
    }
  }, [error]);

  const resetPlan = () => {
    setSelectedPlan(null);
    setPreSelectedPlan(null);
  };

  const handlePreSelect = (plan) => {
    setPreSelectedPlan(plan);
  };

  const handleConfirm = () => {
    if (preSelectedPlan) {
      setSelectedPlan(preSelectedPlan);
    }
  };

  if (showError) {
    return (
      <div className="min-h-screen bg-[#0a0f1f] flex items-center justify-center p-4">
        <p className="text-[#3f6870] text-lg">{showError}</p>
      </div>
    );
  }

  if (selectedPlan) {
    return (
      <div className="min-h-screen bg-[#0a0f1f] p-4 lg:p-10 animate-fade-in">
        <button
          onClick={resetPlan}
          className="mb-4 px-4 py-2 text-[#fff] text-sm font-medium rounded-md bg-green-600 hover:bg-[#07A658]/50"
        >
          Back to Plans
        </button>
        <SubscriptionDeposit
          plan={selectedPlan.plan}
          min={selectedPlan.min}
          max={selectedPlan.max}
        />
      </div>
    );
  }

  const plans = [
    {
      name: "SILVER PLAN",
      range: "$10,000 - $49,000",
      features: ["+5 Trades per Week", "+ Instant Trading", "Leverage up to 2x"],
      plan: "SILVER",
      min: 10000,
      max: 49000,
    },
    {
      name: "GOLD PLAN",
      range: "$50,000 - $149,000",
      features: ["+10 Trades per Week", "+ Instant Trading", "Leverage up to 2x and 5x"],
      plan: "GOLD",
      min: 50000,
      max: 149000,
    },
    {
      name: "DIAMOND PLAN",
      range: "$150,000 - $399,000",
      features: ["+15 Trades per Week", "+ Instant Trading", "Leverage up to 2x, 5x and 10x"],
      plan: "DIAMOND",
      min: 150000,
      max: 399000,
    },
    {
      name: "PLATINUM PLAN",
      range: "$400,000 - UNLIMITED",
      features: ["+20 Trades per Week", "+ Instant Trading", "Leverage up to 2x, 5x, 10x and 20x"],
      plan: "PLATINUM",
      min: 400000,
      max: 9999999,
    },
  ];

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow {
          0% { box-shadow: 0 0 5px rgba(7, 166, 88, 0.4); }
          50% { box-shadow: 0 0 15px rgba(7, 166, 88, 0.8); }
          100% { box-shadow: 0 0 5px rgba(7, 166, 88, 0.4); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        .animate-pulse-hover:hover {
          animation: pulse 0.3s ease-in-out;
          transform: scale(1.05);
        }
      `}</style>
      <div className="min-h-screen bg-[#0a0f1f] p-4 lg:p-10 ">
        <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4 rounded-2xl">
          {plans.map((item, index) => (
            <div
              key={index}
              className={`bg-[#0a0f1f] rounded-2xl shadow-lg p-6 text-center transition-transform hover:-translate-y-1 hover:shadow-2xl border border-green-400 animate-fade-in delay-${index * 100}ms ${
                preSelectedPlan?.plan === item.plan ? "animate-glow border-2 border-[#07A658]" : ""
              }`}
            >
              <h2 className="mb-2 text-xl font-bold text-[#fff]">{item.name}</h2>
              <p className="mb-4 text-lg font-semibold text-[#fff]">{item.range}</p>
              <ul className="mb-6 space-y-2 text-sm text-[#fff]">
                {item.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>
              <button
                onClick={() => handlePreSelect({ plan: item.plan, min: item.min, max: item.max })}
                className="w-full px-4 py-2 font-medium text-white rounded-md bg-[#07A658] hover:bg-[#07A658]/80 transition animate-pulse-hover"
                disabled={preSelectedPlan && preSelectedPlan.plan !== item.plan}
              >
                Select Plan
              </button>
            </div>
          ))}
        </div>
        {preSelectedPlan && (
          <div className="mt-6 text-center">
            <button
              onClick={handleConfirm}
              className="px-6 py-2 font-medium text-white rounded-md bg-[#07A658] hover:bg-[#07A658]/80 transition animate-pulse-hover"
            >
              Confirm {preSelectedPlan.plan} Plan
            </button>
            <button
              onClick={() => setPreSelectedPlan(null)}
              className="ml-4 px-6 py-2 font-medium text-[#fff] rounded-md hover:bg-[#07A658]/20"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Subscribe;