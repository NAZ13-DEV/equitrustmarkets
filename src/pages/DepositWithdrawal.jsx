import React from 'react'
import HomeNav from '../components/layout/HomeNav'
import Footer from '../components/layout/Footer'
import DepositWithdrawalHero from '../components/DepositWithdrawal/DepositWithdrawHero'
import FrictionlessSection from '../components/DepositWithdrawal/FrictionlessSection'
import PaymentFeatures from '../components/DepositWithdrawal/PaymentFeatures'
import SecurityAssurance from '../components/DepositWithdrawal/SecurityAssurance'
import DepositSteps from '../components/DepositWithdrawal/DepositSteps'
import FaqSection from '../components/DepositWithdrawal/FaqSection'
import UpgradeBanner from '../components/Contact-Us/UpgradeBanner'


const DepositWithdrawal = () => {
  return (
    <div>
      <HomeNav/>
      <DepositWithdrawalHero />
      <FrictionlessSection/>
      <PaymentFeatures/>
      <SecurityAssurance/>
      <DepositSteps/>
      <FaqSection/>
      <UpgradeBanner/>
      <Footer/>
    </div>
  )
}

export default DepositWithdrawal
