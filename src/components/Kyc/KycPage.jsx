import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserDetails, clearUserState } from '../../redux/slices/fetchUserSlice';
import UploadProof from './UploadProof';
import KYCStatus from './KycStatus';

const KycPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentState, setCurrentState] = useState('UploadProof');
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.fetchUserDetails);

  useEffect(() => {
    const storedUserId = localStorage.getItem('uId');
    if (storedUserId) {
      dispatch(fetchUserDetails(storedUserId));
    }
    return () => {
      dispatch(clearUserState());
    };
  }, [dispatch]);

  useEffect(() => {
    if (user?.kyc === 'pending' && user?.verifi === 'pending') {
      setCurrentState('PendingKyc');
    }
  }, [user]);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-10 mx-auto max-w-6xl rounded-2xl bg-white border border-[#07A658] shadow-xl">
      <div className="px-2 mb-8 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#142528]">
          KYC Verification
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#3f6870] max-w-xl mx-auto">
          Verify your identity to activate all features of your account.
        </p>
      </div>

      <div className="flex justify-center w-full">
        <div className="w-full max-w-3xl">
          {currentState === 'UploadProof' && (
            <UploadProof isLoading={isLoading} setIsLoading={setIsLoading} />
          )}
          {currentState === 'PendingKyc' && <KYCStatus />}
        </div>
      </div>

      <style>{`
        input[type="text"],
        input[type="email"],
        input[type="file"],
        input[type="number"],
        textarea,
        select {
          background-color: #e6f8ef !important;
          color: #142528 !important;
          border: 1px solid #07A658;
          padding: 0.65rem 1rem;
          border-radius: 0.5rem;
          width: 100%;
          transition: border-color 0.2s ease;
        }

        input:focus,
        textarea:focus,
        select:focus,
        input:hover {
          outline: none;
          border-color: #07A658;
        }

        label {
          color: #3f6870;
          font-size: 0.875rem;
          margin-bottom: 0.25rem;
          display: inline-block;
        }

        .btn-primary {
          background-color: #07A658;
          color: #ffffff;
          padding: 0.5rem 1.5rem;
          border-radius: 0.375rem;
          transition: background-color 0.2s ease;
        }

        .btn-primary:hover {
          background-color: #05944f;
        }
      `}</style>
    </section>
  );
};

export default KycPage;
