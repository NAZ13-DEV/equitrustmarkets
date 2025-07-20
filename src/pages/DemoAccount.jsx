import React from "react";
import HomeNav from "../components/layout/HomeNav";
import Footer from "../components/layout/Footer";
import DemoAccountSection from "../components/Demo-Account/DemoAccountSection";
import DemoBenefits from "../components/Demo-Account/DemoBenefits";
import HowToOpenDemoAccount from "../components/Demo-Account/HowToOpenDemoAccount";
import UpgradeBanner from "../components/Contact-Us/UpgradeBanner";
import DemoFAQ from "../components/Demo-Account/DemoFAQ";
import AssetsMarketsSection from "../components/Demo-Account/AssetsMarketsSection";

const DemoAccount = () => {
  return (
    <div>
      <HomeNav />
      <DemoAccountSection />
      <DemoBenefits />
      <AssetsMarketsSection/>
      <HowToOpenDemoAccount />
      <DemoFAQ />
      <UpgradeBanner />
      <Footer />
    </div>
  );
};

export default DemoAccount;
