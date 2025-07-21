import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../redux/slices/api';
import toast, { Toaster } from 'react-hot-toast';

const UploadProof = ({ isLoading, setIsLoading, plan }) => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file || file.size === 0) {
      toast.error('Your proof of plan subscription is empty');
      return;
    }

    const sessionGetUserID = localStorage.getItem('uId');
    if (!sessionGetUserID) {
      toast.error('User session not found. Please log in again.');
      return;
    }
    const createdAt = new Date().toLocaleString("en-US", {
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
    });

    const LoginData = new FormData();
    LoginData.append('id', sessionGetUserID);
    LoginData.append('documents', file);
    LoginData.append('plan', plan);
    LoginData.append('createAt', createdAt);

    try {
      setIsLoading(true);
      const response = await api.post('uploadproof', LoginData);

      if (response.status === 201 && response.data.message === 'true') {
        toast.success('Your proof of plan subscription has been submitted');
        setTimeout(() => {
          navigate('/dashboard', { state: { fromUpload: true } });
        }, 2000);
      }
    } catch (error) {
      console.error(error);
      if (error.response?.status === 422) {
        try {
          const parsedMessage = JSON.parse(error.response.data);
          toast.error(parsedMessage);
        } catch {
          toast.error('Validation error occurred.');
        }
      } else {
        toast.error('An error occurred. Please try again.');
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
      `}</style>
      <div className="col-span-12 px-2 sm:px-4 py-6 bg-[#0a0f1f] rounded-xl max-w-2xl mx-auto animate-fade-in">
        <Toaster position="top-center" />
        <form onSubmit={handleUpload}>
          <div className="flex flex-col gap-6">
            <h5 className="text-lg sm:text-xl font-bold text-[#fff] text-center animate-fade-in">
              Upload Proof of Software Subscription
            </h5>

            <input
              type="file"
              onChange={handleFileChange}
              className="w-full px-4 py-2 text-[#fff] bg-[#0a0f1f] border border-[#045e18] rounded-md focus:outline-none focus:ring-2 focus:ring-[#07A658] transition-all duration-300 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:bg-[#07A658] file:text-white file:rounded-md file:hover:bg-[#07A658]/80 file:animate-pulse-hover animate-fade-in delay-100"
            />

            <button
              type="submit"
              className="w-full py-2 rounded-md text-white font-semibold bg-[#07A658] hover:bg-[#07A658]/80 transition-all duration-300 animate-pulse-hover animate-fade-in delay-200"
              disabled={isLoading}
            >
              {isLoading ? 'Uploading...' : 'Upload Payment'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UploadProof;