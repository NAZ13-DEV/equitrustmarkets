import { useEffect, useState } from 'react';
import { Clipboard } from 'lucide-react';

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
    if (method === 'ethereum') setCoinImg(ethereum);
    else if (method === 'bitcoin') setCoinImg(bitcoin);
    else if (method === 'tether') setCoinImg(tether);
    else setCoinImg('');
  }, [method, setCoinImg, bitcoin, ethereum, tether]);

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(wallet).then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      }).catch(console.error);
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
        .animate-fade-in { animation: fadeIn 0.5s ease-out; }
        .animate-card-pulse { animation: cardPulse 2s ease-in-out infinite; }
        .animate-flash { animation: flash 0.3s ease-in; }
        .animate-pulse-hover:hover { transform: scale(1.05); transition: transform 0.3s ease-in-out; }
      `}</style>

      <div className="w-full bg-[#0a0f1f] p-6 md:p-8 rounded-xl animate-fade-in">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="space-y-3 text-center">
            <h5 className="text-xl font-bold text-white md:text-2xl animate-fade-in">
              Preferred Deposit Amount {currency}{amount ?? 0.0} — Value: {coinValue?.toFixed(4) ?? 0.0} {methodSign}
            </h5>
            <h5 className="font-semibold text-white delay-100 text-md md:text-lg animate-fade-in">
              Please send your payment to the crypto address below:
            </h5>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10 bg-[#0a0f1f]">
            {/* Left Image */}
            <div className="flex items-center justify-center w-full delay-200 md:w-1/2 animate-fade-in">
              <img
                src={coinImg}
                alt="Coin"
                className="object-contain w-40 h-40 rounded-lg"
              />
            </div>

            {/* Right Address & Actions */}
            <div className="w-full delay-300 md:w-1/2 animate-fade-in">
              <h1 className="mb-4 text-xl font-semibold text-white">
                {method?.toUpperCase()} Address
              </h1>

              <div className="flex flex-col gap-4">
                {/* Copy Input */}
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={wallet}
                    readOnly
                    className="w-full px-4 py-2 rounded-lg border border-[#045e18]/50 bg-[#0a0f1f] text-white focus:ring-2 focus:ring-[#07A658] transition-all"
                  />
                  <button
                    type="button"
                    onClick={handleCopy}
                    className={`flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#07A658] rounded-lg hover:bg-[#07A658]/80 focus:outline-none animate-pulse-hover ${isCopied ? 'animate-flash' : ''}`}
                  >
                    <Clipboard className="w-5 h-5" />
                    {isCopied ? 'Copied' : 'Copy'}
                  </button>
                </div>

                {/* QR & Confirm */}
                <div className="text-center">
                  <h5 className="mt-4 mb-2 text-sm font-semibold text-white">Scan QR to Copy</h5>
                  <img
                    src={`https://quickchart.io/qr?text=${wallet}`}
                    alt="QR Code"
                    className="w-[160px] mx-auto rounded-lg"
                  />
                </div>

                <div className="mt-6 text-center">
                  <button
                    onClick={handleConfirmPayment}
                    className="px-5 py-2 text-sm sm:text-base font-medium text-white bg-[#07A658] rounded-lg hover:bg-[#07A658]/80 animate-pulse-hover"
                  >
                    Confirm Payment
                  </button>
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
