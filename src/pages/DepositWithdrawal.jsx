import React from 'react'
import HomeNav from '../components/layout/HomeNav'
import Footer from '../components/layout/Footer'
import DepositWithdrawalHero from '../components/DepositWithdrawal/DepositWithdrawHero'

const DepositWithdrawal = () => {
  return (
    <div>
      <HomeNav/>
      <DepositWithdrawalHero />
      <Footer/>
    </div>
  )
}

export default DepositWithdrawal
