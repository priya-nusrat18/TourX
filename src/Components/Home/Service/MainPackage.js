import React, { useEffect, useState } from 'react';
import loader from '../../../image/flight-loader.gif';
import './MainPackage.css';
import MainPackageDetails from './MainPackageDetails';

const MainPackage = () => {
    const [tourPackage, setTourPackage] = useState([])
    const [spinner, setSpinner] = useState(false);
    useEffect(() => {

        fetch('https://tourx-travel-agency.herokuapp.com/showPackage')
            .then(res => res.json())
            .then(data => {
                const tourData = data.slice(0,9)
                setTourPackage(tourData)
                setSpinner(true)
            })

    }, [])
    return (
        <section className="mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-heading my-5 text-center">
                            <h4 className="support-color2 mb-4">Choose your best Package</h4>
                            <h1 className="mb-3">Select Your Best Package <br /> For Your Travel</h1>
                        </div>
                    </div>
                  <div className="row">
                      {spinner?<> {
                        tourPackage.map( info =>  <MainPackageDetails info={info} key={info._id} />)
                    } </>
                    :<>
                    <div className='spinner-box text-center '>
                        <img src={loader} alt="" className="" />
                    </div>
                    </>}
                 
                  </div>
                </div>
            </div>
        </section>

    );
};

export default MainPackage;