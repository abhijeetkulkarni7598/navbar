import PropTypes from "prop-types";
import React from 'react';
import {Link} from "react-router-dom";

const IconBox = ({ imageUrl,title,link, classOption }) => {
    return (
        <div className={`icon-box text-left ${classOption}`}>
        
            <div className="icon">
                            <img
                    src={imageUrl}
                    alt="Icon"
                    className="img-fluid"
                    style={{ height: "200px", width: "100%", objectFit: "cover", borderRadius:"10px"}}
                    />
            </div>
   
            <div className="content">
                <h3 className="title" dangerouslySetInnerHTML={{ __html: title }}></h3>
                <Link to={link} className="link">learn more</Link>
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
