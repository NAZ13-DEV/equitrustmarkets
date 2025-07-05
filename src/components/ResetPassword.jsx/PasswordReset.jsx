import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import api from "../../redux/slices/api";
import logo from "../../img/stader-icon.svg";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";

const PasswordReset = () => {
  const [searchParams] = useSearchParams();
  const Email = searchParams.get("e");

  const [email] = useState(Email || "");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePassword = (password) => password.length >= 8;
  const validateConfirmPassword = (password, confirmPassword) => password === confirmPassword;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!email || !password || !confirmPassword) {
      toast.error("All fields are required.");
      setIsLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email.");
      setIsLoading(false);
      return;
    }

    if (!validatePassword(password)) {
      toast.error("Password must be at least 8 characters.");
      setIsLoading(false);
      return;
    }

    if (!validateConfirmPassword(password, confirmPassword)) {
      toast.error("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    try {
      const { status } = await api.post("changePassword", { email, password });
      if (status === 201) {
        toast.success("Your Password Has Been Changed Successfully");
        setTimeout(() => navigate("/login"), 3000);
      }
    } catch (error) {
      const msg = error.response?.status === 422
        ? error.response.data.errors?.[0]
        : "An unexpected error occurred.";
      toast.error(msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center px-4 py-20 bg-white md:py-28 animate-fade-in">
      <Toaster position="top-center" toastOptions={{ style: { background: "#016630", color: "#fff" } }} />

      <div className="flex flex-col w-full max-w-4xl overflow-hidden bg-white border border-green-100 shadow-xl md:flex-row rounded-2xl">
        {/* Left Panel */}
        <div className="flex flex-col justify-center w-full px-8 py-12 text-center text-white bg-gradient-to-br from-green-500 via-green-600 to-green-700 md:w-1/2">
          <a href="/" className="flex justify-center mb-6">
            <img src={logo} alt="logo" className="w-20" />
          </a>
          <p className="text-base font-light text-white">
            Empowering your trades with secure access and trusted protection.
          </p>
        </div>

        {/* Right Panel */}
        <div className="w-full px-6 py-10 bg-white md:w-1/2 md:px-10">
          <h2 className="mb-6 text-2xl font-bold text-center text-green-800">Reset Your Password</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 text-sm font-medium text-green-800">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-2 text-green-900 border border-green-200 rounded-md outline-none bg-green-50 focus:ring-2 focus:ring-green-400"
                value={email}
                readOnly
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-green-800">New Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 text-green-900 border border-green-200 rounded-md outline-none bg-green-50 focus:ring-2 focus:ring-green-400"
                />
                <button
                  type="button"
                  className="absolute text-green-500 transform -translate-y-1/2 right-3 top-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <RiEyeOffLine size={20} /> : <RiEyeLine size={20} />}
                </button>
              </div>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-green-800">Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 text-green-900 border border-green-200 rounded-md outline-none bg-green-50 focus:ring-2 focus:ring-green-400"
                />
                <button
                  type="button"
                  className="absolute text-green-500 transform -translate-y-1/2 right-3 top-1/2"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <RiEyeOffLine size={20} /> : <RiEyeLine size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className={`w-full py-2 text-lg font-semibold text-white rounded-md transition shadow-md ${
                isLoading ? "bg-green-300 cursor-not-allowed" : "bg-[#07A658] hover:bg-[#06994e]"
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Resetting Password..." : "Reset Password"}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default PasswordReset;
