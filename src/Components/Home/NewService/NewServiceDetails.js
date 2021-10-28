import {  faMapMarker, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card } from 'react-bootstrap';
import Fade from "react-reveal/Fade";
import { useHistory } from 'react-router-dom';

const NewServiceDetails = ({info}) => {
  let history =useHistory()
  const handleCheckOut=(id)=>{
      history.push(`/book/${id}`)
  }

    return (
        <Fade right>
        <Card  className='my-3 me-3 main-card'>
          <div className="card-img-wrapper">
          <img src={info.img} className="img-fluid card-img" alt="" />
          </div>
            <Card.Body>
                <div className="d-flex justify-content-between mb-2">
                    <p> <strong> $ {info.price}</strong> /per person</p>
                    
                </div>
                <div className="d-flex  mb-2">
                        <FontAwesomeIcon className="mt-1 me-2 support-color"  icon={faMapMarker} />
                        <h5 className="support-color2">{info.title}</h5>
                        </div>
                        <div className="d-flex ">
                        <FontAwesomeIcon className="mt-1 me-2 text-rating"  icon={faStar} />
                        <strong className="rating-text">+13k Rating</strong>
                        </div>
                <button className="support-btn my-3" onClick={() => handleCheckOut(info._id)} >BOOK NOW</button>
             
            </Card.Body>
        </Card>
        </Fade>
    );
};

export default NewServiceDetails;