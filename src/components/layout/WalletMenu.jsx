import React, { useState, useRef, useEffect } from "react";
import {
  MoreVertical,
  Sun,
  Moon,
  LifeBuoy,
  Gavel,
  FileText,
} from "lucide-react";

const WalletMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();

  // Close on click outside
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="flex justify-center w-full">
      <div className="relative flex items-center justify-between gap-6">
        {/* Connect Wallet Button */}
        <button className="py-4 text-green-600 bg-white border-0 rounded-lg px-14 hover:shadow ">
          <div className="flex items-center gap-1 font-medium">
            <span>Connect</span>
            <span>wallet</span>
          </div>
        </button>

        {/* 3-dot menu trigger */}
        <button
          className="flex items-center justify-center px-4 py-4 bg-white rounded-md hover:bg-gray-100"
          onClick={() => setShowMenu(!showMenu)}
        >
          <MoreVertical className="w-5 h-5 text-gray-800" />
        </button>

        {/* Popup menu */}
        {showMenu && (
          <div
            ref={menuRef}
            className="absolute right-0 z-50 p-4 bg-white rounded-lg shadow-lg top-14 w-60"
          >
            {/* Theme Toggle */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <LifeBuoy className="w-5 h-5 text-gray-500" />
                <span className="text-sm font-medium text-gray-800">Theme</span>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-full">
                <Moon className="w-4 h-4 text-gray-600" />
                <Sun className="w-4 h-4 text-green-500" />
              </div>
            </div>

            {/* Support */}
            <div className="flex items-center justify-between py-2 rounded-md cursor-pointer hover:bg-gray-50">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-gray-100 rounded-full">
                  <div className="w-4 h-4 bg-gray-400 rounded-sm" />
                </div>
                <span className="text-sm text-gray-800">Support</span>
              </div>
              <span className="text-lg text-green-600">›</span>
            </div>

            {/* Terms of Service */}
            <div className="flex items-center justify-between py-2 rounded-md cursor-pointer hover:bg-gray-50">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-gray-100 rounded-full">
                  <Gavel className="w-4 h-4 text-gray-500" />
                </div>
                <span className="text-sm text-gray-800">Terms of service</span>
              </div>
              <span className="text-lg text-green-600">›</span>
            </div>

            {/* Docs */}
            <div className="flex items-center justify-between py-2 rounded-md cursor-pointer hover:bg-gray-50">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-gray-100 rounded-full">
                  <FileText className="w-4 h-4 text-gray-500" />
                </div>
                <span className="text-sm text-gray-800">Docs</span>
              </div>
              <span className="text-lg text-green-600">›</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WalletMenu;
