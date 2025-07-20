import React from 'react'
import HomeNav from '../components/layout/HomeNav'
import Footer from '../components/layout/Footer'
import StockHeroSection from '../components/Stock/StockHeroSection'
import TradeStocksSection from '../components/Stock/TradeStocksSection'
import StockMarketConditions from '../components/Stock/StockMarketConditions'
import StockBanner from '../components/Stock/StockBanner'
import WhyTradeStocks from '../components/Stock/WhyTradeStocks'
import TradingPerspectives from '../components/Stock/TradingPerspectives'
import FAQStockSection from '../components/Stock/FAQStockSection'

const Stock = () => {
  return (
    <div>
      <HomeNav/>
      <StockHeroSection/>
      <TradeStocksSection/>
      <StockMarketConditions/>
      <WhyTradeStocks/>
      <TradingPerspectives/>
      <FAQStockSection/>


      <StockBanner/>
      <Footer/>
    </div>
  )
}

export default Stock
