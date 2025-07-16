import { useState, useEffect } from "react";
import api from "../../redux/slices/api";
import toast, { Toaster } from "react-hot-toast";
import { fetchNotifications } from "../../redux/slices/fetchNotiSlice";
import { fetchUserDetails } from "../../redux/slices/fetchUserSlice";
import { useDispatch, useSelector } from "react-redux";
import KYCStatus from "./KycStatus";

export default function UploadProof() {
  const [selectedOption, setSelectedOption] = useState("Passport");
  const [frontFile, setFrontFile] = useState(null);
  const [backFile, setBackFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPending, setShowPending] = useState(false);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.fetchUserDetails);

  useEffect(() => {
    dispatch(fetchNotifications());
    const storedUserId = localStorage.getItem("uId");
    if (storedUserId) {
      dispatch(fetchUserDetails(storedUserId));
    }
  }, [dispatch]);

  useEffect(() => {
    if (user?.kyc === "pending" && user?.verifi === "true") {
      setShowPending(true);
    }
  }, [user]);

  const handleOptionChange = (e) => setSelectedOption(e.target.value);
  const handleFrontChange = (e) => setFrontFile(e.target.files[0]);
  const handleBackChange = (e) => setBackFile(e.target.files[0]);

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!frontFile || (selectedOption === "Driving License" && !backFile)) {
      toast.error("Please upload the required files!");
      return;
    }

    const storedUserId = localStorage.getItem("uId");
    const formData = new FormData();
    const createdAt = new Date().toLocaleString('en-US', {
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    });
    formData.append("frontFile", frontFile);
    if (selectedOption === "Driving License") {
      formData.append("backFile", backFile);
    }
    formData.append("kycType", selectedOption);
    formData.append("userid", storedUserId);
    formData.append("createdAt", createdAt);

    setIsLoading(true);
    try {
      const response = await api.post("uploadriverKyc", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 201) {
        toast.success("KYC uploaded successfully!");
        setTimeout(() => {
          setShowPending(true);
        }, 4000);
      }
    } catch (error) {
      console.error("Error uploading KYC:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (showPending) return <KYCStatus />;

  return (
    <div className="col-span-12 p-6 rounded-2xl bg-white shadow-md border border-[#07A658] transition-all duration-500 ease-in-out animate-fade-in xl:col-span-12 w-full">
      <Toaster position="top-center" />
      <form onSubmit={handleUpload} className="space-y-6">
        <h5 className="text-xl font-bold text-[#142528] text-center">
          KYC Verification
        </h5>

        <select
          value={selectedOption}
          onChange={handleOptionChange}
          className="w-full px-4 py-3 bg-[#e6f8ef] text-[#3f6870] rounded-lg border border-[#07A658] focus:outline-none focus:ring-2 focus:ring-[#07A658]"
        >
          <option value="Passport">Passport</option>
          <option value="Driving License">Driving License</option>
        </select>

        <div>
          <label className="block mb-2 text-sm text-[#3f6870] font-medium">Front Cover</label>
          <input
            type="file"
            onChange={handleFrontChange}
            className="w-full px-4 py-2 bg-[#e6f8ef] text-[#142528] rounded-lg border border-[#07A658] focus:outline-none"
          />
        </div>

        {selectedOption === "Driving License" && (
          <div>
            <label className="block mb-2 text-sm text-[#3f6870] font-medium">Back Cover</label>
            <input
              type="file"
              onChange={handleBackChange}
              className="w-full px-4 py-2 bg-[#e6f8ef] text-[#142528] rounded-lg border border-[#07A658] focus:outline-none"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full px-4 py-2 font-semibold text-white bg-[#07A658] rounded-lg hover:bg-[#059b4e] transition-all duration-300"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Submit KYC"}
        </button>
      </form>
    </div>
  );
}
