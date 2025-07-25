import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../img/fav.png';
import Logo1 from '../../img/white.png';
import ProfileFallback from '../../../public/userProfile.svg';
import MobileMenuDashboard from './MobileMenuDashboard';
import DashboardPage from './DashboardPage';
import DepositPage from '../Deposit/DepositPage';
import Exchange from '../ExchangePage/Exchange';
import History from '../History/History';
import LogoutPage from '../Logout/LogoutPage';
import Kyc from '../Kyc/KycPage';
import { fetchUserDetails } from '../../redux/slices/fetchUserSlice';
import { fetchNotifications } from '../../redux/slices/fetchNotiSlice';
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
  FaTimes,
  FaBars,
  FaSignOutAlt,
  FaCog,
} from 'react-icons/fa';
import Withdrawal from '../Withdrwal/Withdrawal';
import Subscribe from '../Subscribe/Subscribe';
import SubscribeSoftware from '../Software/Software';
import Notifications from '../Notification/Notifications';
import Settings from '../Settings/Settings';
import UploadPhoto from '../UploadPhoto/UploadPhoto';

const GreenLoader = () => (
  <div className='flex items-center justify-center h-[300px] text-green-400 text-lg'>
    Loading...
  </div>
);

const DashboardRender = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotificationDropdown, setShowNotificationDropdown] =
    useState(false);

  const profileRef = useRef(null);
  const notificationRef = useRef(null);
  const logoutTimerRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { user } = useSelector((state) => state.fetchUserDetails);
  const { notifications } = useSelector((state) => state.notifications);

  const isKycTrue = useMemo(() => {
    return (
      user?.kyc === 'true' &&
      user?.kyc !== '' &&
      user?.kyc !== null &&
      user?.kyc !== 'false' &&
      user?.verifi !== '' &&
      user?.verifi !== null &&
      user?.verifi !== 'false' &&
      !(user?.kyc === 'pending' && user?.verifi === 'false') &&
      user?.verifi !== 'pending'
    );
  }, [user]);

  useEffect(() => {
    const storedUserId = localStorage.getItem('uId');
    if (storedUserId) {
      dispatch(fetchUserDetails(storedUserId)).finally(() => setLoading(false));
      dispatch(fetchNotifications());
    } else {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!profileRef.current?.contains(event.target))
        setShowProfileMenu(false);
      if (!notificationRef.current?.contains(event.target))
        setShowNotificationDropdown(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const storedTab = localStorage.getItem('activeTab');
    if (user) {
      if (isKycTrue) {
        setActiveTab(
          storedTab && storedTab !== 'logout' ? storedTab : 'dashboard',
        );
      } else {
        setActiveTab('kyc');
        localStorage.removeItem('activeTab');
      }
    }
  }, [user, isKycTrue]);

  useEffect(() => {
    if (
      location.state?.fromUpload ||
      location.state?.fromWithdraw ||
      location.state?.photoUpload
    ) {
      setActiveTab('history');
      localStorage.setItem('activeTab', 'history');
      navigate(location.pathname, { replace: true });
    }
  }, [location, navigate]);
  useEffect(() => {
    if (window.smartsupp) return;

    window._smartsupp = window._smartsupp || {};
    window._smartsupp.key = '4bd654ab5c56034674bc5d887e1c7b910ebd4a61';

    (function (d) {
      const s = d.getElementsByTagName('script')[0];
      const c = d.createElement('script');
      c.type = 'text/javascript';
      c.charset = 'utf-8';
      c.async = true;
      c.src = 'https://www.smartsuppchat.com/loader.js?';
      s.parentNode.insertBefore(c, s);
    })(document);
  }, []);
  const handleTabChange = useCallback(
    (tab) => {
      if (!isKycTrue && tab !== 'kyc' && tab !== 'logout') return;
      setActiveTab(tab);
      if (tab !== 'logout') {
        localStorage.setItem('activeTab', tab);
      } else {
        localStorage.removeItem('activeTab');
      }
      setIsOpen(false);
    },
    [isKycTrue],
  );

  const profileImage = user?.img || ProfileFallback;

  const tabComponents = {
    dashboard: <DashboardPage />,
    deposit: <DepositPage />,
    market: <Exchange />,
    history: <History />,
    withdrawal: <Withdrawal />,
    subscription: <Subscribe />,
    software: <SubscribeSoftware />,
    notifications: <Notifications />,
    settings: <Settings />,
    uploadPhoto: <UploadPhoto />,
    logout: <LogoutPage />,
    kyc: isKycTrue ? null : <Kyc />,
  };

  const resetInactivityTimer = useCallback(() => {
    clearTimeout(logoutTimerRef.current);
    logoutTimerRef.current = setTimeout(() => {
      localStorage.removeItem('uId');
      localStorage.removeItem('activeTab');
      navigate('/login');
    }, 1800000);
  }, [navigate]);

  useEffect(() => {
    resetInactivityTimer();
    const events = ['mousemove', 'keydown', 'mousedown', 'touchstart'];
    const handleActivity = () => resetInactivityTimer();
    events.forEach((e) => window.addEventListener(e, handleActivity));
    return () => {
      clearTimeout(logoutTimerRef.current);
      events.forEach((e) => window.removeEventListener(e, handleActivity));
    };
  }, [resetInactivityTimer]);

  return (
    <div className='flex flex-col min-h-screen bg-[#0a0f1f]'>
      <div className='flex flex-col flex-1 w-full mx-auto lg:flex-row max-w-screen-2xl bg-[#0a0f1f]'>
        {/* Sidebar */}
        <aside
          className={`fixed top-0 left-0 z-40 w-4/5 xs:w-3/4 sm:w-64 h-screen bg-[#0a0f1f] text-white py-6 px-3 border-2 border-r-green-900 sm:px-4 transition-transform duration-300 ease-in-out lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className='flex items-center justify-between mb-8 lg:justify-center'>
            <div className='flex items-center gap-2'>
              <img src={Logo1} alt='Logo' className='h-10 w-24' /> 
            </div>
            <button
              className='text-white lg:hidden'
              onClick={() => setIsOpen(false)}
            >
              <FaTimes className='text-xl sm:text-2xl' />
            </button>
          </div>
          <ul className='space-y-4 overflow-y-auto max-h-[calc(100vh-8rem)] pr-2'>
            {[
              ['Dashboard', 'dashboard', <FaTachometerAlt />],
              ['Deposit', 'deposit', <FaWallet />],
              ['Market', 'market', <FaChartLine />],
              ['History', 'history', <FaHistory />],
              ['Withdrawal', 'withdrawal', <FaExchangeAlt />],
              ['Investmant Plan', 'subscription', <FaClipboardList />],
              ['Subscription', 'software', <FaClipboardList />],
              ['Notifications', 'notifications', <FaBell />],
              ['Profile', 'settings', <FaUserCog />],
              ['Upload Profile Pic', 'uploadPhoto', <FaCamera />],
            ].map(([label, id, icon]) => (
              <li
                key={id}
                onClick={() => handleTabChange(id)}
                className={`flex items-center gap-3 px-3 py-2 rounded hover:bg-green-600 cursor-pointer transition-colors text-xs sm:text-sm ${
                  !isKycTrue && id !== 'logout'
                    ? 'opacity-50 pointer-events-none'
                    : ''
                }`}
              >
                <span className='text-base sm:text-lg'>{icon}</span>
                <span className='font-medium truncate'>{label}</span>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <div className='flex flex-col flex-1 w-full min-h-screen overflow-x-hidden'>
          {/* Navbar */}
          <header className='sticky top-0 z-50 flex items-center justify-between w-full px-3 py-3 bg-[#0a0f1f]  border-2 border-b-green-900 shadow-md sm:px-4'>
            <div className='flex items-center gap-2 sm:gap-4'>
              <button
                onClick={() => setIsOpen(true)}
                className='text-xl text-green-700 sm:text-2xl lg:hidden'
              >
                <FaBars />
              </button>
              <button onClick={() => handleTabChange('dashboard')}>
                <img src={logo} alt='logo' className='h-8 sm:h-9' />
              </button>
            </div>

            <div className='flex items-center gap-2 sm:gap-4'>
              {/* Notification */}
              <div className='relative' ref={notificationRef}>
                <button
                  onClick={() => setShowNotificationDropdown((prev) => !prev)}
                  className='relative flex items-center justify-center w-8 h-8 border border-green-400 rounded-full sm:w-9 sm:h-9 hover:ring-2 hover:ring-green-400'
                >
                  <FaBell className='text-base text-green-700 sm:text-lg' />
                  {notifications.length > 0 && (
                    <span className='absolute top-1 right-1 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500 border-2 border-white' />
                  )}
                </button>
                {showNotificationDropdown && (
                  <div className='absolute right-0 mt-2 w-[85vw] max-w-xs bg-[#0a0f1f] text-black rounded-lg border border-gray-200 shadow-xl p-3 sm:p-4 z-50 max-h-[300px] overflow-y-auto'>
                    <h3 className='pb-2 mb-3 text-base font-semibold text-white border-b border-gray-300 sm:text-lg'>
                      Notifications
                    </h3>
                    {notifications.length === 0 ? (
                      <p className='text-xs text-gray-500 sm:text-sm'>
                        No new notifications
                      </p>
                    ) : (
                      notifications.slice(0, 7).map((item) => (
                        <div
                          key={item.id}
                          className='pb-2 mb-3 text-xs border-b border-gray-200 sm:text-sm'
                        >
                          <p className='font-semibold text-white'>
                            {item.messageHeader}
                          </p>
                          <p className='text-white '>{item.content}</p>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>

              {/* Profile */}
              <div className='relative' ref={profileRef}>
                <div
                  className='flex items-center gap-2 cursor-pointer group'
                  onClick={() => setShowProfileMenu((prev) => !prev)}
                >
                  <img
                    src={profileImage}
                    alt='Profile'
                    className='w-8 h-8 border-2 border-green-500 rounded-full sm:w-9 sm:h-9 group-hover:ring-2 group-hover:ring-green-400'
                  />
                  <p className='text-xs sm:text-sm font-semibold text-white truncate max-w-[100px]'>
                    {user?.firstName} {user?.last_Name}
                  </p>
                </div>
                {showProfileMenu && (
                  <div className='absolute right-0 z-50 mt-2 w-[85vw] max-w-sm sm:w-56 bg-[#0a0f1f] text-black border border-gray-200 rounded-lg shadow-xl'>
                    <div className='px-3 py-3 text-white border-b border-gray-200 sm:px-4'>
                      <p className='text-xs text-white'>Welcome</p>
                      <p className='text-xs font-semibold text-white truncate sm:text-sm '>
                        {user?.firstName} {user?.last_Name}
                      </p>
                    </div>
                    <Link
                      onClick={() => handleTabChange('settings')}
                      className='block px-3 py-2 text-xs text-white sm:px-4 sm:text-sm hover:bg-green-800'
                    >
                      <FaCog className='mr-2 text-gray-400' /> Settings
                    </Link>
                    <button
                      onClick={() => handleTabChange('logout')}
                      className='block w-full px-3 py-2 text-xs text-left text-red-500 sm:px-4 sm:text-sm hover:bg-green-800 hover:text-red-800'
                    >
                      <FaSignOutAlt className='mr-2' /> Log out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </header>

          {/* Mobile Drawer */}
          {isOpen && (
            <MobileMenuDashboard
              onClose={() => setIsOpen(false)}
              scrollToSection={handleTabChange}
            />
          )}

          {/* Main Content */}
          <main className='flex-grow px-2 py-4 overflow-y-auto bg-[#0a0f1f] sm:px-4 sm:py-8'>
            {loading ? <GreenLoader /> : tabComponents[activeTab]}
          </main>

          {/* Footer */}
          <footer className='py-4 text-xs sm:text-sm font-medium text-center text-white bg-[#0a0f1f] border-t border-green-900'>
            © {new Date().getFullYear()} Optima Trade Market. All rights
            reserved.
          </footer>
        </div>
      </div>
    </div>
  );
};

export default DashboardRender;
