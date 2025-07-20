import React from 'react'
import HomeNav from '../components/layout/HomeNav'
import Footer from '../components/layout/Footer'
import CryptoSwapFreeSection from '../components/Crypto/CryptoSwapFreeSection'
import OpenCryptoAccount from '../components/Crypto/OpenCryptoAccount'
import CryptoSpreadsTabs from '../components/Crypto/CryptoSpreadsTabs'
import CryptoMarketConditions from '../components/Crypto/CryptoMarketConditions'
import WhyTradeCrypto from '../components/Crypto/WhyTradeCrypto'
import CryptoFaqSection from '../components/Crypto/CryptoFaqSection'
import CryptoBanner from '../components/Crypto/CryptoBanner'

const Crypto = () => {
  return (
    <div>
      <HomeNav/>
        <CryptoSwapFreeSection/>
        <OpenCryptoAccount/>
        <CryptoSpreadsTabs/>
        <CryptoMarketConditions/>
        <WhyTradeCrypto/>
        <CryptoFaqSection/>
        <CryptoBanner/>
      <Footer/>
    </div>
  )
}

export default Crypto
