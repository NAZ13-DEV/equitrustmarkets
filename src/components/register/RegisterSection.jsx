import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import toast, { Toaster } from "react-hot-toast";
import countries from "country-list";
import { Eye, EyeOff, Mail, Lock, ChevronRight, ChevronLeft } from "lucide-react";
import { registerUser } from "../../redux/slices/userSlice";

const countryList = countries.getData();

const validationSchema = Yup.object().shape({
  username: Yup.string().min(3).max(15).required("Username is required"),
  firstName: Yup.string().required("First name is required"),
  last_Name: Yup.string().required("Last name is required"),
  phone: Yup.string().required("Phone number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(8).required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm your password"),
});

const RegisterSection = () => {
  const [step, setStep] = useState(1);
  const [countryInput, setCountryInput] = useState("");
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, message, error } = useSelector((state) => state.registerUser);

  const filteredCountries = countryList.filter((country) =>
    country.name.toLowerCase().includes(countryInput.toLowerCase())
  );

  const formik = useFormik({
    initialValues: {
      username: "",
      firstName: "",
      last_Name: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
      referral: "",
      dateOc: new Date().toLocaleString("en-US", {
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      }),
    },
    validationSchema,
    onSubmit: async (values) => {
      dispatch(registerUser(values));
    },
  });

  const handleSubmitCheck = async (e) => {
    e.preventDefault();
    const errors = await formik.validateForm();
    const values = formik.values;

    const allFieldsFilled =
      values.username &&
      values.firstName &&
      values.last_Name &&
      values.email &&
      values.password &&
      values.confirmPassword;

    const phoneEmpty = !values.phone;

    if (Object.keys(errors).length > 0) {
      if (allFieldsFilled && phoneEmpty) {
        toast.error("Please fill in the country field properly By clicking to select country");
      } else {
        toast.error("Please fill all fields correctly");
      }
      return;
    }

    formik.handleSubmit();
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setCountryInput(country.name);
    setShowCountryDropdown(false);
    formik.setFieldValue("phone", `+${country.code}`);
  };

  const handlePhoneChange = (value) => {
    formik.setFieldValue("phone", `+${value}`);
  };

  useEffect(() => {
    if (error) toast.error(error);
    if (message === "true") {
      toast.success("Registration successful!");
      setTimeout(() => navigate("/verify_email"), 2000);
    }
  }, [error, message, navigate]);

  return (
    <div className="flex items-center justify-center px-4 py-12 bg-white">
      <Toaster position="top-center" toastOptions={{ style: { background: "#142528", color: "#fff" } }} />
      <div className="grid w-full max-w-6xl grid-cols-1 my-6 overflow-hidden bg-white shadow-xl rounded-3xl md:grid-cols-2">
        {/* Left Panel */}
        <div className="bg-gradient-to-r from-[#007A5E] to-[#00C897] text-white p-10 flex flex-col justify-center space-y-6 animate-slide-in-left">
          <h1 className="text-2xl font-extrabold leading-snug md:text-4xl">Join Equitrustmarkets</h1>
          <p className="text-lg opacity-90">The smartest way to trade globally. Enjoy institutional-grade tools, 24/7 support, and secure asset control.</p>
          <ul className="space-y-2">
            <li>✔ Real-time analytics</li>
            <li>✔ Unified dashboard</li>
            <li>✔ Lightning-fast onboarding</li>
          </ul>
        </div>

        {/* Right Panel */}
        <div className="relative p-10">
          <div className="flex justify-center gap-4 mb-6">
            {[1, 2].map((s) => (
              <button
                key={s}
                onClick={() => setStep(s)}
                className={`w-10 h-10 rounded-full border-2 transition duration-300 flex items-center justify-center text-sm font-bold
                  ${step === s ? "bg-[#07A658] text-white border-[#07A658] shadow-md shadow-green-300" : "border-[#07A658] text-[#07A658] hover:bg-[#e6f8ef]"}`}
              >
                {s}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmitCheck} className="space-y-6">
            {step === 1 && (
              <div className="space-y-4 animate-fade-in">
                {['username', 'firstName', 'last_Name'].map((field) => (
                  <div key={field}>
                    <label className="block text-sm text-[#3f6870] capitalize mb-1">{field.replace("_", " ")}</label>
                    <input
                      name={field}
                      value={formik.values[field]}
                      onChange={formik.handleChange}
                      className="w-full px-4 py-2 border-2 border-transparent focus:border-[#07A658] rounded-md shadow-sm focus:shadow-green-200 focus:outline-none"
                      placeholder={field.replace("_", " ")}
                    />
                    {formik.touched[field] && formik.errors[field] && (
                      <p className="mt-1 text-xs text-red-500">{formik.errors[field]}</p>
                    )}
                  </div>
                ))}
                <div>
                  <label className="block text-sm text-[#3f6870] mb-1">Country</label>
                  <input
                    type="text"
                    value={countryInput}
                    onFocus={() => setShowCountryDropdown(true)}
                    onChange={(e) => setCountryInput(e.target.value)}
                    className="w-full px-4 py-2 border-2 border-transparent focus:border-[#07A658] rounded-md shadow-sm focus:shadow-green-200 focus:outline-none"
                    placeholder="Select country"
                  />
                  {showCountryDropdown && (
                    <div className="mt-1 max-h-40 overflow-y-auto border border-[#07A658] rounded-md bg-white shadow">
                      {filteredCountries.map((country) => (
                        <div
                          key={country.code}
                          onClick={() => handleCountrySelect(country)}
                          className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-[#e6f8ef]"
                        >
                          <img
                            src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
                            alt={country.code}
                            className="object-cover w-5 h-4 rounded"
                          />
                          {country.name} ({country.code})
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {selectedCountry && (
                  <div>
                    <label className="block text-sm text-[#3f6870] mb-1">Phone</label>
                    <PhoneInput
                      country={selectedCountry.code.toLowerCase()}
                      enableSearch
                      value={formik.values.phone}
                      onChange={handlePhoneChange}
                      inputClass="!w-full !bg-white !text-[#142528] !border !border-[#07A658] !rounded-md !pl-12 !py-2"
                      containerClass="!w-full"
                      buttonClass="hidden"
                      countryCodeEditable={false}
                    />
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full py-3 bg-[#07A658] text-white rounded-md font-semibold hover:bg-[#06994e] transition duration-300 shadow-lg"
                >
                  Next <ChevronRight size={18} className="inline-block ml-2" />
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4 animate-fade-in">
                {["email", "password", "confirmPassword"].map((field) => (
                  <div key={field} className="relative">
                    <label className="block text-sm text-[#3f6870] mb-1">{field.replace("Password", " Password")}</label>
                    <input
                      type={
                        (field === "password" && !showPassword) ||
                        (field === "confirmPassword" && !showConfirmPassword)
                          ? "password"
                          : "text"
                      }
                      name={field}
                      value={formik.values[field]}
                      onChange={formik.handleChange}
                      className="w-full px-10 py-2 border-2 border-transparent focus:border-[#07A658] rounded-md shadow-sm focus:shadow-green-200 focus:outline-none"
                      placeholder={field.includes("Password") ? "••••••••" : "Enter your email"}
                    />
                    <div className="absolute left-3 top-[38px] text-gray-500">
                      {field.includes("email") ? <Mail size={18} /> : <Lock size={18} />}
                    </div>
                    {(field === "password" || field === "confirmPassword") && (
                      <button
                        type="button"
                        onClick={() =>
                          field === "password"
                            ? setShowPassword((prev) => !prev)
                            : setShowConfirmPassword((prev) => !prev)
                        }
                        className="absolute right-3 top-[38px] text-gray-500"
                      >
                        {(field === "password" && showPassword) ||
                        (field === "confirmPassword" && showConfirmPassword) ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    )}
                    {formik.touched[field] && formik.errors[field] && (
                      <p className="mt-1 text-xs text-red-500">{formik.errors[field]}</p>
                    )}
                  </div>
                ))}
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex items-center gap-2 px-6 py-2 border border-[#07A658] rounded-md text-[#07A658] hover:bg-[#e6f8ef]"
                  >
                    <ChevronLeft size={18} /> Back
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className={`py-3 px-6 rounded-md text-white font-semibold transition duration-300 shadow-md
                      ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#07A658] hover:bg-[#06994e]"}`}
                  >
                    {loading ? "Registering..." : "Register"}
                  </button>
                </div>
              </div>
            )}
          </form>

          <p className="mt-8 text-sm text-center text-[#3f6870]">
            Already have an account? <Link to="/login" className="text-[#07A658] font-semibold hover:underline">Login</Link>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes slide-in-left {
          0% { transform: translateX(-30px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-in forwards;
        }
      `}</style>
    </div>
  );
};

export default RegisterSection;
