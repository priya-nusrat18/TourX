import React from 'react';
import './BusinessInfo.css'
import {faClock , faMapMarker , faPhone} from '@fortawesome/free-solid-svg-icons'
import BusinessInfoCard from './BusinessInfoCard';

const BusinessInfo = () => {
    const businessInfo = [ 
        { 
            title: 'Opening hour',
            description:'we are open 7 days',
            icon : faClock,  
        },
        {
            title: 'Visit our location',
        description:' NewYork 10003 USA',
        icon : faMapMarker
        },
        {
            title: 'Call Us Now',
        description:'Call Us Now +01303000000',
        icon : faPhone
        }
    ]
    return (
        <section className="mb-4">
            <div className="container BusinessInfo-bg">
                <div className="row ">
                        {
                         businessInfo.map( info => <BusinessInfoCard info={info} />)   
                        }
                </div>
            </div>
            
        </section>
    );
};

export default BusinessInfo;