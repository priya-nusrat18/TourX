import React from 'react';
import { Col } from 'react-bootstrap';

const CustomerOrderListDetails = ({bookedService}) => {

    const {title,price,img,status} = bookedService;

    return (
        <Col md={4}>
            <div className="bookDetails">
                <div className="details-top">
                    <img src={img} alt=""/>
                    <span>{status}</span>
                </div>
                <h4>{title}</h4>
                <h5>$ {price}</h5>
            </div>
        </Col>
    );
};

export default CustomerOrderListDetails;