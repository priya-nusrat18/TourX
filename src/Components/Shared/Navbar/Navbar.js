import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faSkype, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {
  return (
    <>
      <div className="navbar-header support-bg d-flex justify-content-center align-items-center">
        <div className="navbar_container d-flex justify-content-between align-items-center">
          <div className="contact_part d-flex justify-content-between align-items-center">
            <div className="phone_number d-flex align-items-center me-3">
              <FontAwesomeIcon className="align-self-center" icon={faPhone} />
              <span className="ps-2">+8801303000000</span>
            </div>
            <div className="email_add d-flex align-items-center">
              <FontAwesomeIcon className="align-self-center" icon={faEnvelope} />
              <span className="ps-2 ">nusratjahan5552@gmail.com</span>
            </div>
          </div>
          <div className="social_contact_part d-md-block d-none">
          <FontAwesomeIcon className="align-self-center  me-3" icon={faInstagram} />
             <FontAwesomeIcon className="align-self-center me-3" icon={faFacebookF} />
            <FontAwesomeIcon className="align-self-center me-3" icon={faSkype} />
            <FontAwesomeIcon className="align-self-center me-3" icon={faTwitter} />
          </div>
        </div>
      </div>
    </>
    // <div className="navbar-header support-bg">
    //   <Container className=" ">
    //     <Row>
    //       <div className="col-md-5 col-sm-6 col-12 d-flex justify-content-between">
    //         <div className="text-white d-flex">
    //           <FontAwesomeIcon className="align-self-center"  icon={faPhone} />
    //           <p className="ps-3 mt-3">+8801303000000</p>
    //         </div>
    //         <div className="text-white d-flex ms-2">
    //           <FontAwesomeIcon className="align-self-center" icon={faEnvelope} />
    //           <p className="ps-3 mt-3">nusratjahan5552@gmail.com</p>
    //         </div>
    //       </div>
    //       <div className=" offset-md-3 col-md-4  d-md-block d-none">
    //         <div className="social-icon-header d-flex support-color2 justify-content-around ">
    //         <FontAwesomeIcon className="align-self-center  mb-2" icon={faInstagram} />
    //         <FontAwesomeIcon className="align-self-center mb-2" icon={faFacebookF} />
    //         <FontAwesomeIcon className="align-self-center mb-2" icon={faSkype} />
    //         <FontAwesomeIcon className="align-self-center mb-2" icon={faTwitter} />

    //         </div>
    //       </div>
    //     </Row>
    //   </Container>
    // </div>
  );
};

export default Navbar;
