import { useForm } from "react-hook-form";
import { Mail } from "lucide-react";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import BigLogo from "../../img/stader-icon.svg";
import api from "../../redux/slices/api"; // Adjust path as needed

const ForgotPasswordSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async ({ email }) => {
    if (!email) {
      toast.error("Email is required.");
      return;
    }

    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    if (!isValidEmail) {
      toast.error("Please enter a valid email.");
      return;
    }

    const userData = { email };

    try {
      const response = await api.post("ProcessReset", userData);
      if (response.status === 201) {
        toast.success("Reset Link Has Been Sent Successfully");
        reset();
        setTimeout(() => {
          navigate("/reset_message");
        }, 3000);
      }
    } catch (error) {
      if (error.response?.status === 422) {
        const regErrors = error.response.data.errors[0];
        toast.error(regErrors);
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="relative px-4 py-24 overflow-hidden bg-white md:py-36">
      <Toaster
        position="top-center"
        toastOptions={{ style: { background: "#142528", color: "#fff" } }}
      />

      {/* Background Glow */}
      <div className="absolute z-0 bg-green-300 rounded-full -top-10 -left-10 w-72 h-72 md:w-80 md:h-80 filter blur-3xl opacity-30 animate-pulse-slow" />
      <div className="absolute z-0 bg-green-400 rounded-full -bottom-20 -right-10 w-80 h-80 md:w-96 md:h-96 filter blur-3xl opacity-30 animate-pulse-slower" />

      <div className="relative z-10 flex flex-col max-w-4xl mx-auto overflow-hidden bg-white border border-green-200 shadow-2xl md:grid md:grid-cols-2 rounded-2xl">
        {/* Left Side */}
        <div className="flex flex-col items-center justify-center px-6 py-10 text-center border-b border-green-100 bg-gradient-to-br from-green-50 to-white md:border-r md:border-b-0 md:text-left md:px-10">
          <h1 className="text-3xl font-extrabold leading-snug text-green-800 md:text-4xl">
            Forgot Your <br className="hidden md:block" /> Password?
          </h1>
          <p className="max-w-xs mt-3 text-sm text-green-700 md:max-w-sm">
            No worries — we'll send you a secure reset link so you can regain
            access.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-center px-6 py-10 bg-white sm:px-10">
          <div className="flex justify-center mb-6">
            <a href="/">
              <img
                src={BigLogo}
                alt="Logo"
                className="w-14 h-14 md:w-16 md:h-16"
              />
            </a>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-green-900"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute w-5 h-5 text-green-400 transform -translate-y-1/2 left-3 top-1/2" />
                <input
                  id="email"
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  placeholder="Enter your email"
                  className="w-full py-2 pl-10 pr-4 text-green-900 transition border border-green-200 rounded-md focus:outline-none focus:ring-4 focus:ring-green-300"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2 text-lg font-semibold rounded-md shadow-md transition duration-200 ${
                isSubmitting
                  ? "bg-green-300 cursor-not-allowed"
                  : "bg-[#07A658] hover:bg-[#06994e] text-white"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Instructions"}
            </button>
          </form>
        </div>
      </div>

      <style>{`
      @keyframes pulse-slow {
        0%, 100% { transform: scale(1); opacity: 0.3; }
        50% { transform: scale(1.05); opacity: 0.5; }
      }
      @keyframes pulse-slower {
        0%, 100% { transform: scale(1); opacity: 0.25; }
        50% { transform: scale(1.1); opacity: 0.4; }
      }
      .animate-pulse-slow {
        animation: pulse-slow 6s ease-in-out infinite;
      }
      .animate-pulse-slower {
        animation: pulse-slower 10s ease-in-out infinite;
      }
    `}</style>
    </div>
  );
};

export default ForgotPasswordSection;
