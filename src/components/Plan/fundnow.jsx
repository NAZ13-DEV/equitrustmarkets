/* eslint-disable no-unused-vars */
import { useState } from 'react';
import api from '../../redux/slices/api';
import toast, { Toaster } from 'react-hot-toast';

const FundNow = ({
  amount,
  method,
  wallet,
  setWallet,
  isLoading,
  setMethod,
  setAmount,
  setIsLoading,
  setCurrentState,
  setCoinValue,
  setMethodSign,
  plan,
  min,
  max,
  user
}) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const currency = user?.currency || '$';

    if (!user) return toast.error("User not loaded. Please wait...");
    if (amount.trim() === '') return toast.error('Amount field cannot be empty.');
    if (isNaN(amount)) return toast.error('Invalid amount. Enter a number.');

    const numericAmount = parseFloat(amount);
    if (numericAmount < min || numericAmount > max) {
      return toast.error(`Amount must be between ${currency}${min} and ${currency}${max}.`);
    }

    if (method.trim() === '') return toast.error('Please choose a deposit method.');

    setIsLoading(true);

    try {
      const walletResponse = await api.get('fetchWallet');
      if (walletResponse.status === 201) {
        const { bitcoin, ethereum, tether } = walletResponse.data.message;
        const lowerMethod = method.toLowerCase();
        if (lowerMethod === 'bitcoin') setWallet(bitcoin);
        if (lowerMethod === 'ethereum') setWallet(ethereum);
        if (lowerMethod === 'tether') setWallet(tether);

        const cryptoDataResponse = await fetch(
          `https://api.coingecko.com/api/v3/coins/${lowerMethod}`
        );
        const cryptoData = await cryptoDataResponse.json();
        const price = cryptoData.market_data.current_price.usd;
        const cryptoAmount = numericAmount / price;

        setCoinValue(cryptoAmount);
        setMethodSign(cryptoData.symbol);

        const payload = {
          cryptovalue: cryptoAmount,
          cryptoAmt: numericAmount,
          netWork: method,
          sessionGetUserID: localStorage.getItem('uId'),
          companyWallet: wallet,
          selectedPlan: plan,
          createdAt: new Date().toLocaleString('en-US', {
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,}),
        };

        const depositResponse = await api.post('plandepositPage', payload);

        if (depositResponse.status === 201 && depositResponse.data.message?.message === 'true') {
          toast.success(
            `Deposit recorded. Pay ${currency}${numericAmount} ≈ ${cryptoAmount.toFixed(4)} ${method.toUpperCase()}`
          );
          setTimeout(() => setCurrentState('CopyWallet'), 2000);
        }
      }
    } catch (error) {
      if (error.response?.status === 422) {
        toast.error(error.response.data.errors[0]);
      } else {
        console.error(error);
        toast.error('An error occurred. Try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

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
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-pulse-hover:hover {
          animation: pulse 0.3s ease-in-out;
          transform: scale(1.05);
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
      `}</style>
      <div className="col-span-12 animate-fade-in">
        <Toaster position="top-center" />
        <form onSubmit={handleSubmit} className="w-full px-2 mx-auto space-y-6 md:w-full sm:px-4">
          <div className="text-center">
            <h5 className="text-xl sm:text-2xl font-semibold text-[#fff] animate-fade-in">Subscribe to a Plan</h5>
            <p className="text-[#fff] text-sm sm:text-base mt-1 animate-fade-in delay-100">
              Selected Plan: <span className="font-bold">{plan}</span>
            </p>
          </div>

          <div className="delay-200 animate-fade-in">
            <label className="block text-[#fff] text-sm font-medium mb-1">Enter Amount</label>
            <input
              type="text"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bbg-[#0a0f1f] border border-[#045e18]/50 text-[#fff] placeholder-[#fff]/70 focus:outline-none focus:ring-2 focus:ring-[#07A658] transition-all duration-300"
            />
          </div>

          <div className="delay-300 animate-fade-in">
            <label className="block text-[#3f6870] text-sm font-medium mb-1">Choose Method</label>
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-[#0a0f1f] border border-[#045e18]/50 text-[#fff] focus:outline-none focus:ring-2 focus:ring-[#07A658] transition-all duration-300"
            >
              <option value="">-- Select Method --</option>
              <option value="bitcoin">Bitcoin</option>
              <option value="ethereum">Ethereum ERC20</option>
              <option value="tether">USDT ERC20</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-[#07A658] hover:bg-[#07A658]/80 text-white font-semibold rounded-lg transition-all duration-300 animate-pulse-hover animate-fade-in delay-300"
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Fund Now'}
          </button>
        </form>
      </div>
    </>
  );
};

export default FundNow;