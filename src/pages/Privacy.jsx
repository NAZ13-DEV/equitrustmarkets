import React from 'react'
import HomeNav from '../components/layout/HomeNav'
import Footer from '../components/layout/Footer'
import UpgradeBanner from '../components/Contact-Us/UpgradeBanner'
import PrivacyPolicySection from '../components/Privacy/PrivacyPolicySection'

const Privacy = () => {
  return (
    <div>
        <HomeNav/>
        <PrivacyPolicySection/>
        <UpgradeBanner/>
        <Footer/>
    </div>
  )
}

export default Privacy
