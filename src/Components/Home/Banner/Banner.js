import React from "react";
import "./Banner.css";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <section className="banner-bg d-flex justify-content-center  align-items-center">
      <div className="container">
        <div className="row ">
          <div className="col-md-12">
            <div className="header-main text-center w-100">
              <Fade bottom>
                <h5 className="text-white mb-2"> 
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("7 Days , 8 Nights tour ! ")
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("Book Now !")
                      .pauseFor(2000)
                      .deleteAll()
                      .start();
                  }}
                />
                </h5>
                <h1 className="slide-text1 text-white">
                  {" "}Amazing <br />
                  Tour In World
                </h1>

                <Link className="text-center" to="/">
                  <button className="support-btn my-3">BOOK NOW</button>
                </Link>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
