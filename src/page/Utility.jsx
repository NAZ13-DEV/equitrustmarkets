import React, { useState } from 'react';
import Sidebar from '../components/layout/sidebar';
import UtilityPool from '../components/utility/UtilityPool';
import DecentralisationStats from '../components/utility/DecentralisationStats';
import PlatformStats from '../components/utility/PlatformStats';
import StayTuned from '../components/utility/StayTuned';
import SDContractAddresses from '../components/utility/SDContractAddresses';
import Navbar from '../components/layout/Navbar';

const Utility = () => {
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
          <div className="h-full lg:flex lg:space-x-4">
            {/* Left Section */}
            <div className="p-4 lg:p-12 lg:w-2/3">
              <UtilityPool />
            </div>

            {/* Right Section */}
            <div className="lg:w-1/3 lg:max-h-[calc(100vh-2rem)] lg:overflow-y-auto lg:overflow-x-hidden scrollbar-hidden space-y-4 mt-6 lg:mt-0 p-4">
              <DecentralisationStats />
              <PlatformStats />
              <StayTuned />
              <SDContractAddresses />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Utility;
