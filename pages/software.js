import React, { Component } from 'react';
import NavbarFour from '../components/Layouts/NavbarFour';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Software/Banner';
import Partner from '../components/Software/Partner';
import About from '../components/Software/About';
import Features from '../components/Software/Features';
import Pricing from '../components/Software/Pricing';
import Cta from '../components/Software/Cta';
import Feedback from '../components/Software/Feedback';
import Trial from '../components/Software/Trial';
import Blog from '../components/Software/Blog';
import Subscribe from '../components/Software/Subscribe';

class Software extends Component {
    render() {
        return (
            <>
                <NavbarFour />
                <Banner />
                <Partner />
                <About />
                <Features />
                <Pricing />
                <Cta />
                <Feedback />
                <Trial />
                <Blog />
                <Subscribe />
                <Footer />
            </>
        );
    }
}

export default Software;
