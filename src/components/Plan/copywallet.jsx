import { useEffect, useState } from 'react';

const CopyWallet = ({
  amount,
  method,
  wallet,
  setCurrentState,
  coinImg,
  coinValue,
  setCoinImg,
  bitcoin,
  ethereum,
  tether,
  currency,
  methodSign
}) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (method === 'ethereum') {
      setCoinImg(ethereum);
    } else if (method === 'bitcoin') {
      setCoinImg(bitcoin);
    } else if (method === 'tether') {
      setCoinImg(tether);
    } else {
      setCoinImg('');
    }
  }, [method, setCoinImg, bitcoin, ethereum, tether]);

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(wallet)
        .then(() => {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 2000);
        })
        .catch((err) => console.error('Clipboard error:', err));
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = wallet;
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      } catch (error) {
        console.error('Fallback copy failed:', error);
      } finally {
        document.body.removeChild(textarea);
      }
    }
  };

  const handleConfirmPayment = () => {
    setCurrentState('UploadProof');
  };

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
        @keyframes flash {
          0% { background-color: rgba(7, 166, 88, 0.8); }
          100% { background-color: #07A658; }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-card-pulse {
          animation: cardPulse 2s ease-in-out infinite;
        }
        .animate-pulse-hover:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease-in-out;
        }
        .animate-flash {
          animation: flash 0.3s ease-in;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
      `}</style>
      <div className="col-span-12 p-4 bg-[#e6f8ef] rounded-xl lg:px-7 lg:py-6 xl:col-span-12 animate-fade-in">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="w-full">
            <div className="col-span-12 p-4 bg-[#e6f8ef] rounded-xl lg:px-7 lg:py-6 xl:col-span-6 animate-card-pulse">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="w-full">
                  <h5 className="text-base sm:text-lg font-bold text-[#142528] mb-3 text-center animate-fade-in">
                    Preferred Deposit Amount {currency}
                    {amount ?? 0.0} with a value of {coinValue?.toFixed(4) ?? 0.0}{' '}
                    {methodSign}
                  </h5>
                  <h5 className="text-base sm:text-lg font-bold text-[#142528] text-center animate-fade-in delay-100">
                    Please send your payment to one of the below listed crypto-currency addresses.
                  </h5>

                  <div className="flex items-center justify-center">
                    <div className="w-full bg-[#e6f8ef] flex justify-center items-center">
                      <div className="flex flex-col items-start max-w-4xl gap-6 mx-5 sm:flex-row">
                        <div className="flex-shrink-0 w-full sm:w-1/2">
                          <div className="h-60 sm:h-80 lg:h-96">
                            <img
                              src={coinImg}
                              alt="Coin"
                              className="w-full h-[200px] object-contain rounded-lg animate-fade-in delay-200"
                            />
                          </div>
                        </div>

                        <div className="w-full sm:w-1/2">
                          <h1 className="text-lg sm:text-2xl font-semibold text-[#142528] animate-fade-in delay-200">
                            {method?.toUpperCase()} ADDRESS
                          </h1>
                          <div className="mt-4 space-y-4">
                            <div className="flex items-center space-x-2 delay-300 animate-fade-in">
                              <input
                                type="text"
                                value={wallet}
                                readOnly
                                className="w-full px-4 py-2 border rounded-lg border-[#3f6870]/50 bg-[#e6f8ef] text-[#3f6870] focus:outline-none focus:ring-2 focus:ring-[#07A658] transition-all duration-300"
                              />
                              <button
                                type="button"
                                onClick={handleCopy}
                                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#07A658] rounded-lg hover:bg-[#07A658]/80 focus:outline-none animate-pulse-hover ${isCopied ? 'animate-flash' : ''}`}
                              >
                                <span className="mr-2 material-symbols-outlined">
                                  {isCopied ? 'check' : 'content_copy'}
                                </span>
                              </button>
                            </div>

                            <h5 className="text-base sm:text-lg font-bold text-[#142528] text-center mt-12 animate-fade-in delay-300">
                              Scan to Copy Wallet Details
                            </h5>
                            <div className="text-center">
                              <img
                                src={`https://quickchart.io/qr?text=${wallet}`}
                                alt="QR Code"
                                className="w-[200px] m-auto rounded-lg animate-fade-in delay-300"
                              />
                            </div>

                            <div className="flex items-center justify-center mt-6">
                              <button
                                type="button"
                                onClick={handleConfirmPayment}
                                className="px-4 py-2 text-sm sm:text-base font-medium text-white bg-[#07A658] rounded-lg hover:bg-[#07A658]/80 focus:outline-none animate-pulse-hover animate-fade-in delay-300"
                              >
                                Confirm Payment
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CopyWallet;