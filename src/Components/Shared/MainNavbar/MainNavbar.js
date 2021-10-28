import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from '../../../App';
import logo from "../../../image/logo.png"
import { faUser  } from "@fortawesome/free-solid-svg-icons";
import "./MainNavbar.css";

const MainNavbar = () => {
    const [ loggedInUser] =useContext(UserContext)
    const {googleName, name,  isSignedIn}=loggedInUser;
   
    return (
      <Navbar expand="lg sticky-top ">
        <Container>
          <Navbar.Brand as={Link} to="/">
            {" "}
            <img className='logo' src={logo} alt="" /> {" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                Book Now 
              </Nav.Link>
              <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
              {/* <Nav.Link as={Link} to="/login">
                  <FontAwesomeIcon className="me-3" icon={faUser} />
                  Login
                  </Nav.Link> */}
              
  
              <Nav.Link as={Link} to="/login" className="support-btn" me-3>
              <FontAwesomeIcon className="me-1" icon={faUser} />
                {isSignedIn ? name || googleName || 'Logout' : 'Login' }
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default MainNavbar;