import React, { useState } from 'react';
import Sidebar from '../components/layout/sidebar';
import Navbar from '../components/layout/Navbar';
import DeFiOpportunitiesTable from '../components/defi/DeFiOpportunitiesTable'; // ✅ Import the component

const Defi = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#F8F9FB]">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1">
        {/* Top Navbar */}
        <Navbar toggleSidebar={toggleSidebar} />

        {/* Page Content */}
        <main className="flex-1 p-4 overflow-y-auto scrollbar-hidden">
          <div className="h-full">
            <DeFiOpportunitiesTable /> {/* ✅ Component injected here */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Defi;
