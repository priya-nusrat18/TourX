import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../../../App';

const ShowBookingList = () => {

    const [orderList, setOrderList] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('https://tourx-travel-agency.herokuapp.com/showBookList', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setOrderList(data))
    }, [])
    console.log(orderList);
    
    const handleUpdateStatus = (id,event) => {
        console.log('update', event.target.value);
        console.log('id', id);

        const updateData = {
            updateId: id,
            status: event.target.value
        }
        fetch('https://tourx-travel-agency.herokuapp.com/updateStatus', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                console.log("updated", data);
            })

    }


    return (
        <section className="dashboard-container ">
            <div className="text-center">
            <h2 class='pl-5 m-3'>Order List</h2>
            </div>


            <div className="dashboard-box">
                <Table className='table-borderless'>
                    <thead>
                        <tr>
                            <th className='text-secondary'>Name </th>
                            <th className='text-secondary'>Email </th>
                            <th className='text-secondary'>Package Name </th>
                            <th className='text-secondary'>Price </th>
                            <th className='text-secondary'>Pay With </th>
                            <th className='text-secondary'>Status </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orderList.map((service, index) =>

                                <tr className='text-brand-2'>
                                    <td>{service.Name}</td>
                                    <td>{service.email}</td>
                                    <td>{service.title}</td>
                                    <td>$ {service.price}</td>
                                    <td> {service.cards} card</td>
                                    <td>
                                        <select onChange={(event) => handleUpdateStatus(service._id,event)} defaultValue={service.status} className='form-control'>
                                            <option value='pending'>Pending</option>
                                            <option value='ongoing'>Ongoing</option>
                                            <option value="done">Done</option>
                                        </select>
                                    </td>
                                </tr>
                            )

                        }
                    </tbody>
                </Table>
            </div>
        </section>
    );
};

export default ShowBookingList;