import {
  faBars,
  faPlus,
  faListOl,
  faCommentDots,
  faUserPlus,
  faUser,
  faHome,
  faGripHorizontal,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect , useContext } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";
import {UserContext} from '../../../App'


const SideBar = ({url}) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("https://afternoon-lake-94187.herokuapp.com/isAdmin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, []);

  return (
    <>
      <div className="navbar d-md-none d-sm-block">
        <Link to="#" className="menu-bars ">
          <FontAwesomeIcon className='text-white' onClick={showSidebar} icon={faBars} />
        </Link>
      </div>
      <nav className= { sidebar ? 'nav-menu active' : 'nav-menu'} >
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-barsClose d-md-none d-sm-block">
              <FontAwesomeIcon className='text-white' icon={faTimes} />
            </Link>
          </li>
          <li className="">
            <Link  to="/" className="text-white nav-text">
             <FontAwesomeIcon icon={faHome} /> <span>Home</span>
            </Link>
          </li>
          {isAdmin? 
<> 
          <li>
            <Link to={`${url}/profile`} className="text-white nav-text">
            <FontAwesomeIcon icon={faUser} /> <span>Profile</span>
            </Link>
          </li>
          <li>
            <Link exact  to={`${url}/allOrders`} className="text-white nav-text">
              <FontAwesomeIcon icon={faListOl} />
              <span>Order List</span>
            </Link>
          </li>
          <li>
            <Link   to={`${url}/bookingList`} className="text-white nav-text">
              <FontAwesomeIcon icon={faListOl} />
              <span>All Book</span>
            </Link>
          </li>
          <li>
            <Link to={`${url}/giveReview`}  className="text-white nav-text">
              <FontAwesomeIcon icon={faCommentDots} />
              <span>Review</span>
            </Link>
          </li>
          <li>
            <Link  to={`${url}/makeAdmin`}  className="text-white nav-text">
              <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
            </Link>
          </li>
          <li>
            <Link  to={`${url}/addPackage`}  className="text-white nav-text">
              <FontAwesomeIcon icon={faPlus} />
              <span>Add Package</span>
            </Link>
          </li>
          <li>
            <Link to={`${url}/managePackage`}  className="text-white nav-text">
              <FontAwesomeIcon icon={faGripHorizontal} />{" "}
              <span>Manage Package</span>
            </Link>
          </li>
          </>
          :
          <>
         <li>
            <Link to={`${url}/profile`} className="text-white nav-text">
            <FontAwesomeIcon icon={faUser} /> <span>Profile</span>
            </Link>
          </li>
          <li>
            <Link exact  to={`${url}/allOrders`} className="text-white nav-text">
              <FontAwesomeIcon icon={faListOl} />
              <span>Order List</span>
            </Link>
          </li>
          <li>
            <Link to={`${url}/giveReview`}  className="text-white nav-text">
              <FontAwesomeIcon icon={faCommentDots} />
              <span>Review</span>
            </Link>
          </li>
          </>
}
        </ul>
      </nav>
    </>
  );
};

export default SideBar;
