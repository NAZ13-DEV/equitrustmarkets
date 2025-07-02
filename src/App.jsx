// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Utility from './page/Utility';
import Defi from './page/Defi';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Utility />} />
          <Route path="/defi" element={<Defi />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;