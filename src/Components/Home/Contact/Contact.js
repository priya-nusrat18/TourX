import React from 'react';
import './Contact.css';
import { Container, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGoogle, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Slide from  'react-reveal/Slide';

const Contact = () => {
    return (
        <section className='section-area my-5'>
             <Container>
                <div className="row">
                <div className="col-md-12">
                        <div className="section-heading my-5 text-center">
                            <h4 className="support-color2 mb-4">Contact Us</h4>
                            <h1 className="mb-3">Get In Touch <br /> For Latest Update</h1>
                        </div>
                    </div>
                </div>
                <Row>

                    <Col md={7} sm={6} col={12}>
                        <form className="form-area">
                            <input type="text" placeholder='Name' className='form-control my-3' />
                            <input type="email" placeholder='Email' className='form-control my-3' />
                            <input type="text" placeholder='Mobile' className='form-control my-3' />
                            <input type="text" placeholder='Address' className='form-control my-3' />
                            <textarea className='form-control my-3' rows='4' placeholder='Message'></textarea>
                            <div className='text-right'>
                                <button className="btn support-btn px-3 py-2 my-3">Send Us</button>
                            </div>
                        </form>
                    </Col>
                    <Col md={5} sm={6} col={12}>
                    <Slide right>
                        <div className="wrap-form py-5 ">
                               
                        <div className="contact-details">
                            <p>Address <span> <FontAwesomeIcon icon={faCompass} /></span>
                                <small>Bogura sadar, Bogura, Bangladesh</small>
                            </p>
                        </div>
                        <div className="contact-details">
                            <p>Phone<span><FontAwesomeIcon icon={faPhoneAlt} /></span>
                                <small>+880130300000</small>
                            </p>
                        </div>
                        <div className="contact-details">
                            <p>Email <span><FontAwesomeIcon icon={faEnvelope} /></span>
                                <small>nusratjahan5552@gmail.com</small>
                            </p>
                        </div>
                        <div className="contact-details">
                            <p>Get Social 
                            <span><a href="https://www.facebook.com/" target='_blank'>
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                                </span>
                                <span><a href="https://twitter.com/" target='_blank'>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                </span>
                                <span><a href="https://www.google.com/" target='_blank'>
                                    <FontAwesomeIcon icon={faGoogle} />
                                </a>
                                </span>
                                <span><a href="https://www.linkedin.com/" target='_blank'>
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a></span>
                            </p>
                        </div>
                        
                        </div>
                        </Slide>               

                    </Col>

                </Row>
            </Container>


        </section >
    );
};

export default Contact;