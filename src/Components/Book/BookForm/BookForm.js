import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";
import PaymentProcess from "../PaymentProcess/PaymentProcess";
import "./BookForm.css";

const BookForm = ({id}) => {
  const [ loggedInUser] =useContext(UserContext)
  const {googleName ,email , name}=loggedInUser;

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [bookInfo , setBookInfo]= useState({})

  const [bookIn , setBookIn] = useState(true)
  const [packageDetails , setPackageDetails] =useState({})
 
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  useEffect(() => {

    fetch(`https://tourx-travel-agency.herokuapp.com/package/${id}`)
        .then(res => res.json())
        .then(data => {
            setPackageDetails(data)
        })

}, [id])

  const onSubmit = (data) => {
    const date = selectedDate.toDateString();
    const bookData ={...data}
    bookData.date = date;
    bookData.createdDate = (new Date()).toDateString()
    console.log(bookData);

    setBookInfo(bookData)
    setBookIn(false)

    reset()
  };
const handleProcessPayment = (paymentId) => {
    const allBookData = {...bookInfo}
    allBookData.placeName =packageDetails?.name;
    allBookData.title =packageDetails?.title;
    allBookData.price =packageDetails?.price;
    allBookData.img =packageDetails?.img;
    allBookData.status = 'pending';
    allBookData.paymentId = paymentId;
    console.log(allBookData);

    delete allBookData._id;
    fetch('https://tourx-travel-agency.herokuapp.com/addOrder' , {
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      } ,
      body:JSON.stringify(allBookData)
    })
    .then(res => {
      console.log( 'send order database ',res);
    })

}
  return (
    <>
    {
      bookIn ?  
    <div className="package-d-sidebar my-5 ">
      <Row>
        <div className="p-sidebar-form py-5">
          <form onSubmit={handleSubmit(onSubmit)} className="py-4">
            <h5 className="package-d-head">Book This Package</h5>
            <Row>
              <Col md={12} sm={6} col={6}>
                <input
                  name="Name"
                  defaultValue={googleName || name}
                  className="form-control"
                  placeholder="Name"
                  {...register("Name", { required: true })}
                />
                {errors.Name && (
                  <span className="text-danger">Name is required</span>
                )}
              </Col>
              <Col md={12} sm={6} col={6}>
                <input
                  name="email"
                  defaultValue={email}
                  className="form-control"
                  placeholder="email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-danger">Email is required</span>
                )}
              </Col>
              <Col md={12} sm={6} col={6}>
                <input
                  name="phone"
                  className="form-control"
                  placeholder="phone"
                  {...register("phone", { required: true })}
                />
                {errors.phone && (
                  <span className="text-danger">Phone is required</span>
                )}
              </Col>
            </Row>
            <Row>
              <Col md={6} col={6}>
                <select
                  className="form-control"
                  placeholder="Adult"
                  name="adult"
                  {...register("adult", { required: true })}
                >
                  <option value="1">Adult</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                {errors.adult && (
                  <span className="text-danger">This field is required</span>
                )}
              </Col>
              <Col md={6} col={6}>
                <select
                  placeholder="Child"
                  className="form-control"
                  name="child"
                  {...register("child", { required: true })}
                >
                  <option value="1">Child</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                {errors.child && (
                  <span className="text-danger">This field is required</span>
                )}
              </Col>
              <Col md={12} sm={6} col={6}>
                <div className="date-wrap py-3">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      value={selectedDate}
                      onChange={handleDateChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </div>
              </Col>
            </Row>
            
           
            <button  className="support-btn" type="submit">
              send{" "}
            </button>
          </form>
        </div>
      </Row>
    </div>
    
    :
    <div className="package-d-sidebar py-5 ms-3 ">
      <PaymentProcess handleProcessPayment={handleProcessPayment} setBookIn={setBookIn} />
    </div>
}
    </>
  );
};

export default BookForm;
