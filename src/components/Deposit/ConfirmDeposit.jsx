import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../redux/slices/api';
import toast, { Toaster } from 'react-hot-toast';

export default function UploadProof({ isLoading, setIsLoading }) {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file || file.size === 0) {
      toast.error('Your proof of payment is empty');
      return;
    }

    const sessionGetUserID = localStorage.getItem('uId');
    if (!sessionGetUserID) {
      toast.error('User session not found. Please log in again.');
      return;
    }
 const createdAt= new Date().toLocaleString("en-US", {
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
 });
    const formData = new FormData();
    formData.append('id', sessionGetUserID);
    formData.append('documents', file);
    formData.append('createAt', createdAt);

    try {
      setIsLoading(true);
      const response = await api.post('uploadproof', formData);

      if (response.status === 201 && response.data.message === 'true') {
        toast.success('Your proof of payment has been submitted');
        setTimeout(() => {
          navigate('/dashboard', { state: { fromUpload: true } });
        }, 3000);
      }
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 422) {
        try {
          const parsedMessage = JSON.parse(error.response.data);
          toast.error(parsedMessage);
        } catch {
          toast.error('Invalid response from server.');
        }
      } else {
        toast.error('An error occurred. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="col-span-12 p-6 rounded-xl bg-[#0a0f1f]  shadow-md animate-fade-in lg:px-10 xl:col-span-12">
    <Toaster position="top-center" />
    <form onSubmit={handleUpload}>
      <div className="flex flex-col items-center justify-center gap-6 mb-6">
        <h5 className="text-xl font-bold text-[#fff] text-center">
          Upload Proof of Payment
        </h5>

        <input
          type="file"
          onChange={handleFileChange}
          className="w-full px-4 py-3 bg-[#0a0f1f] text-[#fff] border border-[#07A658] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#07A658]"
        />

        <button
          type="submit"
          className="w-full px-4 py-3 text-white bg-[#07A658] hover:bg-[#059b4e] rounded-lg font-semibold transition duration-300"
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Upload Payment'}
        </button>
      </div>
    </form>
  </div>
  );
}
