import PropTypes from "prop-types";
import React from 'react';
import {Link} from "react-router-dom";

const IconBox = ({ data, classOption }) => {
    return (
        <div className="h-100">
        <div className={`icon-box text-left ${classOption}`}>
        
            <div className="icon">
                            <img
                    src={data.icon}
                    alt="Icon"
                    className="img-fluid"
                    style={{ height: "200px", width: "100%", objectFit: "cover" }}
                    />
            </div>

            <div className="content">
                <h3 className="title" dangerouslySetInnerHTML={{ __html: data.title }}></h3>
                <div className="desc">
                    <p>{data.desc}</p>
                </div>
                <Link to={data.link} className="link">{data.pageLink}</Link>
            </div>
        </div>
        </div>
    )
}

IconBox.propTypes = {
    data: PropTypes.object,
    classOption: PropTypes.string
};

IconBox.defaultProps = {
    classOption: "icon-box text-center",
};

export default IconBox;
