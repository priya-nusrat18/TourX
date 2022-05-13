import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddPackage.css';


const AddPackage = () => {
    
    const [imgUrl, setImgUrl] = useState(null);
    const { register, reset , handleSubmit, formState: { errors } } = useForm();

    const handleFileChange = (e) => {

        console.log(e.target.files);

        const imgData = new FormData();
        imgData.set('key', '879a758c310c8e7c6b03f634e3cafb92');
        imgData.append('image', e.target.files[0]);
        console.log('object', e.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imgData)
            .then(function (response) {
                setImgUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    console.log('object', imgUrl);
    
    const onSubmit = (data)  => {
        
    const newPackageData ={
        title: data.title,
            price: data.price,
            name: data.name,
            img: imgUrl,
    }

    fetch('https://tourx-travel-agency.herokuapp.com/addPackage', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPackageData)
    })
        .then(res => console.log("add package successfully"))
        handleAlertToast()
   
     console.log(newPackageData);
     reset()
    }


    //toast
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
        <section className='add-service dashboard-container '>
            <div className="text-center">
            <h2 class='pl-5 m-3'>Add Service</h2>
            </div>

            <div className='add-form'>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="d-flex form-bg">
                        <div className='form mr-5'>

                            <label htmlFor="">Package Title</label>
                            <input {...register("title", { required: true })} placeholder='Enter Title' className='form-control' />
                            <p class='text-danger'>{errors.title && <span>This field is required</span>}</p>

                            <label htmlFor="">Package Price</label>
                            <input  {...register("price", { required: true })} placeholder='Enter Price' className='form-control' />
                            <p class='text-danger'>{errors.price && <span>This field is required</span>}</p>

                            <label htmlFor="">Place Name</label>
                            <input {...register("name", { required: true })} placeholder='Enter Name' className='form-control' >
                            </input>
                            <p class='text-danger'> {errors.name && <span>This field is required</span>}</p>
                        </div>
                        <div className='mx-3'>
                            <label htmlFor="">Image</label> <br />
                            <input onChange={handleFileChange} type='file'  placeholder='Enter title' />
                        </div>
                    </div>
                    <div className='text-right mt-3'>
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
                        <button onclick={handleAlertToast} className="btn support-btn px-4 mt-2" type='submit'>Send</button>
                    </div>
                </form>

            </div>
        </section>
    );
};

export default AddPackage;