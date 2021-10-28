import React from 'react';
import { Col } from 'react-bootstrap';

const AchivmentAreaDetails = ({achiv}) => {
    return (
        <Col md={3} sm={6} xs={12}>
            < div className="support-bg text-center achiv-card mb-4">
            <img src={achiv.img} alt="" className="w-25 mt-4 mb-3" />
            <p className="achiv-text text-white mb-3 ">{achiv.title}</p>

        </div>
        </Col>
    );
};

export default AchivmentAreaDetails;