import PropTypes from "prop-types";
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
};

export default ServiceIconBox;
