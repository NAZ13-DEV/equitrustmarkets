import React from 'react'
import HomeNav from '../components/layout/HomeNav'
import Footer from '../components/layout/Footer'
import TradingCalculator from '../components/Calculator/TradingCalculator'
import TradingCalculatorGuide from '../components/Calculator/TradingCalculatorGuide'
import FAQCalculator from '../components/Calculator/FAQCalculator'
import UpgradeBanner from '../components/Contact-Us/UpgradeBanner'

const Calculator = () => {
  return (
    <div>
      <HomeNav/>
      <TradingCalculator/>
      <TradingCalculatorGuide/>
      <FAQCalculator/>
      <UpgradeBanner/>
      <Footer/>
    </div>
  )
}

export default Calculator
