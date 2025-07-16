/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetails, clearUserState } from "../../redux/slices/fetchUserSlice";
import SoftwareDeposit from "./SoftwareDeposit";

const SubscribeSoftware = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.fetchUserDetails);
  const [mounted, setMounted] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalSoftware, setModalSoftware] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const storedId = localStorage.getItem("uId");
      if (storedId) {
        dispatch(fetchUserDetails(storedId));
      }
    }
    return () => dispatch(clearUserState());
  }, [dispatch, mounted]);

  const handleUnavailableClick = (softwareName) => {
    setModalSoftware(softwareName);
    setShowModal(true);
  };

  if (!mounted) return null;

  if (selectedPlan) {
    return <SoftwareDeposit plan={selectedPlan.plan} price={selectedPlan.amount}  />;
  }

  const softwares = [
    {
      name: "QuantumTrader",
      amount: 50000,
    },
    {
      name: "AlphaEdge",
      amount: 100000,
    },
    {
      name: "NexusPro",
      amount: 250000,
    },
    {
      name: "VanguardSuite",
      amount: 500000,
    },
    {
      name: "TitanCore",
      amount: 1000000,
    },
    {
      name: "InfinityVault",
      amount: 2500000,
    },
  ];

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes priceHighlight {
          0% { background-color: rgba(7, 166, 88, 0.1); }
          50% { background-color: rgba(7, 166, 88, 0.3); }
          100% { background-color: rgba(7, 166, 88, 0.1); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-pulse-hover:hover {
          animation: pulse 0.3s ease-in-out;
          transform: scale(1.05);
        }
        .animate-zoom-in {
          animation: zoomIn 0.3s ease-out;
        }
        .animate-price-highlight {
          animation: priceHighlight 2s ease-in-out infinite;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
      `}</style>
      <div className="min-h-screen bg-[#e6f8ef] p-4 lg:p-10 animate-fade-in">
        <div className="my-4 text-2xl sm:text-3xl font-bold text-center text-[#142528]">
          SOFTWARE PACKAGES
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {softwares.map((item, index) => (
            <div
              key={index}
              className="bg-[#e6f8ef] rounded-2xl shadow-lg p-6 text-center transition-transform hover:-translate-y-1 hover:shadow-2xl border border-[#3f6870]/50 animate-fade-in delay-100"
            >
              <h2 className="mb-2 text-xl font-bold text-[#142528] uppercase">{item.name}</h2>
              <p className="mb-4 text-lg font-semibold text-[#1c2020] animate-price-highlight">
                ${item.amount.toLocaleString()}
              </p>
              <div className="mt-6">
                <button
                  onClick={() =>
                    item.amount
                      ? setSelectedPlan({ plan: item.name, amount: item.amount })
                      : handleUnavailableClick(item.name)
                  }
                  className={`w-full px-4 py-2 font-medium text-white transition rounded-md animate-pulse-hover ${
                    item.amount
                      ? "bg-[#07A658] hover:bg-[#07A658]/80"
                      : "bg-[#07A658]/50 hover:bg-[#07A658]/70"
                  }`}
                >
                  {item.amount ? "Subscribe Now" : "Contact Support"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 animate-fade-in">
            <div className="bg-[#e6f8ef] border border-[#3f6870]/50 rounded-lg p-6 w-full max-w-sm text-center animate-zoom-in">
              <h3 className="mb-2 text-xl font-semibold text-[#142528]">Restricted Software</h3>
              <p className="mb-4 text-[#3f6870]">
                To access <span className="font-semibold text-[#142528]">{modalSoftware}</span>, please contact support.
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-white rounded-md bg-[#07A658] hover:bg-[#07A658]/80 animate-pulse-hover"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SubscribeSoftware;