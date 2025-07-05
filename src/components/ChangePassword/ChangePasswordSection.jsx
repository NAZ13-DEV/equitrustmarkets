import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate, useSearchParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import api from '../../redux/slices/api';

const schema = yup.object().shape({
  newPassword: yup.string().min(8, 'Password must be at least 8 characters').required('New password is required'),
  confirmPassword: yup.string().oneOf([yup.ref('newPassword'), null], 'Passwords must match').required('Confirm password is required'),
});

const ChangePasswordSection = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const email = searchParams.get('mail');

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmitPassword = async (data) => {
    const { newPassword, confirmPassword } = data;

    if (!email) {
      toast.error("Invalid email address");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await api.post('changePassword', { email, newPassword });

      if (response.status === 201) {
        toast.success('Password updated successfully!');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Failed to update password');
    }
  };

  return (
    <div className="flex items-center justify-center px-4 py-24 bg-white md:py-36">
      <Toaster position="top-center" toastOptions={{ style: { background: '#016630', color: '#fff' } }} />

      <div className="w-full max-w-xl px-8 py-10 bg-white border border-green-200 shadow-xl rounded-2xl md:px-10 animate-fade-in">
        <h2 className="mb-2 text-2xl font-extrabold text-green-700">Set New Password</h2>
        <p className="mb-6 text-sm text-green-600">Please create a secure password to access your account.</p>

        <form onSubmit={handleSubmit(handleSubmitPassword)} className="space-y-6">
          <div>
            <label className="block mb-1 text-sm font-medium text-green-800">New Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                {...register('newPassword')}
                placeholder="Enter new password"
                className="w-full px-10 py-2 text-green-900 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-green-500"
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
            {errors.newPassword && <p className="mt-1 text-xs text-red-500">{errors.newPassword.message}</p>}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-green-800">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                {...register('confirmPassword')}
                placeholder="Confirm new password"
                className="w-full px-10 py-2 text-green-900 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-2.5 text-green-500"
              >
                {showConfirmPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
            {errors.confirmPassword && <p className="mt-1 text-xs text-red-500">{errors.confirmPassword.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 text-white font-semibold rounded-md transition shadow-md ${
              isSubmitting
                ? 'bg-green-300 cursor-not-allowed'
                : 'bg-[#07A658] hover:bg-[#06994e]'
            }`}
          >
            {isSubmitting ? 'Updating...' : 'Update Password'}
          </button>
        </form>
      </div>

      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ChangePasswordSection;
