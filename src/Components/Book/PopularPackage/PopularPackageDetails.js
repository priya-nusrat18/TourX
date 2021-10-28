import React from 'react';
import cardImg from '../../../image/card1.png'
import { faCalendarWeek, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const PopularPackageDetails = ({info}) => {
    return (
        <div className="popular-card">
            <div className="popular-card-wrap d-flex align-items-center mb-4">
                    <img src={cardImg} alt="" className="card-img2" />
                    <div className="ppular-card-content">
                    <div className="d-flex ">
                            <FontAwesomeIcon className="mt-1 me-2 support-color"  icon={faCalendarWeek} /> 
                            <small>{info.stayInfo}</small>
                            </div>
                            <div className="d-flex ">
                            <FontAwesomeIcon className="mt-1 me-2 support-color"  icon={faMapMarker} />
                            <p className="support-color2 mb-0 py-1">{info.place}</p>
                            </div>
                    <small> <strong> $ {info.price}</strong> /per person</small>
                    </div>
                </div>
        </div>
    );
};

export default PopularPackageDetails;