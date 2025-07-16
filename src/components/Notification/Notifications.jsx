/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNotifications,
  clearNotifications,
} from "../../redux/slices/fetchNotiSlice";
import {
  fetchUserDetails,
  clearUserState,
} from "../../redux/slices/fetchUserSlice";
import { parse, format } from "date-fns";
import { Bell } from "lucide-react";

const Notifications = () => {
  const dispatch = useDispatch();
  const { notifications } = useSelector((state) => state.notifications);
  const { user } = useSelector((state) => state.fetchUserDetails);
  const [visibleNotifications, setVisibleNotifications] = useState(10);
  const notificationRefs = useRef([]);

  useEffect(() => {
    dispatch(fetchNotifications());
    const storedUserId = localStorage.getItem("uId");
    if (storedUserId) dispatch(fetchUserDetails(storedUserId));

    return () => {
      dispatch(clearNotifications());
      dispatch(clearUserState());
    };
  }, [dispatch]);

  const handleSeeMore = () => {
    setVisibleNotifications((prev) => prev + 10);
  };

  const formatDate = (sentAt) => {
    try {
      const parsedDate = new Date(sentAt);
      return format(parsedDate, "dd MMMM yyyy");
    } catch {
      return "Invalid date";
    }
  };

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        @keyframes badgePulse {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(7, 166, 88, 0.7); }
          70% { transform: scale(1.1); box-shadow: 0 0 0 8px rgba(7, 166, 88, 0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(7, 166, 88, 0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-slide-in {
          animation: slideIn 0.5s ease-out;
        }
        .animate-pulse-hover:hover {
          animation: pulse 0.3s ease-in-out;
          transform: scale(1.05);
        }
        .animate-badge-pulse {
          animation: badgePulse 2s ease-in-out infinite;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .scroll-smooth {
          scroll-behavior: smooth;
        }
      `}</style>
      <div className="min-h-screen p-2 sm:p-4 lg:p-8 bg-[#e6f8ef] animate-fade-in">
        <div className="max-w-4xl mx-auto bg-[#e6f8ef] p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl border border-[#3f6870]/50">
          <div className="flex items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-3">
              <Bell className="text-[#07A658] w-6 h-6 sm:w-8 sm:h-8" />
              <h2 className="text-[#142528] text-2xl sm:text-3xl font-bold">Notifications</h2>
            </div>
            <span className="bg-[#07A658] text-white text-xs font-semibold px-2.5 py-1 rounded-full animate-badge-pulse">
              {notifications.length}
            </span>
          </div>
          <div className="relative mb-6">
            <p className="text-[#3f6870] text-sm sm:text-base">
              Get updates on your trading activity, system messages, and alerts.
            </p>
            <div className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-[#07A658] to-[#3f6870] rounded-full"></div>
          </div>

          <div className="space-y-4">
            {notifications.slice(0, visibleNotifications).map((item, index) => (
              <div
                key={item.id}
                ref={(el) => (notificationRefs.current[index] = el)}
                className="p-4 sm:p-5 rounded-xl bg-[#e6f8ef]/80 backdrop-blur-sm border border-[#3f6870]/50 transition-all duration-300 hover:shadow-lg hover:border-[#07A658]/80 animate-slide-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                  <div>
                    <h4 className="text-[#142528] text-base sm:text-lg font-semibold mb-1">
                      {item.messageHeader}
                    </h4>
                    <p className="text-[#3f6870] text-sm sm:text-base">{item.content}</p>
                  </div>
                  <span className="text-[#3f6870] text-xs sm:text-sm sm:ml-4 whitespace-nowrap">
                    {formatDate(item.sent_at)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {visibleNotifications < notifications.length && (
            <div className="mt-8 text-center sm:mt-10">
              <button
                onClick={handleSeeMore}
                className="inline-block px-6 sm:px-8 py-2 sm:py-3 rounded-md text-sm sm:text-base font-semibold text-white bg-[#07A658] hover:bg-[#07A658]/80 transition-all duration-300 shadow-md animate-pulse-hover"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Notifications;