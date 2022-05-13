import React, { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import loader from '../../../image/flight-loader.gif';
import NewServiceDetails from './NewServiceDetails';
const NewService = () => {
    const [spinner, setSpinner] = useState(false);
    const [tourPackage, setTourPackage] = useState([])
    useEffect(() => {

        fetch('https://tourx-travel-agency.herokuapp.com/showPackage')
            .then(res => res.json())
            .then(data => {
                const tourData = data.slice(9,15)
                setTourPackage(tourData)
                setSpinner(true)
            })

    }, [])

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
      ]
    return (
        <section className="mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-heading my-5 text-center">
                            <h4 className="support-color2 mb-4">Check our new Package</h4>
                            <h1 className="mb-3">Select Our New Package <br /> For Your Travel</h1>
                        </div>
                    </div>
                    </div>
                  <div className="row">
                      {spinner ? <> 
                        <Carousel breakPoints={breakPoints}>
                  {
                        tourPackage.map( info =>  <NewServiceDetails key={info._id} info={info} />)
                    }
                    </Carousel></> 
                    :
                     <> 
                     <div className='spinner-box text-center '>
                        <img src={loader} alt="" className="" />
                    </div>
                     </>}
                 
                  </div>
               
            </div>
        </section>
    );
};

export default NewService;