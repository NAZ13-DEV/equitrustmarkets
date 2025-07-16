/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import api from '../../redux/slices/api';
import { fetchUserDetails, clearUserState } from '../../redux/slices/fetchUserSlice';

const UploadPhoto = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserId = localStorage.getItem('uId');
    if (storedUserId) {
      dispatch(fetchUserDetails(storedUserId));
    }

    return () => {
      dispatch(clearUserState());
    };
  }, [dispatch]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file || file.size === 0) {
      toast.error('Your profile picture is empty.');
      return;
    }

    const sessionUserId = localStorage.getItem('uId');
    if (!sessionUserId) {
      toast.error('User session not found. Please log in again.');
      return;
    }

    const createdAt = new Date().toLocaleString('en-US', {
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    });

    const formData = new FormData();
    formData.append('id', sessionUserId);
    formData.append('documents', file);
    formData.append('createdAt', createdAt);

    try {
      setIsLoading(true);
      const response = await api.post('updateProfilePics', formData);

      if (response.status === 201 && response.data.message) {
        toast.success(response.data.message);
        setTimeout(() => {
          navigate('/dashboard', { state: { photoUpload: true } });
        }, 2000);
      } else {
        toast.error('Upload failed. Please try again.');
      }
    } catch (error) {
      console.error(error);
      toast.error('Upload failed. Try again.');
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
      <div className="flex justify-center items-center bg-[#e6f8ef] px-4 sm:px-6 py-8  animate-fade-in">
        <Toaster position="top-center" />
        <form
          onSubmit={handleUpload}
          className="w-full max-w-md bg-[#e6f8ef]/80 backdrop-blur-sm rounded-xl shadow-xl p-6 sm:p-8 border border-[#3f6870]/50"
        >
          <div className="mb-6 text-center sm:mb-8">
            <h5 className="text-2xl sm:text-3xl font-bold text-[#142528] animate-fade-in">
              Upload Your Desired Profile Picture
            </h5>
            <div className="w-16 h-1 bg-gradient-to-r from-[#07A658] to-[#3f6870] rounded-full mx-auto mt-2"></div>
          </div>

          <input
            type="file"
            onChange={handleFileChange}
            className="w-full px-4 py-3 sm:py-4 text-base text-[#3f6870] bg-[#e6f8ef] border border-[#3f6870]/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#07A658] transition-all duration-300 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:bg-[#07A658] file:text-white file:rounded-md file:hover:bg-[#07A658]/80 file:animate-pulse-hover animate-fade-in delay-100"
          />

          <button
            type="submit"
            className="mt-6 sm:mt-8 w-full px-6 py-3 sm:py-4 text-base sm:text-lg text-white font-semibold rounded-xl bg-[#07A658] hover:bg-[#07A658]/80 active:scale-95 transition-all duration-300 shadow-md animate-pulse-hover animate-fade-in delay-200"
            disabled={isLoading}
          >
            {isLoading ? 'Uploading...' : 'Proceed'}
          </button>
        </form>
      </div>
    </>
  );
};

export default UploadPhoto;