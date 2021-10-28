import React from 'react';
import {  Container, Row } from 'react-bootstrap';
import './Footer.css';
import logo from '../../../image/logo.png';
import FooterCol from './Footercol'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const company = [
    { name: 'Home', link: '/' },
    { name: 'Services', link: '/home' },
    { name: 'Reviews', link: '/home' },
    { name: 'Our Team', link: '/home' },
    { name: 'About Us', link: '/home' },
    { name: 'Contact Us', link: '/home' },
]

const usefulLink = [
    { name: 'Contact', link: '/home' },
    { name: 'F.A.Q', link: '/' },
    { name: 'Terms & Service', link: '/' },
    { name: 'Privacy Policy', link: '/' },
    { name: 'Cookie Policy', link: '/' },
    { name: 'Our Blog', link: '/' },
]

const Footer = () => {
    return (
        <footer className="footer-area">
            <Container>
                <Row>
                    <FooterCol>
                        <img src={logo} alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <div className="footer-social mb-4">
                            <span><a href="https://www.facebook.com/" target='_blank'>
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a></span>
                            <span><a href="https://twitter.com/" target='_blank'>
                                <FontAwesomeIcon icon={faTwitter} />
                            </a></span>
                            <span><a href="https://www.youtube.com/" target='_blank'>
                                <FontAwesomeIcon icon={faYoutube} />
                            </a></span>
                        </div>
                    </FooterCol>

                    <FooterCol menuTitle='Company' menuItems={company} />
                    <FooterCol menuTitle='Useful Link' menuItems={usefulLink} />

                </Row>
            </Container>
            <div className="copy-right text-center">
                <p>Copyright &copy; {(new Date()).getFullYear()} All right's Reserved @NusratPriya </p>
            </div>
        </footer>
    );
};

export default Footer;