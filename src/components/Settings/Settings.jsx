import React, { useEffect, useState, Fragment } from "react";
import { Tab } from "@headlessui/react";
import { Eye, EyeOff } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetails, clearUserState } from "../../redux/slices/fetchUserSlice";
import api from "../../redux/slices/api";
import toast, { Toaster } from "react-hot-toast";
import userProfile from "../../../public/userProfile.svg";

const Settings = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.fetchUserDetails);

  const [formData, setFormData] = useState({
    firstName: "",
    last_Name: "",
    Username: "",
    email: "",
    Phone: "",
    country: "",
    Plan: "",
    dateOc: "",
    userid: "",
    id: "",
  });

  const [passwordData, setPasswordData] = useState({
    newPassword: "",
    confirmNewPassword: "",
    createdAt: new Date().toLocaleString("en-US", {
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    }),
  });
  const [currentPassword, setCurrentPassword] = useState("");

  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  useEffect(() => {
    const storedUserId = localStorage.getItem("uId");
    if (storedUserId) dispatch(fetchUserDetails(storedUserId));
    return () => dispatch(clearUserState());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user?.firstName || "",
        last_Name: user?.last_Name || "",
        Username: user?.Username || "",
        email: user?.email || "",
        Phone: user?.Phone || "",
        country: user?.country || "",
        Plan: user?.Plan || "",
        userid: user?.userid || "",
        id: user?.id || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleVisibility = (type) => {
    setShowPassword((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    const loading = toast.loading("Updating profile...");
    try {
      await api.put(`edituserByUser/${formData.id}`, formData);
      toast.success("Profile updated!", { id: loading });
    } catch {
      toast.error("Failed to update profile.", { id: loading });
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    const { newPassword, confirmNewPassword } = passwordData;
    if (!currentPassword || !newPassword || !confirmNewPassword)
      return toast.error("All password fields are required");

    if (newPassword !== confirmNewPassword)
      return toast.error("Passwords do not match");

    const loading = toast.loading("Updating password...");
    try {
      await api.put(`editpassByUser/${formData.id}`, {
        currentPassword,
        newPassword,
        confirmNewPassword,
        createdAt: passwordData.createdAt,
      });
      toast.success("Password updated!", { id: loading });
      setCurrentPassword("");
      setPasswordData({
        newPassword: "",
        confirmNewPassword: "",
        createdAt: passwordData.createdAt,
      });
    } catch {
      toast.error("Failed to update password.", { id: loading });
    }
  };

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInPanel {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        @keyframes imageHover {
          0% { transform: scale(1); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
          100% { transform: scale(1.05); box-shadow: 0 6px 12px rgba(7, 166, 88, 0.2); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-fade-in-panel {
          animation: fadeInPanel 0.3s ease-out;
        }
        .animate-pulse-hover:hover {
          animation: pulse 0.3s ease-in-out;
          transform: scale(1.05);
        }
        .animate-image-hover:hover {
          animation: imageHover 0.3s ease-in-out forwards;
        }
        .tab-indicator {
          position: relative;
        }
        .tab-indicator::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(to right, #07A658, #3f6870);
          transition: all 0.3s ease-in-out;
        }
      `}</style>
      <div className="min-h-screen bg-[#0a0f1f] p-4 sm:p-6 lg:p-8 text-[#3f6870] animate-fade-in">
        <Toaster position="top-center" />
        <div className="bg-[#0a0f1f] backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto border border-[#0bf33e] shadow-xl">
          <div className="mb-6 text-center sm:mb-8">
            <img
              src={user?.img || userProfile}
              alt="Profile"
              className="mx-auto rounded-full w-24 h-24 sm:w-28 sm:h-28 border-4 border-[#0bf33e] shadow-md animate-image-hover"
            />
            <h2 className="text-[#fff] text-2xl sm:text-3xl font-bold mt-3">
              {formData.firstName} {formData.last_Name}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#07A658] to-[#08e05e] rounded-full mx-auto mt-2"></div>
          </div>

          <Tab.Group>
            <Tab.List className="flex gap-6 sm:gap-8 border-b border-[#3f6870]/50 pb-2 mb-6 sm:mb-8">
              {["Profile", "Change Password"].map((tab) => (
                <Tab as={Fragment} key={tab}>
                  {({ selected }) => (
                    <button
                      className={`text-sm sm:text-base font-semibold pb-2 transition duration-300 ${
                        selected
                          ? "text-[#fff] border-b-2 border-[#34a607] tab-indicator"
                          : "text-[#fff] hover:text-[#0bf33e] hover:border-b-2 hover:border-[#07A658]/80"
                      }`}
                    >
                      {tab}
                    </button>
                  )}
                </Tab>
              ))}
            </Tab.List>

            <Tab.Panels>
              {/* PROFILE TAB */}
              <Tab.Panel className="animate-fade-in-panel">
                <form onSubmit={handleProfileSubmit} className="grid grid-cols-1 gap-4 lg:grid-cols-2 sm:gap-6">
                  {["firstName", "last_Name", "Username", "email", "Phone", "country"].map((field) => (
                    <div key={field}>
                      <label className="block text-sm sm:text-base font-medium mb-1 capitalize text-[#fff]">
                        {field}
                      </label>
                      <input
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        className="w-full px-4 py-2 sm:py-3 rounded-xl bg-[#0a0f1f] border border-[#0bf33e]/50 text-[#fff] placeholder-[#fff]/70 hover:border-[#07A658]/80 focus:ring-2 focus:ring-[#07A658] focus:border-[#07A658] outline-none transition-all duration-300"
                        placeholder={`Enter ${field}...`}
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block text-sm sm:text-base font-medium mb-1 text-[#fff]">
                      Plan
                    </label>
                    <input
                      name="Plan"
                      value={formData.Plan}
                      onChange={handleChange}
                      className="w-full px-4 py-2 sm:py-3 rounded-xl bg-[#0a0f1f] border border-[#0bf33e]/50 text-[#fff] placeholder-[#fff]/70 hover:border-[#07A658]/80 focus:ring-2 focus:ring-[#07A658] focus:border-[#07A658] outline-none transition-all duration-300"
                      placeholder="none"
                      readOnly
                    />
                  </div>

                  <div>
                    <label className="block text-sm sm:text-base font-medium mb-1 text-[#fff]">
                      Created At
                    </label>
                    <input
                      name="createdAt"
                      value={user?.dateOc}
                      readOnly
                      className="w-full px-4 py-2 sm:py-3 rounded-xl bg-[#0a0f1f] border border-[#0bf33e]/50 text-[#fff] cursor-not-allowed"
                    />
                  </div>

                  <div>
                    <label className="block text-sm sm:text-base font-medium mb-1 text-[#fff]">
                      User ID
                    </label>
                    <input
                      name="userid"
                      value={formData.userid}
                      readOnly
                      className="w-full px-4 py-2 sm:py-3 rounded-xl bg-[#0a0f1f] border border-[#0bf33e]/50 text-[#fff] cursor-not-allowed"
                    />
                  </div>

                  <div className="flex justify-center mt-4 lg:col-span-2">
                    <button
                      type="submit"
                      className="px-6 py-2 sm:py-3 rounded-xl text-white font-semibold bg-[#07A658] hover:bg-[#07A658]/80 transition-all duration-300 shadow-md animate-pulse-hover"
                    >
                      Update Profile
                    </button>
                  </div>
                </form>
              </Tab.Panel>

              {/* PASSWORD TAB */}
              <Tab.Panel className="animate-fade-in-panel">
                <form onSubmit={handlePasswordSubmit} className="space-y-4 sm:space-y-6">
                  <div className="relative">
                    <label className="block mb-1 text-sm sm:text-base font-medium text-[#fff]">
                      Old Password
                    </label>
                    <input
                      type={showPassword.current ? "text" : "password"}
                      name="currentPassword"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      autoComplete="new-password"
                      placeholder="Old Password"
                      className="w-full px-4 py-2 sm:py-3 rounded-xl bg-[#0a0f1f] border border-[#0bf33e]/50 text-[#fff] placeholder-[#fff]/70 hover:border-[#07A658]/80 focus:ring-2 focus:ring-[#07A658] focus:border-[#07A658] outline-none transition-all duration-300"
                    />
                    <span
                      onClick={() => toggleVisibility("current")}
                      className="absolute right-3 top-9 sm:top-10 text-[#fff] cursor-pointer"
                    >
                      {showPassword.current ? <EyeOff size={18} /> : <Eye size={18} />}
                    </span>
                  </div>

                  {[["newPassword", "New Password", "new"], ["confirmNewPassword", "Confirm Password", "confirm"]].map(
                    ([name, label, type]) => (
                      <div className="relative" key={name}>
                        <label className="block mb-1 text-sm sm:text-base font-medium text-[#fff]">
                          {label}
                        </label>
                        <input
                          type={showPassword[type] ? "text" : "password"}
                          name={name}
                          value={passwordData[name]}
                          onChange={handlePasswordChange}
                          autoComplete="new-password"
                          placeholder={label}
                          className="w-full px-4 py-2 sm:py-3 rounded-xl bg-[#0a0f1f] border border-[#0bf33e]/50 text-[#3f6870] placeholder-[#fff]/70 hover:border-[#07A658]/80 focus:ring-2 focus:ring-[#07A658] focus:border-[#07A658] outline-none transition-all duration-300"
                        />
                        <span
                          onClick={() => toggleVisibility(type)}
                          className="absolute right-3 top-9 sm:top-10 text-[#fff] cursor-pointer"
                        >
                          {showPassword[type] ? <EyeOff size={18} /> : <Eye size={18} />}
                        </span>
                      </div>
                    )
                  )}

                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="px-6 py-2 sm:py-3 rounded-xl text-white font-semibold bg-[#07A658] hover:bg-[#07A658]/80 transition-all duration-300 shadow-md animate-pulse-hover"
                    >
                      Update Password
                    </button>
                  </div>
                </form>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </>
  );
};

export default Settings;