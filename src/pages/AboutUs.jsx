import React from 'react'
import HomeNav from '../components/layout/HomeNav'
import Footer from '../components/layout/Footer'
import AboutEquitrust from '../components/About-Us/AboutEquitrust'
import BalanceSection from '../components/About-Us/BalanceSection'
import CompanyValuesSection from '../components/About-Us/CompanyValuesSection '
import CSRImpactSlider from '../components/About-Us/CSRImpactSlider'

export const AboutUs = () => {
  return (
    <div>
        <HomeNav/>
        <AboutEquitrust/>
        <BalanceSection/>
        <CompanyValuesSection/>
        <CSRImpactSlider/>
        <Footer/>
    </div>
  )
}
