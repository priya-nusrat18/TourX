import React, { useContext, useEffect } from 'react';
import './CustomerOrderList.css';
import { useState } from 'react';
import { UserContext } from '../../../../App';
import { Row } from 'react-bootstrap';
import CustomerOrderListDetails from './CustomerOrderListDetails';

const CustomerOrderList = () => {

    const [bookList, setBookList] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    console.log(loggedInUser);
    useEffect(() => {
        fetch('https://afternoon-lake-94187.herokuapp.com/showBookList', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setBookList(data))
    }, [])
    console.log(bookList);

    return (
        <section className="dashboard-container">
            <div className="text-center">
            <h2 class='pl-5 m-3'>Order List</h2>
            </div>

            <div className="dashboard-box mb-5">
                <Row>
                    {
                        bookList.map(booked => <CustomerOrderListDetails bookedService={booked} key={booked._id} />)
                    }
                </Row>
            </div>
        </section>
    );
};

export default CustomerOrderList;