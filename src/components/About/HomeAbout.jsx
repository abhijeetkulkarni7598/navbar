import {useState, useEffect, useRef} from "react";
import SectionTitle from '../SectionTitles/SectionTitle';
import SectionTitleTwo from '../SectionTitles/SectionTitleTwo';
import Tilt from 'react-parallax-tilt';
import Parallax from 'parallax-js';
import {Link} from "react-router-dom";

const HomeAbout = () => {
    const [scale] = useState(1.04);
    const sceneEl = useRef(null);

    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
        })
        
        parallaxInstance.enable();

        return () => parallaxInstance.disable();

    }, [])
    return (
        <div className="section section-padding-t90 section-padding-bottom-200">
            <div className="container">

                <SectionTitle
                    title="Innovative Partners for Your Success"
                    subTitle="Empowering Futures through Tailored Solutions at AumBeeCo"
                />

                <div className="row">

                    
                    <div className="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
                        <div className="about-image-area">
                            <div className="about-image">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={process.env.PUBLIC_URL + "images/about/home-one-about/home_agency_about_1.jpg"} alt="" />
                                </Tilt>
                            </div>
                        
                            <div className="about-image">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={process.env.PUBLIC_URL + "images/about/home-one-about/home_agency_about_2.jpg"} alt="" />
                                </Tilt>
                            </div>
                            <div className="shape shape-1" id="scene" ref={sceneEl}>
                                <span data-depth="1"><img src={process.env.PUBLIC_URL + "images/shape-animation/about-shape-1.png"} alt="" /></span>
                            </div>

                        </div>
                    </div>

                    <div className="col-xl-5 col-lg-6 col-12" data-aos="fade-up" data-aos-delay="300">
                        <div className="about-content-area">
                            <SectionTitleTwo 
                                subTitle="Embracing Daily Challenges for Growth"
                                title="A Creative Agency Committed to Vision, Product, and People"
                            />

                            <p>Welcome to AumBeeCo, where expertise meets innovation. We are not just consultants; we are partners on your journey to success, providing tailored solutions to meet the unique challenges and opportunities that each phase of your professional or entrepreneurial path presents..</p>

                            <Link className="btn btn-primary btn-hover-secondary mt-xl-8 mt-lg-8 mt-md-6 mt-4" to={process.env.PUBLIC_URL + "/about"}>About Us</Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default HomeAbout;
