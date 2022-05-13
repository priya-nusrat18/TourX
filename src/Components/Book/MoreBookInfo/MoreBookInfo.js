import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import  Fade  from "react-reveal/Fade";
import "./MoreBookInfo.css";

const MoreBookInfo = () => {
  return (
    <div className="p-timeline mt-5">
      <Fade left>
      <ul>
        <li className="d-flex">
          <div className="timeline-index">
            <div className="timeline-circle">
              <h5 className="text-white">01</h5>
            </div>
          </div>
          <div className="timeline-content ">
            <h5>DAY 1 : Departure And Small Tour</h5>
            <strong>10.00 AM to 10.00 PM</strong>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              accusantium et in necessitatibus non eum blanditiis quisquam nisi
              reprehenderit, porro ullam quod nulla tenetur obcaecati labore
              tempora nobis alias quidem.
            </p>
            <ul>
                <li className="d-flex">
                    <FontAwesomeIcon icon={faCheck} className="align-self-center me-2 text-black" />
                    Specilaized Bilingual Guide
                </li>
                <li className="d-flex">
                <FontAwesomeIcon icon={faCheck} className="align-self-center me-2 text-black" />
                    Specilaized Bilingual Guide
                </li>
                <li className="d-flex">
                <FontAwesomeIcon icon={faCheck} className="align-self-center me-2 text-black" />
                    Specilaized Bilingual Guide
                </li>
            </ul>
          </div>
        </li>
        <li className="d-flex">
          <div className="timeline-index">
            <div className="timeline-circle">
              <h5 className="text-white">02</h5>
            </div>
          </div>
          <div className="timeline-content ">
            <h5>DAY 1 : Departure And Small Tour</h5>
            <strong>10.00 AM to 10.00 PM</strong>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              accusantium et in necessitatibus non eum blanditiis quisquam nisi
              reprehenderit, porro ullam quod nulla tenetur obcaecati labore
              tempora nobis alias quidem.
            </p>
            <ul className=''>
                <li className="d-flex">
                    <FontAwesomeIcon icon={faCheck} className="align-self-center me-2 text-black" />
                    Specilaized Bilingual Guide
                </li>
                <li className="d-flex">
                <FontAwesomeIcon icon={faCheck} className="align-self-center me-2 text-black" />
                    Specilaized Bilingual Guide
                </li>
                <li className="d-flex">
                <FontAwesomeIcon icon={faCheck} className="align-self-center me-2 text-black" />
                    Specilaized Bilingual Guide
                </li>
            </ul>
          </div>
        </li>
        <li className="d-flex">
          <div className="timeline-index">
            <div className="timeline-circle">
              <h5 className="text-white">03</h5>
            </div>
          </div>
          <div className="timeline-content pb-1">
            <h5>DAY 1 : Departure And Small Tour</h5>
            <strong>10.00 AM to 10.00 PM</strong>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              accusantium et in necessitatibus non eum blanditiis quisquam nisi
              reprehenderit, porro ullam quod nulla tenetur obcaecati labore
              tempora nobis alias quidem.
            </p>
            <ul className="">
                <li className="d-flex">
                    <FontAwesomeIcon icon={faCheck} className="align-self-center me-2 text-black" />
                    Specilaized Bilingual Guide
                </li>
                <li className="d-flex">
                <FontAwesomeIcon icon={faCheck} className="align-self-center me-2 text-black" />
                    Specilaized Bilingual Guide
                </li>
                <li className="d-flex">
                <FontAwesomeIcon icon={faCheck} className="align-self-center me-2 text-black" />
                    Specilaized Bilingual Guide
                </li>
            </ul>
          </div>
        </li>
      </ul>
      </Fade>
    </div>
  );
};

export default MoreBookInfo;
