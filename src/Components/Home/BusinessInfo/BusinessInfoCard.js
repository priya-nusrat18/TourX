import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const BusinessInfoCard = ({info}) => {
    const {title , description, icon }= info;
    return (
        <div className="col-md-4 col-sm-6 col-12 ">
            <div className=" info-card py-3 my-2">
            <div className="info-container justify-content-center d-flex ">
        <div  className="me-3 ">
            <FontAwesomeIcon className="  info-icon" icon={icon}   />
        </div>
        <div className="  info-title">
            <h6>{title}</h6>
            <small>{description}</small>
        </div>
        </div>
            </div>
      
    </div>
    );
};

export default BusinessInfoCard;