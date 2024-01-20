import React from 'react';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';

const SpiritualService = () => {
    return (
        <React.Fragment>
            <Header />
            <Breadcrumb 
                image="images/bg/breadcrumb-bg-four.jpg"
                title="Spiritual Guidence"
                content="Home"
                contentTwo="Spiritual Guidence"
            /><br/>
        <div className="blog-3 col">
            <div className="row">
                <div className="col-md-6">
                <div className="image-container" style={{padding:"20px"}}>
                    <img src="images/Services/morning-2243465_1280.jpg" alt="Blog Image" className="img-fluid" />
                    
                </div>
                </div>
                <div className="col-md-6">
                <div className="info">
                    <h3 className="title">Spiritual Guidence</h3>
                <div className="desc" style={{padding:"20px",textAlign:"justify"}}>
                <p><strong>We have always known the power of digital, and we have mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that busine- sses have been talking about for so long, and those colleagues are turning to us in Marketing to provide guidance.</strong></p><p>Even if it is a brave new world for everyone else, for marketers it is another day in the proverbial office.</p><p>Now, the digital evolution is resonating across organizations. The pandemic has shifted internal structures and changed relationships with customers, and as a result marketers have become more valuable than ever.</p><p><strong>The Shift Inside Organizations: Marketers Become Indispensable in a Digital World.</strong></p><p>Marketing has often been known as the department that makes PowerPoints and polishes websites. That was not ever close to the whole truth, of course, but past company structures — in which Marketing always played second fiddle to Sales — allowed that falsehood to persist.</p><p>The pandemic has transformed what the marketing team means to an organization: It is given us agency. It is upended the customer journey. It is redefined how sales and marketing teams should interact. And it is forced businesses to see the value that marketers provide in a digital world.</p>
          </div>
         </div>       
     </div>
</div>
</div>
           
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )

}

export default SpiritualService;
