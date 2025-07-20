import React from 'react'
import HomeNav from '../components/layout/HomeNav'
import Footer from '../components/layout/Footer'
import ProfessionalAccounts from '../components/Professional-Account/ProfessionalAccounts'
import ProfessionalAccountCards from '../components/Professional-Account/ProfessionalAccountCards'
import TradingAccountComparison from '../components/Professional-Account/TradingAccountComparison'
import FAQAccordion from '../components/Professional-Account/FAQAccordion'
import UpgradeBanner from '../components/Contact-Us/UpgradeBanner'

const ProfessionalAccount = () => {
  return (
    <div>
      <HomeNav/>
      <ProfessionalAccounts/>
      <ProfessionalAccountCards/>
      <TradingAccountComparison/>
      <FAQAccordion/>
      <UpgradeBanner/>
      <Footer/>
    </div>
  )
}

export default ProfessionalAccount
