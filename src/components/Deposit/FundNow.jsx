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
}) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (amount.trim() === '') {
      toast.error('Amount field cannot be empty. Please enter an amount to deposit.');
      return setIsLoading(false);
    }

    if (isNaN(amount)) {
      toast.error('Invalid amount. Please enter a numeric value.');
      return setIsLoading(false);
    }

    if (method.trim() === '') {
      toast.error('Deposit method field cannot be empty. Please choose a method.');
      return setIsLoading(false);
    }

    setIsLoading(true);
    try {
      const { status, data } = await api.get('fetchWallet');
      if (status === 201) {
        const { bitcoin, ethereum, tether } = data.message;
        const cryptoSymbol = method.toLowerCase();

        if (method === 'bitcoin') setWallet(bitcoin);
        if (method === 'ethereum') setWallet(ethereum);
        if (method === 'tether') setWallet(tether);

        if (cryptoSymbol) {
          const cryptoDataResponse = await fetch(
            `https://api.coingecko.com/api/v3/coins/${cryptoSymbol}`
          );
          const cryptoData = await cryptoDataResponse.json();

          const price = cryptoData.market_data.current_price.usd;
          const bitcoinFraction = amount / price;
          setCoinValue(bitcoinFraction);
          setMethodSign(cryptoData.symbol);

          const requestData = {
            cryptovalue: bitcoinFraction,
            cryptoAmt: amount,
            netWork: method,
            sessionGetUserID: localStorage.getItem('uId'),
            companyWallet: wallet,
            selectedPlan: null,
            createdAt: new Date().toLocaleString('en-US', {
              timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            }),
          };

          const depositResponse = await api.post('depositPage', requestData);
          if (depositResponse.status === 201) {
            const readResult = depositResponse.data.message;
            if (readResult.message === 'true') {
              toast.success(
                `Your deposit has been successfully recorded. Please proceed to pay ${amount} USD, equivalent to ${bitcoinFraction.toFixed(4)} ${method.toUpperCase()}.`
              );
              setTimeout(() => {
                setCurrentState('CopyWallet');
              }, 3000);
            }
          }
        }
      }
    } catch (error) {
      if (error.response?.status === 422) {
        const message = error.response.data?.errors?.[0] || 'Validation failed.';
        toast.error(message);
      } else {
        console.error(error);
        toast.error('An unexpected error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="col-span-12 p-6 bg-white rounded-xl border border-[#07A658] shadow-lg xl:col-span-12">
      <Toaster position="top-center" />
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-between gap-6">
          <div className="w-full h-auto">
            <h5 className="text-lg text-[#142528] font-bold mb-4 text-center">
              Fund Your Account
            </h5>

            <div className="mb-4">
              <label className="block text-sm font-medium text-[#3f6870] mb-1">Amount</label>
              <input
                type="text"
                placeholder="Enter amount in USD"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#e6f8ef] text-[#142528] placeholder:text-[#3f6870] focus:outline-none focus:ring-2 focus:ring-[#07A658] transition"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-[#3f6870] mb-1">Select Method</label>
              <select
                value={method}
                onChange={(e) => setMethod(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#e6f8ef] text-[#142528] focus:outline-none focus:ring-2 focus:ring-[#07A658] transition"
              >
                <option value="bitcoin">Bitcoin</option>
                <option value="ethereum">Ethereum Erc20</option>
                <option value="tether">Usdt Erc20</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 text-white font-semibold rounded-lg bg-[#07A658] hover:bg-[#059e51] transition duration-200 ease-in-out"
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Fund Now'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FundNow;
