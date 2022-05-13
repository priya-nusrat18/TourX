import React from 'react';
import './PopularPackage.css'
import PopularPackageDetails from './PopularPackageDetails';
import image1 from '../../../image/card1.png'
import image2 from '../../../image/card2.png'

const PopularPackage = () => {
    const tourInfo= [
        {
            image:image1,
            price:170,
            stayInfo:'5 Days / 6 night',
            place:'Machu Picchu, Peru',
            rating:'8k + Rating'
        },
        {   image:image2,
            price:160,
            stayInfo:'3 Days / 4 night',
            place:'Amalfi Costa, Italy',
            rating:'4k + Rating'
        },
        {
            image:image1,
            price:130,
            stayInfo:'2 Days / 3 night',
            place:'Great Wall, China',
            rating:'5k + Rating'
        },
        {   
            image:image2,
            price:100,
            stayInfo:'5 Days / 6 night',
            place:'Pyramids of Giza, Egypt',
            rating:'3k + Rating'
        },
        {   
            image:image1,
            price:120,
            stayInfo:'3 Days / 3 night',
            place:'The Colosseum, Rome',
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