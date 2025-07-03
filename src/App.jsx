
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Defi from './page/Defi';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/defi" element={<Defi />} /> */}
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;