import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../../../../App';
import './GiveReview.css';

const GiveReview = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { register, reset , handleSubmit, formState: { errors } } = useForm();

    const userImg = loggedInUser?.photoURL;

    const onSubmit = data => {
        console.log(data)
        const reviewInfo = {...data}
        reviewInfo.img = userImg;

        fetch('https://tourx-travel-agency.herokuapp.com/addReview', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(reviewInfo)
        })
            .then(res => res.json())
            .then(data => console.log("add review successfully"))
            handleAlertToast()
            reset()
    };

const handleAlertToast =()=>{
    toast("Successfully Send! Go Home Page To See Your Review", {
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
        <section className="given-review dashboard-container ">
            <div className="text-center">
            <h2 class='pl-5 m-3'>Review</h2>
            </div>

            <div className="review-form dashboard-box mb-5">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input {...register("name", { required: true })} placeholder='Enter Your Name' defaultValue={loggedInUser.name } className='form-control my-4' />
                    <p className='text-danger'>{errors.name && <span>This field is required</span>}</p>

                    <input {...register("address", { required: true })} placeholder="Enter Your Address" className='form-control my-4' />
                    <p className='text-danger'>{errors.address && <span>This field is required</span>}</p>

                    <input {...register("service", { required: true })} placeholder="Enter Your Package Name" defaultValue="Eiffel Tower, Paris" className='form-control my-4' />
                    <p className='text-danger'>{errors.service && <span>This field is required</span>}</p>

                    <textarea {...register("description", { required: true })} placeholder="Description" className='form-control my-4' rows='4' >
                    </textarea>
                    <p className='text-danger'>{errors.description && <span>This field is required</span>}</p>
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
                    <button onclick={handleAlertToast}  className="btn support-btn px-4 mt-2" type='submit'>Submit</button>
                   
                </form>
            </div>
        </section>
    );
};

export default GiveReview;