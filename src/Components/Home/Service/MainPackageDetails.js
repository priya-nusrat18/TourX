import { faCalendarWeek, faMapMarker, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card } from 'react-bootstrap';
import Fade from "react-reveal/Fade";
import { useHistory } from 'react-router';

const MainPackageDetails = ({info}) => {
    let history =useHistory()
    const handleCheckOut=(id)=>{
        history.push(`/book/${id}`)
    }
 
    return (
        <div className="col-md-4 col-sm-6 col-12">
            <Fade bottom>
            <Card  className='my-3 shadow main-card' >
              <div className="card-img-wrapper">
              <img src={info.img} className="img-fluid card-img" alt="" />
              </div>
                <Card.Body>
                    <div className="card-wrap">
                    <div className="card_info_stay d-flex justify-content-between mb-2">
                        <p> <strong> $ {info.price}</strong> /per person</p>
                        <div className="d-flex ">
                            <FontAwesomeIcon className="mt-1 me-2 support-color"  icon={faCalendarWeek} /> 
                            <p>5 Days / 6 night</p>
                            </div>
                    </div>
                    <div className="d-flex  mb-2">
                            <FontAwesomeIcon className="mt-1 me-2 support-color"  icon={faMapMarker} />
                            <h5 className=" card-h5 support-color2">{info.title}</h5>
                            </div>
                            <div className="d-flex ">
                            <FontAwesomeIcon className="mt-1 me-2 text-rating"  icon={faStar} />
                            <strong className="rating-text">+8k Rating</strong>
                            </div>
                    </div>
                <button className="support-btn my-2 " onClick={() => handleCheckOut(info._id)} >BOOK NOW</button>
            
                </Card.Body>
            </Card>
            </Fade>
        </div>
    );
};

export default MainPackageDetails;