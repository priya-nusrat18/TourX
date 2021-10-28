import React from 'react';
import './PopularPackage.css'
import PopularPackageDetails from './PopularPackageDetails';

const PopularPackage = () => {
    const tourInfo= [
        {
            price:180,
            stayInfo:'5 Days / 6 night',
            place:'Amalfi Costa, Italy',
            rating:'8k + Rating'
        },
        {
            price:180,
            stayInfo:'5 Days / 6 night',
            place:'Amalfi Costa, Italy',
            rating:'8k + Rating'
        },
        {
            price:180,
            stayInfo:'5 Days / 6 night',
            place:'Amalfi Costa, Italy',
            rating:'8k + Rating'
        },
        {
            price:180,
            stayInfo:'5 Days / 6 night',
            place:'Amalfi Costa, Italy',
            rating:'8k + Rating'
        },
        {
            price:180,
            stayInfo:'5 Days / 6 night',
            place:'Amalfi Costa, Italy',
            rating:'8k + Rating'
        }
    ]
    return (
        <section className="my-5 py-5">
                            
               <div className="p-wrap">
               <h4 className="support-color2 mb-4">Popular Package</h4>
               {
                        tourInfo.map( info =>  <PopularPackageDetails info={info} />)
                    }
                
               </div>
                  
                
        </section>
    );
};

export default PopularPackage;