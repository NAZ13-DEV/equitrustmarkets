import React from 'react'
import HomeNav from '../components/layout/HomeNav'
import Footer from '../components/layout/Footer'
import Contacts from '../components/Contact-Us/Contacts'
import SupportAvailability from '../components/Contact-Us/SupportAvailability'
import UpgradeBanner from '../components/Contact-Us/UpgradeBanner'
import GeneralInquiries from '../components/Contact-Us/GeneralInquiries'

const ContactUs = () => {
  return (
    <div>
      <HomeNav/>
      <Contacts/>
      <GeneralInquiries/>
      <SupportAvailability/>
      <UpgradeBanner/>
      <Footer/>
    </div>
  )
}

export default ContactUs
