import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope  } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF , faInstagram , faSkype , faTwitter } from '@fortawesome/free-brands-svg-icons' 

const Navbar = () => {
  return (
    <section className="">
      <div className="navbar-header support-bg">
        <Container className=" ">
          <Row>
            <div className="col-md-5 col-sm-6 col-12 d-flex justify-content-between">
              <div className="text-white d-flex">
                <FontAwesomeIcon className="align-self-center"  icon={faPhone} />
                <p className="ps-3 mt-3">+8801303000000</p>
              </div>
              <div className="text-white d-flex ms-2">
                <FontAwesomeIcon className="align-self-center" icon={faEnvelope} />
                <p className="ps-3 mt-3">nusratjahan5552@gmail.com</p>
              </div>
            </div>
            <div className=" offset-md-3 col-md-4  d-md-block d-none">
              <div className="social-icon-header d-flex support-color2 justify-content-around ">
              <FontAwesomeIcon className="align-self-center  mb-2" icon={faInstagram} />
              <FontAwesomeIcon className="align-self-center mb-2" icon={faFacebookF} />
              <FontAwesomeIcon className="align-self-center mb-2" icon={faSkype} />
              <FontAwesomeIcon className="align-self-center mb-2" icon={faTwitter} />

              </div>
            </div>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Navbar;
