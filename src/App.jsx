import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ResetMessage from './pages/ResetMessage';
import VerifyEmail from './pages/VerifyEmail';
import ValidateEmail from './pages/ValidateEmail';
import VerifyResetPassword from './pages/VerifyResetPassword';
import ChangePassword from './pages/ChangePassword';
import ResetPassword from './pages/ResetPassword';
import PageNotFound from './pages/PageNotFound';

// Route Guards
import PublicRoute from './components/routes/PublicRoute';
import ProtectedRoute from './components/routes/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import OrderExecution from './pages/OrderExecution';
import { AboutUs } from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import DepositWithdrawal from './pages/DepositWithdrawal';
import StandardAccount from './pages/StandardAccount';
import ProfessionalAccount from './pages/ProfessionalAccount';
import DemoAccount from './pages/DemoAccount';
import ScrollToTop from './components/layout/ScrollToTop';
import ForexPair from './pages/ForexPair';
import Crypto from './pages/Crypto';
import Stock from './pages/Stock';
import Calculator from './pages/Calculator';
import Tools from './pages/Tools';
import CurrencyConverter from './pages/CurrencyConverter';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

// Title Map
const titleMap = {
  '/': 'Home | Optima Trade Market',
  '/home': 'Home | Optima Trade Market',
  '/login': 'Login | Optima Trade Market',
  '/register': 'Register | Optima Trade Market',
  '/forgot_password': 'Forgot Password | Optima Trade Market',
  '/reset_message': 'Reset Message | Optima Trade Market',
  '/verify_email': 'Verify Email | Optima Trade Market',
  '/ValidateEmail': 'Validate Email | Optima Trade Market',
  '/VerifyResetPassword': 'Verify Reset Password | Optima Trade Market',
  '/ChangePassword': 'Change Password | Optima Trade Market',
  '/passwordReset': 'Password Reset | Optima Trade Market',
  '/order-execution': 'Order Execution | Optima Trade Market',
  '/about-us': 'About Us | Optima Trade Market',
  '/contact-us': 'Contact Us | Optima Trade Market',
  '/deposit-withdrawal': 'Deposit & Withdrawal | Optima Trade Market',
  '/dashboard': 'Dashboard | Optima Trade Market',
  '/standard-accounts': 'Standard Accounts | Optima Trade Market',
  '/professional-accounts': 'Professional Accounts | Optima Trade Market',
  '/demo-accounts': 'Demo Accounts | Optima Trade Market',
  '/forex-pairs': 'Forex CFD | Optima Trade Market',
  '/crypto': 'Crypto CFD | Optima Trade Market',
  '/stock': 'Stock CFD | Optima Trade Market',
  '/calculator': 'Calculator | Optima Trade Market',
  '/tools': 'Tools | Optima Trade Market',
  '/currency-converter': 'Currency Converter | Optima Trade Market',
  '/terms': 'Terms | Optima Trade Market',
  '/privacy': 'Privacy | Optima Trade Market',
  '*': 'Page Not Found | Optima Trade Market',
};

// Title Updater Component
const TitleUpdater = () => {
  const location = useLocation();
  useEffect(() => {
    const defaultTitle = 'Optima Trade Market';
    document.title = titleMap[location.pathname] || defaultTitle;
  }, [location.pathname]);
  return null;
};

const App = () => {
  return (
    <HashRouter>
      <TitleUpdater />
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route
          path='/'
          element={
            <PublicRoute>
              <Home />
            </PublicRoute>
          }
        />
        <Route
          path='/home'
          element={
            <PublicRoute>
              <Home />
            </PublicRoute>
          }
        />
        <Route
          path='/login'
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path='/register'
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path='/forgot_password'
          element={
            <PublicRoute>
              <ForgotPassword />
            </PublicRoute>
          }
        />
        <Route
          path='/reset_message'
          element={
            <PublicRoute>
              <ResetMessage />
            </PublicRoute>
          }
        />
        <Route
          path='/verify_email'
          element={
            <PublicRoute>
              <VerifyEmail />
            </PublicRoute>
          }
        />
        <Route
          path='/ValidateEmail'
          element={
            <PublicRoute>
              <ValidateEmail />
            </PublicRoute>
          }
        />
        <Route
          path='/VerifyResetPassword'
          element={
            <PublicRoute>
              <VerifyResetPassword />
            </PublicRoute>
          }
        />
        <Route
          path='/ChangePassword'
          element={
            <PublicRoute>
              <ChangePassword />
            </PublicRoute>
          }
        />
        <Route
          path='/order-execution'
          element={
            <PublicRoute>
              <OrderExecution />
            </PublicRoute>
          }
        />
        <Route
          path='/about-us'
          element={
            <PublicRoute>
              <AboutUs />
            </PublicRoute>
          }
        />
        <Route
          path='/contact-us'
          element={
            <PublicRoute>
              <ContactUs />
            </PublicRoute>
          }
        />
        <Route
          path='/deposit-withdrawal'
          element={
            <PublicRoute>
              <DepositWithdrawal />
            </PublicRoute>
          }
        />
        <Route
          path='/standard-accounts'
          element={
            <PublicRoute>
              <StandardAccount />
            </PublicRoute>
          }
        />
        <Route
          path='/professional-accounts'
          element={
            <PublicRoute>
              <ProfessionalAccount />
            </PublicRoute>
          }
        />
        <Route
          path='/demo-accounts'
          element={
            <PublicRoute>
              <DemoAccount />
            </PublicRoute>
          }
        />
        <Route
          path='/forex-pairs'
          element={
            <PublicRoute>
              <ForexPair />
            </PublicRoute>
          }
        />
        <Route
          path='/crypto'
          element={
            <PublicRoute>
              <Crypto />
            </PublicRoute>
          }
        />
        <Route
          path='/stock'
          element={
            <PublicRoute>
              <Stock />
            </PublicRoute>
          }
        />
        <Route
          path='/calculator'
          element={
            <PublicRoute>
              <Calculator />
            </PublicRoute>
          }
        />
        <Route
          path='/tools'
          element={
            <PublicRoute>
              <Tools />
            </PublicRoute>
          }
        />
        <Route
          path='/currency-converter'
          element={
            <PublicRoute>
              <CurrencyConverter />
            </PublicRoute>
          }
        />
        <Route
          path='/terms'
          element={
            <PublicRoute>
              <Terms />
            </PublicRoute>
          }
        />
        <Route
          path='/privacy'
          element={
            <PublicRoute>
              <Privacy />
            </PublicRoute>
          }
        />

        {/* Protected Routes */}
        <Route
          path='/passwordReset'
          element={
            <ProtectedRoute>
              <ResetPassword />
            </ProtectedRoute>
          }
        />
        <Route
          path='/dashboard'
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        {/* Fallback */}
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
