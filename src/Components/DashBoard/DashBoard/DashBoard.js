import React , {useContext , useState, useEffect} from 'react';
import { Col } from 'react-bootstrap';
import { Switch, useRouteMatch , Route} from 'react-router';
import AddPackage from '../DashBoardPages/AddPackage/AddPackage';
import GiveReview from '../DashBoardPages/GiveReview/GiveReview';
import MakeAdmin from '../DashBoardPages/MakeAdmin/MakeAdmin';
import ManagePackage from '../DashBoardPages/ManagePackage/ManagePackage';
import ShowBookingList from '../DashBoardPages/ShowBookingList/ShowBookingList';
import SideBar from '../SideBar/SideBar';
import {UserContext} from '../../../App'
import Profile from '../DashBoardPages/Profile/Profile';
import CustomerOrderList from '../DashBoardPages/CustomerOrderList/CustomerOrderList'
import loader from '../../../image/flight-loader.gif'

   

const DashBoard = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { url, path } = useRouteMatch();
    const [isAdmin, setIsAdmin] = useState(false);
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
      fetch("https://afternoon-lake-94187.herokuapp.com/isAdmin", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email: loggedInUser.email }),
      })
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data)
          setSpinner(true)
        });
      
    }, []);


    const containerStyle = {
        // backgroundColor: "#f4fbfd"
      };
    return (
        <section style={containerStyle} className='d-block overflow-hidden w-100 '>
         
                <div className="row">
                <Col md={2}>
          <SideBar url={url} ></SideBar>
        </Col>

        <Col md={10} className='pe-0 px-0'>
          {spinner? <>
            <div className="user-area ">
                  <img src={loggedInUser?.photoURL} alt="" />
                  <h5>{loggedInUser.googleName || loggedInUser.name}</h5>
                </div>
{isAdmin? 
<> 
        <Switch>
                  <Route exact path={`${path}/`}>
                    <Profile />
                  </Route>
                  <Route exact path={`${path}/profile`}>
                    <Profile />
                  </Route>
                  <Route path={`${path}/allOrders`}>
                    <CustomerOrderList />
                  </Route>
                  <Route path={`${path}/bookingList`}>
                    <ShowBookingList />
                  </Route>

                  <Route path={`${path}/giveReview`}>
                    <GiveReview />
                  </Route>

                  <Route path={`${path}/makeAdmin`}>
                    <MakeAdmin />
                  </Route>

                  <Route path={`${path}/addPackage`}>
                    <AddPackage />
                  </Route>

                  <Route path={`${path}/managePackage`}>
                    <ManagePackage />
                  </Route>
                  </Switch>
                  </>
                  :
                  <> 
                  <Route path={`${path}/allOrders`}>
                    <CustomerOrderList />
                  </Route>
                  <Route path={`${path}/giveReview`}>
                    <GiveReview />
                  </Route>
                  <Route exact path={`${path}/`}>
                    <Profile />
                  </Route>
                  <Route  path={`${path}/profile`}>
                    <Profile />
                  </Route>
                  </>
}
          </>:
          <>
            <div style={containerStyle} className='spinner-box text-center '>
                        <img src={loader} alt="" className="mt-5 pt-5" />
                    </div>
          </>
          }
       
        </Col>
        </div>
        
        </section>
    );
};

export default DashBoard;