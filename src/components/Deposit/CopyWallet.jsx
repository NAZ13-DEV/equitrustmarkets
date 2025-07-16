
import { useEffect, useState } from "react";

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
  methodSign,
}) => {
  useEffect(() => {
    if (method === "ethereum") setCoinImg(ethereum);
    else if (method === "bitcoin") setCoinImg(bitcoin);
    else if (method === "tether") setCoinImg(tether);
    else setCoinImg("");
  }, [method, setCoinImg, bitcoin, ethereum, tether]);

  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard
        .writeText(wallet)
        .then(() => {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 2000);
        })
        .catch((error) => {
          console.error("Clipboard copy failed:", error);
        });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = wallet;
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      } catch (err) {
        console.error("Fallback copy failed:", err);
      } finally {
        document.body.removeChild(textarea);
      }
    }
  };

  const handleConfirmPayment = () => {
    setCurrentState("UploadProof");
  };

  return (
    <div className="col-span-12 p-4 bg-white shadow-md rounded-xl lg:px-7 lg:py-6 xl:col-span-12 animate-fade-in-up">
      <div className="flex flex-col gap-8">
        <div className="text-center">
          <h5 className="text-base text-[#142528] font-bold mb-1">
            Preferred Deposit Amount: {currency} {amount ?? 0.0}
          </h5>
          <p className="text-base text-[#3f6870]">
            Equals: {coinValue?.toFixed(4) ?? 0.0} {methodSign}
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Send your payment to the address below:
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
          {/* Coin Image */}
          <div className="w-[113px] aspect-square sm:w-[113px] bg-[#e6f8ef] rounded-full flex items-center justify-center shadow-lg p-4 animate-zoom-in">
            <img
              src={coinImg}
              alt={`${method} Logo`}
              className="object-contain w-full h-full"
              loading="lazy"
            />
          </div>

          {/* Wallet Info + QR */}
          <div className="flex-1 w-full max-w-xl">
            <h1 className="text-lg font-semibold text-[#142528] sm:text-2xl mb-4">
              {method.toUpperCase()} ADDRESS
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <input
                type="text"
                value={wallet}
                readOnly
                className="w-full px-4 py-2 border border-[#07A658] bg-[#e6f8ef] text-[#142528] rounded-lg focus:outline-none"
              />
              <button
                type="button"
                onClick={handleCopy}
                className="px-4 py-2 text-sm font-medium text-white bg-[#07A658] rounded-lg hover:opacity-90 transition-all duration-300"
              >
                {isCopied ? "Copied ✓" : "Copy"}
              </button>
            </div>

            <div className="mt-6 text-center animate-fade-in">
              <h5 className="text-base font-bold mb-2 text-[#142528]">Scan to Copy Wallet</h5>
              <img
                src={`https://quickchart.io/qr?text=${wallet}`}
                alt="QR Code"
                className="mx-auto w-[200px] sm:w-[220px] lg:w-[240px] h-auto object-contain rounded-lg shadow-md"
                loading="lazy"
              />
            </div>

            <div className="flex justify-center mt-8">
              <button
                type="button"
                onClick={handleConfirmPayment}
                className="px-6 py-2 text-sm font-semibold text-white bg-[#07A658] rounded-lg hover:opacity-90 transition-all duration-300 animate-fade-in"
              >
                Confirm Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyWallet;
