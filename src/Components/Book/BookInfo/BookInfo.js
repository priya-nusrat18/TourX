import { faMapMarker, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Slide from 'react-reveal/Slide';
import "./BookInfo.css";

const BookInfo = ({id}) => {
  const [packageDetails , setPackageDetails] =useState({})
  const {name, title , img}=packageDetails;

  useEffect(() => {

    fetch(`https://tourx-travel-agency.herokuapp.com/package/${id}`)
        .then(res => res.json())
        .then(data => {
            setPackageDetails(data)
        })

}, [id])

  console.log(id);
  return (
    <div className="package-details my-5">
      <div className="package-thumb">
        <Slide left>
        <img src={img} alt="" className="img-fluid package-thumb w-100" />
        </Slide>
      </div>
      <div className="package-header">
        <div className="package-title">
          <h3>{title}</h3>
          <strong>
            <FontAwesomeIcon
              icon={faMapMarker}
              className="support-color2 me-2"
            />
            {name}
          </strong>
        </div>
        <div className="pd-review ">
          <p>Excellent</p>
          <ul>
            <li>
              <FontAwesomeIcon className="bx" icon={faStar} />
            </li>
            <li>
              <FontAwesomeIcon className="" icon={faStar} />
            </li>
            <li>
              <FontAwesomeIcon className="bx" icon={faStar} />
            </li>
            <li>
              <FontAwesomeIcon className="bx" icon={faStar} />
            </li>
            <li>
              <FontAwesomeIcon className="bx" icon={faStar} />
            </li>
          </ul>
          <p>800 Review</p>
        </div>
      </div>
      <hr />
      <div className="timeline-overview text-left">
        <h3>Overview</h3>
        <p className="my-3 brand-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          praesentium porro laboriosam magni numquam fuga sit beatae voluptatem
          saepe ea facere minus quibusdam ipsa debitis. Obcaecati magni omnis
          placeat, libero illum excepturi minima voluptas rem mollitia!
        </p>
      </div>
      
    </div>
  );
};

export default BookInfo;
