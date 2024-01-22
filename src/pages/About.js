import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import AboutFour from '../container/About/AboutFour';
import AboutFive from '../container/About/AboutFive';
import AboutSeven from '../container/About/AboutSeven';
import AboutEight from '../container/About/AboutEight';
import CallToActionTwo from '../container/CallToAction/CallToActionTwo';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';






const AboutUs = () => {
    return (
        <React.Fragment>
            <SEO title="AumBee || About" />
            <Header />
            <Breadcrumb 
                image="images/bg/breadcrumb-bg.jpg"
                title="We are an agency located in India"
                content="Home"
                contentTwo="About Us"
            />
            <AboutFour />
            <AboutFive />
            <AboutSeven />
            <AboutEight />
            <CallToActionTwo />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default AboutUs;



