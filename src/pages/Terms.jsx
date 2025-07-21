import React from 'react'
import HomeNav from '../components/layout/HomeNav'
import Footer from '../components/layout/Footer'
import UpgradeBanner from '../components/Contact-Us/UpgradeBanner'
import TermsSection from '../components/Terms/TermsSection'

const Terms = () => {
  return (
    <div>
      <HomeNav/>
      <TermsSection/>
      <UpgradeBanner/>
      <Footer/>
    </div>
  )
}

export default Terms
