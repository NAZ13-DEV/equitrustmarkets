import PropTypes from "prop-types";
import { X } from "lucide-react";
import {
  FaTachometerAlt,
  FaWallet,
  FaChartLine,
  FaHistory,
  FaExchangeAlt,
  FaClipboardList,
  FaBell,
  FaUserCog,
  FaCamera,
} from "react-icons/fa";
import BigLogo from "../../img/fav.png";

const MobileMenuDashboard = ({ onClose, scrollToSection }) => {
  const handleClick = (id) => {
    scrollToSection(id);
    onClose();
  };

  const navItems = [
    ["Dashboard", "dashboard", <FaTachometerAlt />],
    ["Deposit", "deposit", <FaWallet />],
    ["Market", "market", <FaChartLine />],
    ["History", "history", <FaHistory />],
    ["Withdrawal", "withdrawal", <FaExchangeAlt />],
    ["Investment Plan", "subscription", <FaClipboardList />],
    ["Subscription", "software", <FaClipboardList />],
    ["Notifications", "notifications", <FaBell />],
    ["Profile", "settings", <FaUserCog />],
    ["Upload Profile Pic", "uploadPhoto", <FaCamera />],
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col w-4/5 max-w-xs h-full p-6 bg-[#0a0f1f] shadow-xl text-white animate-slideInLeft"
      data-aos="fade-right"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <img src={BigLogo} alt="Logo" className="h-8" />
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="text-gray-400 transition hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-5">
          {navItems.map(([label, id, icon]) => (
            <li key={id}>
              <button
                onClick={() => handleClick(id)}
                className="flex items-center w-full gap-3 px-2 py-2 text-sm font-medium transition-all rounded-lg hover:bg-emerald-700/20"
              >
                <span className="text-lg">{icon}</span>
                <span>{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Optional footer or overlay section */}
    </div>
  );
};

MobileMenuDashboard.propTypes = {
  onClose: PropTypes.func.isRequired,
  scrollToSection: PropTypes.func.isRequired,
};

export default MobileMenuDashboard;
