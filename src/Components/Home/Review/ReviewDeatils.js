import React from 'react';
import Fade from "react-reveal/Fade";
const ReviewDeatils = ({reviews}) => {
    return (
        <Fade bottom>
        <div className="review-card">
            <div className="reviewer-img">
                <img src={reviews.img} alt="" className="img-fluid" />
            </div>
            <div className="review-info">
                <h3>
                    {reviews.name}
                </h3>
                <p className="review-p">{reviews.address}</p>
                <p className="review-desc">{reviews.description}</p>
            </div>

        </div>
        </Fade>
    );
};

export default ReviewDeatils;