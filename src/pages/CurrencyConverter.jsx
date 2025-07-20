import React from 'react'
import HomeNav from '../components/layout/HomeNav'
import Footer from '../components/layout/Footer'
import EquitrustMarketsConverter from '../components/Currency-Converter/EquitrustMarketsConverter'
import EquitrustMarketsHighlights from '../components/Currency-Converter/EquitrustMarketsHighlights'
import UpgradeBanner from '../components/Contact-Us/UpgradeBanner'
import EquitrustMarketsFAQ from '../components/Currency-Converter/EquitrustMarketsFAQ'

const CurrencyConverter = () => {
  return (
    <div>
      <HomeNav/>
      <EquitrustMarketsConverter/>
      <EquitrustMarketsHighlights/>
      <EquitrustMarketsFAQ/>
      <UpgradeBanner/>
      <Footer/>
    </div>
  )
}

export default CurrencyConverter
