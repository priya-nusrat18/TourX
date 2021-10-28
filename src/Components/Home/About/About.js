import React from "react";
import "./About.css";
import about1 from "../../../image/about-1.png";
import about2 from "../../../image/about-2.png";
import Slide from "react-reveal/Slide";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <section className=" my-5">
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-sm-12 col-12">
            <div className="about-wrapper-left">
                <Slide left>
              <div className="about-img1 d-md-inline-block d-sm-inline-block d-none">
                <img src={about1} alt="" />
              </div>
              <div className="about-img2 d-md-inline-block d-sm-inline-block d-none">
                <img src={about2} alt="" />
              </div>
              </Slide>
            </div>
          </div>
          <div className="col-md-5 col-sm-12 ">
            <div className="about-wrapper-right section-head head-left">
              <h5>About TourX</h5>
              <h2 className='my-3'>Best Travel Agency Company</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nesciunt eligendi quo possimus, debitis aliquam sapiente dolore
                autem! Tempore, veritatis illo! Corrupti rem, unde quibusdam
                deserunt sapiente laudantium magni suscipit praesentium
                reprehenderit iusto ut illum iure exercitationem, natus
                mollitia, totam placeat! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Numquam quis deserunt praesentium est modi
                porro ea nesciunt pariatur doloremque quaerat atque, debitis
                sint, voluptates dignissimos, consectetur assumenda? Doloremque,
                amet nam?
              </p>

              <ul className=" pt-3">
                <li className="d-flex">
                    <FontAwesomeIcon icon={faCheck} className="align-self-center me-2 text-black" />
                    Specilaized Bilingual Guide
                </li>
                <li className="d-flex">
                <FontAwesomeIcon icon={faCheck} className="align-self-center me-2 text-black" />
                    Best Tour Explainer
                </li>
                <li className="d-flex">
                <FontAwesomeIcon icon={faCheck} className="align-self-center me-2 text-black" />
                    Specilaized Service for you
                </li>
                <li className="d-flex">
                <FontAwesomeIcon icon={faCheck} className="align-self-center me-2 text-black" />
                    Best Package for you
                </li>
                <li className="d-flex">
                <FontAwesomeIcon icon={faCheck} className="align-self-center me-2 text-black" />
                    Our Expert Guide
                </li>
            </ul>
              <button className="my-3 support-btn">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
