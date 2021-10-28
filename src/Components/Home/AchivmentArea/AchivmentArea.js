import React from 'react';
import './AchivmentArea.css'
import AchivmentAreaDetails from './AchivmentAreaDetails';
import client from '../../../image/client.png'
import experience from '../../../image/experience.png'
import trust from '../../../image/trust.png'
import user from '../../../image/user.png'

const AchivmentArea = () => {
    const achivIqnfo= [
        {
            img: client,
            title:"2000+ Our worldwide guide"
        },
        {
            img: trust,
            title:"100% trusted travel agency"
        },
        {
            img: experience,
            title:"10+ year of travel experience"
        },
        {
            img: user,
            title:"90% of our traveller happy"
        }
    ]
    return (
        <section className="AchivmentArea-bg mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-heading my-5 text-center">
                            <h4 className="support-color2 mb-4 mt-3">Why Tourx</h4>
                            <h1 className="mb-3 mt-3">Why You Are Travel With  <br /> Tourx</h1>
                        </div>
                    </div>
                  <div className="row my-5">
                  {
                        achivIqnfo.map( achiv =>  <AchivmentAreaDetails achiv={achiv} />)
                    }
                  </div>
                </div>
            </div>

        </section>
    );
};

export default AchivmentArea;