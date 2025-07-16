/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetails, clearUserState } from "../../redux/slices/fetchUserSlice";
import bitcoin from "../../../public/bitcoin.svg";
import ethereum from "../../../public/ethereum.svg";
import tether from "../../../public/tether.svg";
import FundNow from "./fundnow";
import CopyWallet from "./copywallet";
import UploadProof from "./ConfirmDeposit";

const SoftwareDeposit = ({ plan, min, max, name, price }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.fetchUserDetails);

  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState(price || 50000);
  const [coinValue, setCoinValue] = useState("");
  const [method, setMethod] = useState("bitcoin");
  const [methodSign, setMethodSign] = useState("");
  const [wallet, setWallet] = useState("");
  const [coinImg, setCoinImg] = useState("");
  const [currentState, setCurrentState] = useState("FundNow");

  useEffect(() => {
    const storedUserId = localStorage.getItem("uId");
    if (storedUserId) dispatch(fetchUserDetails(storedUserId));

    return () => dispatch(clearUserState());
  }, [dispatch]);

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes cardPulse {
          0% { transform: scale(1); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
          50% { transform: scale(1.02); box-shadow: 0 6px 12px rgba(7, 166, 88, 0.2); }
          100% { transform: scale(1); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
        }
        @keyframes crossfade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-card-pulse {
          animation: cardPulse 2s ease-in-out infinite;
        }
        .animate-crossfade {
          animation: crossfade 0.3s ease-in;
        }
        .animate-pulse-hover:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease-in-out;
        }
      `}</style>
      <div className="bg-[#e6f8ef] flex items-center justify-center px-2 sm:px-4 py-6 sm:py-10 min-h-screen animate-fade-in">
        <div className="w-full max-w-4xl bg-[#e6f8ef] rounded-2xl shadow-lg p-4 sm:p-6 lg:p-10 transition-all duration-300 border border-[#3f6870]/50 animate-card-pulse">
          <div className="mb-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#142528] animate-fade-in">{plan}</h2>
            {/* {price && (
              <p className="mt-1 text-base sm:text-lg text-[#3f6870] animate-fade-in delay-100">
                Price: ${price.toLocaleString()}
              </p>
            )} */}
          </div>

          <div className="grid grid-cols-12 gap-4 sm:gap-6">
            {currentState === "FundNow" && (
              <div className="col-span-12 animate-crossfade">
                <FundNow
                  amount={amount}
                  method={method}
                  wallet={wallet}
                  setWallet={setWallet}
                  isLoading={isLoading}
                  setMethod={setMethod}
                  setAmount={setAmount}
                  setIsLoading={setIsLoading}
                  setCurrentState={setCurrentState}
                  setCoinValue={setCoinValue}
                  setMethodSign={setMethodSign}
                  plan={plan}
                  user={user}
                />
              </div>
            )}

            {currentState === "CopyWallet" && (
              <div className="col-span-12 animate-crossfade">
                <CopyWallet
                  amount={amount}
                  method={method}
                  wallet={wallet}
                  setCurrentState={setCurrentState}
                  coinImg={coinImg}
                  coinValue={coinValue}
                  setCoinImg={setCoinImg}
                  bitcoin={bitcoin}
                  ethereum={ethereum}
                  tether={tether}
                  currency={user?.currency}
                  methodSign={methodSign}
                />
              </div>
            )}

            {currentState === "UploadProof" && (
              <div className="col-span-12 animate-crossfade">
                <UploadProof
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                  plan={plan}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SoftwareDeposit;