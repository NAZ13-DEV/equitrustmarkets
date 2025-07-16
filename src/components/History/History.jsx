import { Fragment, useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboardData } from "../../redux/slices/fetchHistory";
import {
  fetchUserDetails,
  clearUserState,
} from "../../redux/slices/fetchUserSlice";
import { FolderSimpleDashed } from "@phosphor-icons/react"; // install this package

const History = () => {
  const dispatch = useDispatch();
  const [userId, setUserId] = useState(null);
  const [mounted, setMounted] = useState(false);

  const {
    deposits,
    profits,
    userPlans,
    software,
    cryptoWithdrawals,
    bankWithdrawals,
  } = useSelector((state) => state.fetchHistory);
  const { user } = useSelector((state) => state.fetchUserDetails);

  const tabData = [
    {
      label: "Total Deposit History",
      data: deposits,
      emptyMessage: "No Deposit History",
    },
    {
      label: "Total Bank Withdrawal History",
      data: bankWithdrawals,
      emptyMessage: "No Bank Withdrawal History",
    },
    {
      label: "Total Crypto Withdrawal History",
      data: cryptoWithdrawals,
      emptyMessage: "No Crypto Withdrawal History",
    },
    {
      label: "Total Earning History",
      data: profits,
      emptyMessage: "No Earning History",
    },
    {
      label: "Plan Subscription",
      data: userPlans,
      emptyMessage: "No Subscription Plan History",
    },
    {
      label: "Software Subscription",
      data: software,
      emptyMessage: "No Subscription software History",
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const id = localStorage.getItem("uId");
      setUserId(id);
    }
  }, [mounted]);

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserDetails(userId));
      dispatch(fetchDashboardData());
    }
    return () => dispatch(clearUserState());
  }, [dispatch, userId]);

  const formatDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString("en-GB"); // Format as dd/mm/yyyy
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#e6f8ef] flex items-center justify-center px-4 py-10">
      <section className="grid w-full max-w-screen-xl grid-cols-12 gap-6">
        <div className="col-span-12 xl:col-span-11 bg-[#e6f8ef] rounded-2xl p-4 lg:p-6">
          <div className="w-full h-full bg-[#e6f8ef] rounded-2xl p-4 lg:p-6">
            <Tab.Group>
              <Tab.List className="flex flex-wrap gap-3 mb-6">
                {tabData.map(({ label }, index) => (
                  <Tab key={index} as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={`text-sm md:text-base font-semibold px-4 py-2 rounded-md transition-colors border-b-2 ${
                          selected
                            ? "text-[#07A658] border-[#07A658]"
                            : "text-[#3f6870] hover:text-[#07A658] border-transparent"
                        }`}
                      >
                        {label}
                      </button>
                    )}
                  </Tab>
                ))}
              </Tab.List>

              <Tab.Panels>
                {tabData.map(({ label, data, emptyMessage }, panelIndex) => (
                  <Tab.Panel key={panelIndex}>
                    <div className="bg-[#e6f8ef] rounded-xl p-4 overflow-x-auto min-h-[300px]">
                      <h5 className="mb-4 text-xl font-semibold text-[#142528]">
                        {label}
                      </h5>

                      {!data || data.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-10 text-center text-[#3f6870]">
                          <FolderSimpleDashed
                            size={64}
                            className="mb-4 text-[#07A658]"
                          />
                          <p className="text-lg font-medium">{emptyMessage}</p>
                        </div>
                      ) : (
                        <table className="w-full text-sm text-left md:text-base whitespace-nowrap">
                          <thead className="font-bold border-b text-[#07A658] border-[#07A658]/50">
                            <tr>
                              {/* Deposit History columns */}
                              {panelIndex === 0 && (
                                <>
                                  <th className="px-3 py-2">Sn</th>
                                  <th className="px-3 py-2">Amount</th>
                                  <th className="px-3 py-2">Coin Value</th>
                                  <th className="px-3 py-2">Deposit Method</th>
                                  <th className="px-3 py-2">Wallet</th>
                                  <th className="px-3 py-2">Deposit Id</th>
                                  <th className="px-3 py-2">Deposit Status</th>
                                  <th className="px-3 py-2">Date of Deposit</th>
                                </>
                              )}
                              {/* Bank Withdrawal History columns */}
                              {panelIndex === 1 && (
                                <>
                                  <th className="px-3 py-2">Sn</th>
                                  <th className="px-3 py-2"># Withdrawal ID</th>
                                  <th className="px-3 py-2">Account Name</th>
                                  <th className="px-3 py-2">Account Number</th>
                                  <th className="px-3 py-2">Bank Name</th>
                                  <th className="px-3 py-2">Country</th>
                                  <th className="px-3 py-2">Amount</th>
                                  <th className="px-3 py-2">
                                    Date of Withdrawal
                                  </th>
                                  <th className="px-3 py-2">Narration</th>
                                  <th className="px-3 py-2">
                                    Withdrawal Status
                                  </th>
                                </>
                              )}
                              {/* Crypto Withdrawal History columns */}
                              {panelIndex === 2 && (
                                <>
                                  <th className="px-3 py-2">Sn</th>
                                  <th className="px-3 py-2">Amount</th>
                                  <th className="px-3 py-2">
                                    Date of Withdrawal
                                  </th>
                                  <th className="px-3 py-2">Payment Mode</th>
                                  <th className="px-3 py-2">Withdrawal ID</th>
                                  <th className="px-3 py-2">
                                    Withdrawal Status
                                  </th>
                                  <th className="px-3 py-2">Wallet</th>
                                </>
                              )}
                              {/* Earning History columns */}
                              {panelIndex === 3 && (
                                <>
                                  <th className="px-3 py-2">Sn</th>
                                  <th className="px-3 py-2">Amount</th>
                                  <th className="px-3 py-2">Type</th>
                                  <th className="px-3 py-2">Transaction Id</th>
                                  <th className="px-3 py-2">
                                    Transaction Status
                                  </th>
                                  <th className="px-3 py-2">
                                    Date of Transaction
                                  </th>
                                </>
                              )}
                              {/* Plan Subscription History columns */}
                              {panelIndex === 4 && (
                                <>
                                  <th className="px-3 py-2">Sn</th>
                                  <th className="px-3 py-2">Amount</th>
                                  <th className="px-3 py-2">Coin Value</th>
                                  <th className="px-3 py-2">Deposit Method</th>
                                  <th className="px-3 py-2">Wallet</th>
                                  <th className="px-3 py-2">Deposit Plan</th>
                                  <th className="px-3 py-2">Deposit Id</th>
                                  <th className="px-3 py-2">Deposit Status</th>
                                  <th className="px-3 py-2">Date of Deposit</th>
                                </>
                              )}
                              {panelIndex === 5 && (
                                <>
                                  <th className="px-3 py-2">Sn</th>
                                  <th className="px-3 py-2">Amount</th>
                                  <th className="px-3 py-2">Coin Value</th>
                                  <th className="px-3 py-2">Deposit Method</th>
                                  <th className="px-3 py-2">Wallet</th>
                                  <th className="px-3 py-2">Software Plan</th>
                                  <th className="px-3 py-2">Deposit Id</th>
                                  <th className="px-3 py-2">Deposit Status</th>
                                  <th className="px-3 py-2">Date of Deposit</th>
                                </>
                              )}
                            </tr>
                          </thead>
                          <tbody className="text-[#3f6870] divide-y divide-[#3f6870]/30">
                            {data.map((dataItem, i) => (
                              <tr
                                key={dataItem.id || i}
                                className={
                                  panelIndex === 0
                                    ? "bg-[#07A658]/10 text-[#3f6870]"
                                    : panelIndex === 1 || panelIndex === 2
                                    ? "bg-red-500/10 text-[#3f6870]"
                                    : panelIndex === 3
                                    ? dataItem.type?.toLowerCase() === "loss"
                                      ? "bg-red-500/10 text-[#3f6870]"
                                      : dataItem.type?.toLowerCase() ===
                                        "profit"
                                      ? "bg-[#07A658]/10 text-[#3f6870]"
                                      : ""
                                    : panelIndex === 4
                                    ? "bg-blue-500/10 text-[#3f6870]"
                                    : panelIndex === 5
                                    ? "bg-purple-500/10 text-[#3f6870]"
                                    : ""
                                }
                              >
                                {panelIndex === 0 && (
                                  <>
                                    <td className="px-3 py-2">{i + 1}</td>
                                    <td className="px-3 py-2">
                                      {user?.currency}{" "}
                                      {parseFloat(dataItem.amount).toFixed(2)}
                                    </td>
                                    <td className="px-3 py-2">
                                      {parseFloat(dataItem.amtValue).toFixed(4)}{" "}
                                      {dataItem.transMethod === "bitcoin"
                                        ? "Btc"
                                        : dataItem.transMethod === "ethereum"
                                        ? "Eth"
                                        : dataItem.transMethod === "tether"
                                        ? "Usdt"
                                        : ""}
                                    </td>
                                    <td className="px-3 py-2 capitalize">
                                      {dataItem.transMethod}
                                    </td>
                                    <td className="px-3 py-2">
                                      {dataItem.Wallet}
                                    </td>
                                    <td className="px-3 py-2">
                                      #{dataItem.transId}
                                    </td>
                                    <td className="px-3 py-2">
                                      {dataItem.transStatus}
                                    </td>
                                    <td className="px-3 py-2">
                                      {formatDate(dataItem.createdAt)}
                                    </td>
                                  </>
                                )}

                                {panelIndex === 1 && (
                                  <>
                                    <td className="px-3 py-2">{i + 1}</td>
                                    <td className="px-3 py-2">
                                      #{dataItem.transId}
                                    </td>
                                    <td className="px-3 py-2">
                                      {dataItem.accName}
                                    </td>
                                    <td className="px-3 py-2">
                                      {dataItem.accNum}
                                    </td>
                                    <td className="px-3 py-2">
                                      {dataItem.bankName}
                                    </td>
                                    <td className="px-3 py-2">
                                      {dataItem.country}
                                    </td>
                                    <td className="px-3 py-2">
                                      {user?.currency}{" "}
                                      {parseFloat(dataItem.amount).toFixed(2)}
                                    </td>
                                    <td className="px-3 py-2">
                                      {formatDate(dataItem.dateOfTrans)}
                                    </td>
                                    <td className="px-3 py-2">
                                      {dataItem.narration}
                                    </td>
                                    <td className="px-3 py-2">
                                      {dataItem.transStatus}
                                    </td>
                                  </>
                                )}

                                {panelIndex === 2 && (
                                  <>
                                    <td className="px-3 py-2">{i + 1}</td>
                                    <td className="px-3 py-2">
                                      {user?.currency}{" "}
                                      {parseFloat(dataItem.amount).toFixed(2)}
                                    </td>
                                    <td className="px-3 py-2">
                                      {formatDate(dataItem.dateOfTrans)}
                                    </td>
                                    <td className="px-3 py-2">
                                      {dataItem.payment_mode}
                                    </td>
                                    <td className="px-3 py-2">
                                      #{dataItem.transId}
                                    </td>
                                    <td className="px-3 py-2">
                                      {dataItem.transStatus}
                                    </td>
                                    <td className="px-3 py-2">
                                      {dataItem.wallet}
                                    </td>
                                  </>
                                )}

                                {panelIndex === 3 && (
                                  <>
                                    <td className="px-3 py-2">{i + 1}</td>
                                    <td className="px-3 py-2">
                                      {user?.currency}{" "}
                                      {parseFloat(dataItem.amount).toFixed(2)}
                                    </td>
                                    <td className="px-3 py-2">
                                      {dataItem.type}
                                    </td>
                                    <td className="px-3 py-2">
                                      #{dataItem.transId}
                                    </td>
                                    <td className="px-3 py-2">
                                      {dataItem.transStatus}
                                    </td>
                                    <td className="px-3 py-2">
                                      {formatDate(dataItem.dateOfTrans)}
                                    </td>
                                  </>
                                )}

                                {panelIndex === 4 && (
                                  <>
                                    <td className="px-3 py-2">{i + 1}</td>
                                    <td className="px-3 py-2">
                                      {user?.currency}{" "}
                                      {parseFloat(dataItem.cryptoAmt).toFixed(
                                        2
                                      )}
                                    </td>
                                    <td className="px-3 py-2">
                                      {parseFloat(dataItem.cryptovalue).toFixed(
                                        4
                                      )}{" "}
                                      {dataItem.netWork === "bitcoin"
                                        ? "Btc"
                                        : dataItem.netWork === "ethereum"
                                        ? "Eth"
                                        : dataItem.netWork === "tether"
                                        ? "Usdt"
                                        : ""}
                                    </td>
                                    <td className="px-3 py-2 capitalize">
                                      {dataItem.netWork}
                                    </td>
                                    <td className="px-3 py-2">
                                      {dataItem.companyWallet}
                                    </td>
                                    <td className="px-3 py-2 capitalize">
                                      {dataItem.selectedPlan} Plan
                                    </td>
                                    <td className="px-3 py-2">
                                      #{dataItem.transId}
                                    </td>
                                    <td className="px-3 py-2">
                                      {dataItem.transStatus}
                                    </td>
                                    <td className="px-3 py-2">
                                      {formatDate(dataItem.createdAt)}
                                    </td>
                                  </>
                                )}

                                {panelIndex === 5 && (
                                  <>
                                    <td className="px-3 py-2">{i + 1}</td>
                                    <td className="px-3 py-2">
                                      {user?.currency}{" "}
                                      {parseFloat(dataItem.cryptoAmt).toFixed(
                                        2
                                      )}
                                    </td>
                                    <td className="px-3 py-2">
                                      {parseFloat(dataItem.cryptovalue).toFixed(
                                        4
                                      )}{" "}
                                      {dataItem.netWork === "bitcoin"
                                        ? "Btc"
                                        : dataItem.netWork === "ethereum"
                                        ? "Eth"
                                        : dataItem.netWork === "tether"
                                        ? "Usdt"
                                        : ""}
                                    </td>
                                    <td className="px-3 py-2 capitalize">
                                      {dataItem.netWork}
                                    </td>
                                    <td className="px-3 py-2">
                                      {dataItem.companyWallet}
                                    </td>
                                    <td className="px-3 py-2 capitalize">
                                      {dataItem.selectedPlan} Plan
                                    </td>
                                    <td className="px-3 py-2">
                                      #{dataItem.transId}
                                    </td>
                                    <td className="px-3 py-2">
                                      {dataItem.transStatus}
                                    </td>
                                    <td className="px-3 py-2">
                                      {formatDate(dataItem.createdAt)}
                                    </td>
                                  </>
                                )}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      )}
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;
