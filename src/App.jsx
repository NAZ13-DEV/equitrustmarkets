import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetMessage from "./pages/ResetMessage";
import VerifyEmail from "./pages/VerifyEmail";
import ValidateEmail from "./pages/ValidateEmail";
import VerifyResetPassword from "./pages/VerifyResetPassword";
import ChangePassword from "./pages/ChangePassword";
import ResetPassword from "./pages/ResetPassword";
import PageNotFound from "./pages/PageNotFound";

// Route Guards
import PublicRoute from "./components/routes/PublicRoute";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import OrderExecution from "./pages/OrderExecution";
import { AboutUs } from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import DepositWithdrawal from "./pages/DepositWithdrawal";

// Title Map
const titleMap = {
  "/": "Home | EquitrustMarkets",
  "/home": "Home | EquitrustMarkets",
  "/login": "Login | EquitrustMarkets",
  "/register": "Register | EquitrustMarkets",
  "/forgot_password": "Forgot Password | EquitrustMarkets",
  "/reset_message": "Reset Message | EquitrustMarkets",
  "/verify_email": "Verify Email | EquitrustMarkets",
  "/ValidateEmail": "Validate Email | EquitrustMarkets",
  "/VerifyResetPassword": "Verify Reset Password | EquitrustMarkets",
  "/ChangePassword": "Change Password | EquitrustMarkets",
  "/passwordReset": "Password Reset | EquitrustMarkets",
  "/order-execution": "Order Execution | EquitrustMarkets",
  "/about-us": "About Us | EquitrustMarkets",
  "/contact-us": "Contact Us | EquitrustMarkets",
  "/deposit-withdrawal": "Deposit & Withdrawal | EquitrustMarkets",
  "/dashboard": "Dashboard | EquitrustMarkets",
  "*": "Page Not Found | EquitrustMarkets",

};

// Title Updater Component
const TitleUpdater = () => {
  const location = useLocation();
  useEffect(() => {
    const defaultTitle = "EquitrustMarkets";
    document.title = titleMap[location.pathname] || defaultTitle;
  }, [location.pathname]);
  return null;
};

const App = () => {
  return (
    <Router>
      <TitleUpdater />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<PublicRoute><Home /></PublicRoute>} />
        <Route path="/home" element={<PublicRoute><Home /></PublicRoute>} />
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
        <Route path="/forgot_password" element={<PublicRoute><ForgotPassword /></PublicRoute>} />
        <Route path="/reset_message" element={<PublicRoute><ResetMessage /></PublicRoute>} />
        <Route path="/verify_email" element={<PublicRoute><VerifyEmail /></PublicRoute>} />
        <Route path="/ValidateEmail" element={<PublicRoute><ValidateEmail /></PublicRoute>} />
        <Route path="/VerifyResetPassword" element={<PublicRoute><VerifyResetPassword /></PublicRoute>} />
        <Route path="/ChangePassword" element={<PublicRoute><ChangePassword /></PublicRoute>} />
        <Route path="/order-execution" element={<PublicRoute><OrderExecution /></PublicRoute>} />
        <Route path="/about-us" element={<PublicRoute><AboutUs /></PublicRoute>} />
        <Route path="/contact-us" element={<PublicRoute><ContactUs /></PublicRoute>} />
        <Route path="/deposit-withdrawal" element={<PublicRoute><DepositWithdrawal /></PublicRoute>} />

        {/* Protected Routes */}
        <Route path="/passwordReset" element={<ProtectedRoute><ResetPassword /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />


        {/* Fallback */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
