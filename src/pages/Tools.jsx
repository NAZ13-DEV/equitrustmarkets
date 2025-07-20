import React from 'react'
import HomeNav from '../components/layout/HomeNav'
import Footer from '../components/layout/Footer'
import AnalyticalTools from '../components/Tools/AnalyticalTools'
import TradingSignals from '../components/Tools/TradingSignals'
import MarketNews from '../components/Tools/MarketNews'
import UpgradeBanner from '../components/Contact-Us/UpgradeBanner'
import AnalyticalToolsFAQ from '../components/Tools/AnalyticalToolsFAQ'

const Tools = () => {
  return (
    <div>
      <HomeNav/>
      <AnalyticalTools/>
      <TradingSignals/>
      <MarketNews/>
      <AnalyticalToolsFAQ/>
      <UpgradeBanner/>
      <Footer/>
    </div>
  )
}

export default Tools
