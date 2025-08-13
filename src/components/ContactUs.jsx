import React from 'react'
import Header from './Header'
import ContactSection from './ContactSection'
import GoogleMap from './GoogleMap'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
    <Header title="Contact Us For Best Digital Marketing Services" breadcrumb="Contact Us" />
    <ContactSection/>
    {/* <GoogleMap/> */}
     <Footer sarcColor = "text-blue-700"/>
    </>
  )
}

export default Contact