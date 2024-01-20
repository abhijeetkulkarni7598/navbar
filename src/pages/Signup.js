import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
import SignupCon from '../container/SignupCon';


const Signup = () => {

  return (
    <React.Fragment>
            <SEO title="AumBeeCo || Signup" />
            <Header />
            <Breadcrumb 
                image="images/bg/breadcrumb-bg-five.jpg"
                title="To Login or register to the website"
                content="Home"
                contentTwo="SignUp/Register"
            />
            <div style={{itemAlign:"center",paddingTop:"28%"}}>             
            <SignupCon /> 
            </div> <br/>   
            <Footer />
            <ScrollToTop />
            </React.Fragment>
  )
}

export default Signup