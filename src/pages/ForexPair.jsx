import React from 'react'
import HomeNav from '../components/layout/HomeNav'
import Footer from '../components/layout/Footer'
import ForexHeroSection from '../components/Forex-Pairs/ForexHeroSection'
import CurrencyPairsSection from '../components/Forex-Pairs/CurrencyPairsSection'
import ForexMarketConditions from '../components/Forex-Pairs/ForexMarketConditions'
import ForexPairsTabbedTables from '../components/Forex-Pairs/ForexPairsTabbedTables'
import WhyTradeWithUs from '../components/Forex-Pairs/WhyTradeWithUs'
import TradeBanner from '../components/Forex-Pairs/TradeBanner'
import ForexFAQ from '../components/Forex-Pairs/ForexFAQ'

const ForexPair = () => {
  return (
    <div>
      <HomeNav/>
    <ForexHeroSection/>
    <CurrencyPairsSection/>
    <ForexMarketConditions/>
    <ForexPairsTabbedTables/>
    <WhyTradeWithUs/>
    <ForexFAQ/>
    <TradeBanner/>
      <Footer/>
    </div>
  )
}

export default ForexPair
