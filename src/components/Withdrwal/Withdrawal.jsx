/* eslint-disable no-unused-vars */
import { useState, useEffect, Fragment } from 'react';
import api from '../../redux/slices/api';
import { Tab } from '@headlessui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  fetchUserDetails,
  clearUserState,
} from '../../redux/slices/fetchUserSlice';
import { Player } from '@lottiefiles/react-lottie-player';
import successAnim from './success-checkmark1.json';
import { X } from 'lucide-react';

const Withdrawal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [withdrawData, setWithdrawData] = useState({
    payment_mode: 'Bitcoin Withdrawal',
    amount: '',
    address: '',
    bankName: '',
    accountNumber: '',
    accountName: '',
    country: '',
    swiftCode: '',
    narration: '',
    createdAt: new Date().toLocaleString('en-US', {
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    }),
  });
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const { user } = useSelector((state) => state.fetchUserDetails);

  useEffect(() => {
    const storedUserId = localStorage.getItem('uId');
    if (storedUserId) dispatch(fetchUserDetails(storedUserId));
    return () => dispatch(clearUserState());
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWithdrawData((prev) => ({ ...prev, [name]: value }));
  };

  const validateFields = () => {
    const mode = withdrawData.payment_mode;
    if (
      (mode === 'Bitcoin Withdrawal' || mode === 'Ethereum Withdrawal') &&
      (!withdrawData.address || !withdrawData.amount)
    ) {
      return false;
    }

    if (mode === 'Bank withdrawal') {
      const required = [
        'amount',
        'bankName',
        'accountNumber',
        'accountName',
        'country',
        'swiftCode',
      ];
      for (let field of required) {
        if (!withdrawData[field]) {
          return false;
        }
      }
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateFields()) return;

    const uId = localStorage.getItem('uId');
    if (!uId) return;

    const baseData = {
      userId: uId,
      payment_mode: withdrawData.payment_mode,
      amount: withdrawData.amount,
    };

    if (withdrawData.payment_mode === 'Bank withdrawal') {
      const bankData = {
        ...baseData,
        bankName: withdrawData.bankName,
        accountNumber: withdrawData.accountNumber,
        accountName: withdrawData.accountName,
        country: withdrawData.country,
        swiftCode: withdrawData.swiftCode,
        narration: withdrawData.narration,
      };

      setIsLoading(true);
      api
        .post('bankWithdrawal', bankData)
        .then((res) => {
          if (res.status === 201 && res.data.message === 'true') {
            setModalContent(
              <>
                <p className='font-semibold'>
                  Dear {user?.firstName} {user?.last_Name},
                </p>
                <p className='mt-2'>
                  Your withdrawal request of {user?.currency}
                  {withdrawData?.amount} to your account number{' '}
                  <span className='font-semibold'>
                    {bankData?.accountNumber}
                  </span>{' '}
                  in <span className='font-semibold'>{bankData?.bankName}</span>{' '}
                  has been successfully initiated and is awaiting approval.
                  Please do not resend your request.
                </p>
              </>,
            );
            setShowModal(true);
          }
        })
        .catch(() => {})
        .finally(() => setIsLoading(false));
    } else {
      const cryptoData = {
        ...baseData,
        wallet: withdrawData.address,
        createdAt: withdrawData.createdAt,
      };
      const label = withdrawData.payment_mode.includes('Ethereum')
        ? 'Ethereum'
        : 'Bitcoin';

      setIsLoading(true);
      api
        .post('CryptoWithdrawal', cryptoData)
        .then((res) => {
          if (res.status === 201 && res.data.message === 'true') {
            setModalContent(
              <>
                <p className='font-semibold'>
                  Dear {user?.firstName} {user?.last_Name},
                </p>
                <p className='mt-2'>
                  Your withdrawal request of {user?.currency}
                  {withdrawData?.amount} to your wallet address{' '}
                  <span className='font-semibold'>{withdrawData?.address}</span>{' '}
                  has been successfully initiated and is awaiting approval.
                  Please do not resend your request.
                </p>
              </>,
            );
            setShowModal(true);
          }
        })
        .catch(() => {})
        .finally(() => setIsLoading(false));
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => {
      navigate('/dashboard', { state: { fromWithdraw: true } });
    }, 2000);
  };

  return (
    <div className='bg-[#0a0f1f] flex items-center justify-center p-4 min-h-screen'>
      <form
        onSubmit={handleSubmit}
        className='w-full max-w-3xl bg-[#0a0f1f] rounded-xl p-6 lg:p-10 shadow-lg border border-[#07A658]'
      >
        <h2 className='text-2xl text-[#fff] font-bold text-center mb-6'>
          Withdraw Funds
        </h2>

        <Tab.Group>
          <Tab.List className='flex flex-wrap justify-center gap-3 mb-8'>
            {[
              'Bitcoin Withdrawal',
              'Ethereum Withdrawal',
              'Bank withdrawal',
            ].map((label, index) => (
              <Tab key={index} as={Fragment}>
                {({ selected }) => (
                  <button
                    className={`px-4 py-2 rounded-md text-sm md:text-base font-semibold border-b-2 transition-all duration-200 ${
                      selected
                        ? 'text-[#07A658] border-[#07A658]'
                        : 'text-[#fff] border-transparent hover:text-[#07A658]'
                    }`}
                    onClick={() =>
                      setWithdrawData({
                        ...withdrawData,
                        payment_mode: label,
                        ...(index < 2 ? { amount: '', address: '' } : {}),
                      })
                    }
                  >
                    {label}
                  </button>
                )}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels>
            {[0, 1].map((idx) => (
              <Tab.Panel key={idx}>
                <div className='space-y-6'>
                  <div>
                    <label className='block mb-1 text-[#fff] font-semibold text-sm'>
                      Destination Address
                    </label>
                    <input
                      type='text'
                      name='address'
                      placeholder='Enter Wallet Address'
                      value={withdrawData.address}
                      onChange={handleInputChange}
                      className='w-full px-3 py-2 rounded-md bg-[#0a0f1f] text-[#fff] border border-[#07A658] focus:ring-2 focus:ring-[#07A658]/50 outline-none'
                    />
                  </div>
                  <div>
                    <label className='block mb-1 text-[#fff] font-semibold text-sm'>
                      Withdrawal Amount
                    </label>
                    <input
                      type='number'
                      name='amount'
                      placeholder='Enter amount'
                      value={withdrawData.amount}
                      onChange={handleInputChange}
                      className='w-full px-3 py-2 rounded-md bg-[#0a0f1f] text-[#fff] border border-[#07A658] focus:ring-2 focus:ring-[#07A658]/50 outline-none'
                    />
                  </div>
                  <button
                    type='submit'
                    disabled={isLoading}
                    className='w-full py-2 px-4 rounded-md bg-[#07A658] hover:bg-[#05944f] text-white font-semibold transition'
                  >
                    {isLoading ? 'Loading...' : 'Withdraw'}
                  </button>
                </div>
              </Tab.Panel>
            ))}

            <Tab.Panel>
              <div className='space-y-6'>
                {[
                  {
                    label: 'Withdrawal Amount',
                    name: 'amount',
                    type: 'number',
                  },
                  { label: 'Bank Name', name: 'bankName' },
                  {
                    label: 'Account Number',
                    name: 'accountNumber',
                    type: 'number',
                  },
                  { label: 'Account Name', name: 'accountName' },
                  { label: 'Optima Trade Market', name: 'swiftCode' },
                  { label: 'Country', name: 'country' },
                  { label: 'Narration (Optional)', name: 'narration' },
                ].map((field) => (
                  <div key={field.name}>
                    <label className='block mb-1 text-[#fff] font-semibold text-sm'>
                      {field.label}
                    </label>
                    <input
                      type={field.type || 'text'}
                      name={field.name}
                      placeholder={field.label}
                      value={withdrawData[field.name]}
                      onChange={handleInputChange}
                      className='w-full px-3 py-2 rounded-md bg-[#0a0f1f] text-[#fff] border border-[#07A658] focus:ring-2 focus:ring-[#07A658]/50 outline-none'
                    />
                  </div>
                ))}
                <button
                  type='submit'
                  disabled={isLoading}
                  className='w-full py-2 px-4 rounded-md bg-[#07A658] hover:bg-[#05944f] text-white font-semibold transition'
                >
                  {isLoading ? 'Loading...' : 'Withdraw'}
                </button>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </form>

      {showModal && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='relative w-full max-w-md p-6 bg-green-800 rounded-lg'>
            <button
              onClick={closeModal}
              className='absolute text-gray-500 top-2 right-2 hover:text-gray-700'
            >
              <X className='w-6 h-6 text-white' />
            </button>
            <div className='flex flex-col items-center text-white'>
              <Player
                autoplay
                loop
                src={successAnim}
                style={{ height: '120px', width: '120px' }}
              />
              {modalContent}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Withdrawal;
