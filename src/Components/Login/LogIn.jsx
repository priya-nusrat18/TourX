import React, { useContext, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faGoogle } from "@fortawesome/free-brands-svg-icons";
import "./Login.css";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import MainNavbar from "../Shared/MainNavbar/MainNavbar";
import firebaseConfig from "./FirebaseConfig";
import logo from '../../image/logo.png'

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import ConfirmationModal from "../Book/PaymentProcess/ConfirmationModal";
  

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

const LogIn = () => {
    const [ loggedInUser, setLoggedInUser] = useContext(UserContext)
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
  const [option, setoption] = useState("login");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    isSignedIn: false,
    error: "",
  });
  console.log(loggedInUser);
 
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  //toast
  const handleAlertToast =()=>{
    toast(" Alert!  For Test Only As Admin.Don't Misuse.", {
      position: "top-right",
      autoClose: 7000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className:'custom-toast'
      })
  }
  const signupSubmit = async (data) => {
    const userDetails = { ...user };
    userDetails.name = data.name;
    userDetails.password = data.password;
    userDetails.email = data.email;
    setUser(userDetails);
    setLoggedInUser(userDetails);
    

    firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((userCredential) => {
        var user = userCredential.user;
        var { displayName, email } = userCredential.user;
        const userDetails = { ...user };
        userDetails.name = displayName;
        userDetails.isSignedIn = true;
        userDetails.email = email;
        updateUserName(data.name);
        setUser(userDetails);
        setLoggedInUser(userDetails);
        history.replace(from);
        console.log("object", userCredential.user);
        console.log(userDetails);
      })
      .catch((error) => {
        console.log(error.code, error.message);
        const userDetails = { ...user };
        userDetails.error = error.message;
        setUser(userDetails);
        setLoggedInUser(userDetails);
      });
  };

  const loginSubmit = (values) => {
    console.log(values);

     firebase
  .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then((userCredential) => {
        var user = userCredential.user;
        var { displayName, email } = userCredential.user;
        const userDetails = { ...user };
        userDetails.name = displayName;
        userDetails.isSignedIn = true;
        userDetails.email = email;
        setUser(userDetails);
        setLoggedInUser(userDetails);
        
        history.replace(from);
        console.log("signinuser", user.displayName);
        
      })
     .catch((error) => {
        console.log(error.code, error.message);
        const userDetails = { ...user };
        userDetails.error = error.message;
        setUser(userDetails);
        setLoggedInUser(userDetails);
      });
    //   openModal()
  };

  const updateUserName = (name) => {
    var user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: name,
      })
      .then(function () {
        console.log("Update successful.");
      })
      .catch(function (error) {
        console.log(error.code, error.message);
      });
  };
  
  const googleSignIn = () =>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase
          .auth()
          .signInWithPopup(provider)
          .then((result) => {
            var { displayName, email , photoURL } = result.user;
            const userDetails = { ...user };
            userDetails.googleName = displayName;
            userDetails.isSignedIn = true;
            userDetails.email = email;
            userDetails.photoURL = photoURL;
            setUser(userDetails);
            setLoggedInUser(userDetails)
            history.replace(from);
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.log(errorCode, errorMessage, email, credential);
            const userDetails = { ...user };
            userDetails.error = errorMessage;
            setUser(userDetails);
            setLoggedInUser(userDetails);
          });
      
  };
 // modal 

 const [modalIsOpen, setIsOpen] = useState(false);
 function openModal() {
     setIsOpen(true);
 }
 function closeModal() {
     setIsOpen(false);
 }
 
  return (
    <div className="login-section">
      <MainNavbar />
      <Container>
      <div className="text-center">
      <h2 className='login-title'>Welcome To <br />  TourX-TravelTourism Agency</h2>
                    <img src={logo} alt="" className="w-60" />
      </div>
        {option === 'login' && (
          <div className="login-area my-3 text-center">
            <form
              className="px-3 py-2  mt-1 shadow"
              style={{ backgroundColor: "#fafafa" }}
              onSubmit={handleSubmit(loginSubmit)}
            >
              <h1>Login Here</h1> 
              <br />
              <input
                name="email"
                defaultValue="admintest1@gmail.com"
                className="form-control"
                placeholder="Your Email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />

              {errors.email && errors.email.type === "required" && (
                <span className="text-danger">Email is required</span>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <span className="text-danger">
                  Please , type correct email address !
                </span>
              )}

              <input
                name="password"
                defaultValue="12345678"
                className="form-control"
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 6,
                    message: "Password must have at least 8 characters",
                  },
                })}
              />
              <p style={{ color: "red" }}>
                {errors.password && <span>{errors.password.message}</span>}
              </p>
              <p style={{ color: "red" }}> {user.error} </p>
              <ToastContainer 
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
              <button onClick={handleAlertToast} type="submit" className="support-btn mb-2">
              Login
            </button>
            <ConfirmationModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
            </form>
            
            <p className="mt-3 optional-option">
              Don’t have an account?{" "}
              <button className='support-btn' onClick={() => setoption("signup")}>
                Create an account
              </button>{" "}
            </p>
          </div>
        )}
        {option === 'signup' && (
          <div  className="login-area my-3 text-center">
            <form
              className="px-3 py-2 mt-1 shadow"
              style={{ backgroundColor: "#fafafa" }}
              onSubmit={(e) => e.preventDefault()}
            >
              <h1>Create an account </h1>
              <br />
              <input
                name="name"
                className="form-control"
                placeholder="Your Name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-danger">Name is required</span>
              )}

             
              <input
                name="email"
                className="form-control"
                placeholder="Your Email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />

              {errors.email && errors.email.type === "required" && (
                <span className="text-danger">Email is required</span>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <span className="text-danger">
                  Please , type correct email address !
                </span>
              )}

              <input
                name="password"
                className="form-control"
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 6,
                    message: "Password must have at least 8 characters",
                  },
                })}
              />
              <p style={{ color: "red" }}>
                {errors.password && <span>{errors.password.message}</span>}
              </p>
              <input
                name="password_repeat"
                type="password"
                placeholder="Confirm Password"
                className="form-control"
                {...register("password_repeat", {
                  required: true,
                  minLength: 6,
                  validate: (value) =>
                    value === password.current || "The passwords do not match",
                })}
              />
              {errors.password_repeat && (
                <p className="text-danger">{errors.password_repeat.message}</p>
              )}
              <p style={{ color: "red" }}> {user.error} </p>
            
            <button className="support-btn"  onClick={handleSubmit(signupSubmit)}>SignUp</button>
            </form>
            <p className=" mt-3 optional-option">
              Already have an account?{" "}
              <button className="support-btn" onClick={() => setoption("login")}>Login</button>{" "}
            </p>
          </div>
        )}
         <div className="social-login-option text-center">
        <p className="or text-white text-center">Or</p>
        <button className="google-btn my-3 " onClick={googleSignIn } >
          <span className="support-color2">
            <FontAwesomeIcon className="google support-color2" icon={faGoogle} />
          </span>{" "}
          <span className="social-text">Continue with Google</span>
        </button> 
        {/* <br />
        <button className="login-btn mt-3">
          <span className="btn-white">
            <FontAwesomeIcon className="fb" icon={faFacebook} />
          </span>{" "}
          <span className="social-text">Continue with Facebook</span>
        </button> */}
      </div>
      </Container>
    </div>
  );
};

export default LogIn;