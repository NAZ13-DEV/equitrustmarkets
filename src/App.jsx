
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Defi from './page/Defi';
import Login from './page/Login';
import Register from './page/Register';
import ForgotPassword from './page/ForgotPassword';
import ResetMessage from './page/ResetMessage';
import VerifyEmail from './page/VerifyEmail';
import ValidateEmail from './page/ValidateEmail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />
          <Route path="/reset_message" element={<ResetMessage />} />
          <Route path="/verify_email" element={<VerifyEmail />} />
          <Route path="/ValidateEmail" element={<ValidateEmail />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;