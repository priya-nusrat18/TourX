import React from 'react';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './MakeAdmin.css';


const MakeAdmin = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)

        fetch('https://tourx-travel-agency.herokuapp.com/makeAdmin', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => console.log("successfully admin made"))
            handleAlertToast()
    };

const handleAlertToast =()=>{
    toast("Successfully Send!", {
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
    return (
        <section className="make-admin dashboard-container">
            <div className="text-center">
            <h2 class='pl-5 m-3'>Make Admin </h2>
            </div>

            <div className="make-admin-form dashboard-box">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label htmlFor="">Name</label>
                    <input {...register("name", { required: true })} placeholder='Enter Name' className='form-control' />
                    <p class='text-danger'>{errors.name && <span>This field is required</span>}</p>

                    <label htmlFor="">Email</label>
                    <input type='email' {...register("email", { required: true })} placeholder='Enter Email' className='form-control' />
                    <p class='text-danger'>{errors.email && <span>This field is required</span>}</p>
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
                    <button  onclick={handleAlertToast} className=" support-btn px-4 mt-2" type='submit'>Send</button>
                </form>
            </div>

        </section>
    );
};

export default MakeAdmin