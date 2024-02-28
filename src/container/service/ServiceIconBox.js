import PropTypes from "prop-types";
import IconBoxData from '../../data/iconBox/icon-box.json';
import IconBox from '../../components/IconBox/IconBox.jsx';
import SectionTitle from '../../components/SectionTitles/SectionTitle';
import { message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const ServiceIconBox = ({ classOption }) => {
    const { user, userToken, loading, checkAuthLoading ,isAuthenticated} = useSelector(
        (state) => state.user
      );
      if (user && user.education) {
    return (
        <div className={`section section-padding-t50-b50 ${classOption}`}>
            <div className="container">

                <SectionTitle
                    title="We craft distinctive action plans for brands"
                    subTitle="Steer your company toward success with our digital marketing strategist."
                />

                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <div style={{ width: '400px' }} className="row row-cols-1">
                        <IconBox
                        imageUrl="images/Services/library-488690_1280.jpg"
                        title="Education Service"
                        link="/EducationService"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}
      else if(user && user.micro_bussiness){
        return (
            <div className={`section section-padding-t50-b50 ${classOption}`}>
                <div className="container">
    
                    <SectionTitle
                        title="We craft distinctive action plans for brands"
                        subTitle="Steer your company toward success with our digital marketing strategist."
                    />
    
                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <div style={{ width: '400px' }} className="row row-cols-1">
                            <IconBox
                            imageUrl="images/Services/financial-3207895_1280.jpg"
                            title="Micro Business"
                            link="/MicroService"
                            />
                        </div>
                    </div>
    
                </div>
            </div>
        )
      }
      else if(user && user.career){
        return (
            <div className={`section section-padding-t50-b50 ${classOption}`}>
                <div className="container">
    
                    <SectionTitle
                        title="We craft distinctive action plans for brands"
                        subTitle="Steer your company toward success with our digital marketing strategist."
                    />
    
                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <div style={{ width: '400px' }} className="row row-cols-1">
                            <IconBox
                            imageUrl="images/Services/ladder-2713346_1280.jpg"
                            title="Career Guidence"
                            link="/CareerService"
                            />
                        </div>
                    </div>
    
                </div>
            </div>
        )
      }
      else if(user && user.spritual){
        return (
            <div className={`section section-padding-t50-b50 ${classOption}`}>
                <div className="container">
    
                    <SectionTitle
                        title="We craft distinctive action plans for brands"
                        subTitle="Steer your company toward success with our digital marketing strategist."
                    />
    
                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <div style={{ width: '400px' }} className="row row-cols-1">
                            <IconBox
                            imageUrl="images/Services/morning-2243465_1280.jpg"
                            title="Spiritual Guidence"
                            link="/SpiritualService"
                            />
                        </div>
                    </div>
    
                </div>
            </div>
        )
      }
      else {
        return null;
      }
}


ServiceIconBox.propTypes = {
    classOption: PropTypes.string
  };
  ServiceIconBox.defaultProps = {
    classOption: "section section-padding-t50-b50"
};


export default ServiceIconBox;

/*import PropTypes from "prop-types";
import React from 'react';
import IconBoxData from '../../data/iconBox/icon-box.json';
import IconBox from '../../components/IconBox/IconBox.jsx';
import SectionTitle from '../../components/SectionTitles/SectionTitle';

const ServiceIconBox = ({ classOption }) => {
    return (
        <div className={`section section-padding-t50-b50 ${classOption}`}>
            <div className="container">

                <SectionTitle
                    title="We craft distinctive action plans for brands"
                    subTitle="Steer your company toward success with our digital marketing strategist."
                />

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 mb-n6">

                    {IconBoxData && IconBoxData.slice(0, 4).map((single, key) => {
                            return(
                                <div key={key} className="col mb-6" data-aos="fade-up" >
                                    <div className="h-100" style={{padding:"None"}}>
                                    <IconBox classOption="box-border" data={single} key={key} />
                                    </div>
                                </div>
                            ); 
                    })}

                </div>

            </div>
        </div>
    )
}

ServiceIconBox.propTypes = {
    classOption: PropTypes.string
  };
  ServiceIconBox.defaultProps = {
    classOption: "section section-padding-t50-b50"
};*/

