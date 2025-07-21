import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import { Eye, EyeOff, Mail, Lock, Loader2 } from 'lucide-react';
import WelcomeLoader from '../Dashboard/WelcomeLoader';
import BigLogo from '../../img/fav.png';
import api from '../../redux/slices/api';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});

const LoginSection = () => {
  const [showPass, setShowPass] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await api.post('ProcessLog', data);

      if (response.status === 201) {
        const { id, UserLogin, dis } = response.data.message;

        if (dis === 'disabled') {
          toast.error('Login failed. Contact brokerage support.');
          return;
        }

        if (UserLogin === 'True') {
          localStorage.setItem('uId', id);
          const getUrl = localStorage.getItem('url') ?? null;
          const redirectUrl = getUrl ? getUrl : '/dashboard';
          localStorage.removeItem('url');

          const expiryTime = new Date();
          expiryTime.setTime(expiryTime.getTime() + 30 * 60 * 1000);
          document.cookie = `uId=${id}; expires=${expiryTime.toUTCString()}; path=/;`;

          toast.success('Authentication successful. Redirecting...');
          setShowWelcome(true);
          setTimeout(() => {
            setShowWelcome(false);
            navigate(redirectUrl);
          }, 3500);
        }
      }
    } catch (error) {
      if (error.response?.status === 422) {
        const regErrors = error.response.data.errors[0];
        toast.error(regErrors);
      } else {
        toast.error('Unexpected broker error.');
      }
    }
  };

  if (showWelcome) return <WelcomeLoader />;

  return (
    <div className="relative flex items-center justify-center bg-white">
      <Toaster position="top-center" toastOptions={{ style: { background: '#142528', color: '#fff' } }} />

      <div className="w-full max-w-5xl p-4 my-6 overflow-hidden bg-white shadow-xl rounded-3xl animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="hidden md:flex flex-col justify-between px-10 py-12 bg-[#f0fbf6]">
            <div className="space-y-4">
              <img src={BigLogo} alt="Equitrustmarkets" className="w-14 h-14" />
              <h2 className="text-3xl font-bold text-[#142528]">Welcome back</h2>
              <p className="text-[#3f6870] text-sm leading-relaxed">
                Secure gateway to advanced broker tools. Track portfolio, manage margin, and stay in control.
              </p>
            </div>
            <ul className="mt-8 space-y-2 text-sm font-medium text-[#3f6870]">
              <li>✔ Professional Dashboard</li>
              <li>✔ Real-time Analytics</li>
              <li>✔ 24/7 Broker Support</li>
              <li>✔ Smart Risk Control</li>
            </ul>
          </div>

          <div className="flex flex-col justify-center px-8 py-10">
            <div className="w-full max-w-md mx-auto">
              <h2 className="text-2xl font-bold text-[#142528] mb-1">Sign in to Broker Portal</h2>
              <p className="text-sm text-[#3f6870] mb-6">Access your account and trading suite</p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm text-[#3f6870] mb-1">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 w-5 h-5 text-[#07A658]" />
                    <input
                      type="email"
                      {...register('email')}
                      placeholder="you@broker.com"
                      className="w-full pl-10 pr-4 py-2 border border-[#07A658] text-[#142528] bg-[#f7fffa] rounded-md focus:outline-none focus:ring-2 focus:ring-[#07A658]"
                    />
                  </div>
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-sm text-[#3f6870] mb-1">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 w-5 h-5 text-[#07A658]" />
                    <input
                      type={showPass ? 'text' : 'password'}
                      {...register('password')}
                      placeholder="Enter password"
                      className="w-full pl-10 pr-10 py-2 border border-[#07A658] text-[#142528] bg-[#f7fffa] rounded-md focus:outline-none focus:ring-2 focus:ring-[#07A658]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPass(!showPass)}
                      className="absolute right-3 top-2.5 text-[#3f6870]"
                    >
                      {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>}
                </div>

                <div className="flex justify-between text-sm text-[#3f6870]">
                  <Link to="/forgot_password" className="hover:underline">
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-2 rounded-md font-semibold text-white transition shadow-lg text-lg ${
                    isSubmitting ? 'bg-[#07A658]/60 cursor-not-allowed' : 'bg-[#07A658] hover:bg-[#059c4d]'
                  }`}
                >
                  {isSubmitting ? <Loader2 className="w-4 h-4 mx-auto animate-spin" /> : 'Login'}
                </button>
              </form>

              <p className="mt-6 text-sm text-center text-[#3f6870]">
                Don't have an account?{' '}
                <Link to="/register" className="text-[#07A658] font-semibold hover:underline">
                  Create one now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default LoginSection;
