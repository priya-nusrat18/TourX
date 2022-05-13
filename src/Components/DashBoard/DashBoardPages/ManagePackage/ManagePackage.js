import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import swal from 'sweetalert';
import './ManagePackage.css';


const ManagePackage = () => {
    const [manageServices, setManageServices] = useState([])

    useEffect(() => {

        fetch('https://tourx-travel-agency.herokuapp.com/showPackage')
            .then(res => res.json())
            .then(data => {
                setManageServices(data)
            })

    }, [manageServices])

    const deleteProduct = (id) => {
        swal({
            title: "If You Are Not Admin, Don't Delete It!",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                fetch(`https://tourx-travel-agency.herokuapp.com/deletePackage/${id}`,{
                    method:'DELETE'
                })
                .then(res => res.json())
                .then(result => {
                    if(result){
                       console.log('delete_success');
                       swal("Ok! Your imaginary file has been deleted!", {
                        icon: "success",
                      });
                    }
                })
            } else {
              swal("Your imaginary file is safe!");
            }
          });



       


    }

    return (
        <section className=' dashboard-container ' >
            <div className="text-center">
            <h2 class='pl-5 m-3'>Manage Service</h2>
            </div>

            <div className="dashboard-box">
                <Table className='table-borderless'>
                    <thead>
                        <tr>
                            <th className='text-secondary'>SL No </th>
                            <th className='text-secondary'>Package Title </th>
                            <th className='text-secondary'>Package Name </th>
                            <th className='text-secondary'>Package Price </th>
                            <th className='text-secondary'>Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            manageServices.map((service, index) =>
                                <tr className='text-brand-2'>
                                    <td>{index + 1}</td>
                                    <td>{service.title}</td>
                                    <td>{service.name}</td>
                                    <td>$ {service.price}</td>
                                    <td>
                                        <button onClick={() => deleteProduct(service?._id)} className='btn delete-btn'>
                                            <FontAwesomeIcon icon={faTrashAlt} />
                                        </button>
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

export default ManagePackage;