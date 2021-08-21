import React, { Component } from 'react'
import NavbarSix from '../components/Layouts/NavbarSix'
import Footer from '../components/LeadGeneration/Footer'
import Banner from '../components/LeadGeneration/Banner'
import Partner from '../components/LeadGeneration/Partner'
import Services from '../components/LeadGeneration/Services'
import About from '../components/LeadGeneration/About'
import Feedback from '../components/LeadGeneration/Feedback'
import Faq from '../components/LeadGeneration/Faq'
import Cta from '../components/LeadGeneration/Cta'

class LeadGeneration extends Component {
  render() {
    return (
      <>
        <NavbarSix />
        <Banner />
        <Partner />
        <Services />
        <About />
        <Feedback />
        <Faq />
        <Cta />
        <Footer />
      </>
    )
  }
}

export default LeadGeneration
