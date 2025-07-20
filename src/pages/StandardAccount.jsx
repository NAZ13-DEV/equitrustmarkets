import React from 'react'
import HomeNav from '../components/layout/HomeNav'
import Footer from '../components/layout/Footer'
import StandardAccountSection from '../components/Standard-Account/StandardAccountSection'
import AccountComparisonTable from '../components/Standard-Account/AccountComparisonTable'
import TradingCardPlans from '../components/Standard-Account/TradingCardPlans'
import FaqAccordion from '../components/Standard-Account/FaqAccordion'
import UpgradeBanner from '../components/Contact-Us/UpgradeBanner'


const StandardAccount = () => {
  return (
    <div>
      <HomeNav/>
      <StandardAccountSection/>
      <AccountComparisonTable/>
      <TradingCardPlans/>
      <FaqAccordion/>
      <UpgradeBanner/>
      <Footer/>
    </div>
  )
}

export default StandardAccount
