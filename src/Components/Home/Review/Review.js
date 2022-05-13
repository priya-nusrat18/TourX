import React, { useEffect, useState } from "react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import loader from "../../../image/flight-loader.gif";
import "./Review.css";
import ReviewDeatils from "./ReviewDeatils";

const Review = () => {
  SwiperCore.use([Pagination, Autoplay]);
  const [reviews, setReviews] = useState([]);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    fetch("https://tourx-travel-agency.herokuapp.com/showReview")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setSpinner(true);
      });
  }, []);
  console.log("object", reviews);

  return (
    <section className=" mb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading my-5 text-center">
              <h4 className="support-color2 mb-4 mt-3">Our Traveller Say</h4>
              <h1 className="mb-3 mt-3">
                What Oue Traveller Say <br /> About Us
              </h1>
            </div>
          </div>
          <div className="row my-5">
            {spinner ? (
              <>
                <Swiper
                  loop={true}
                  pagination={{ clickable: true }}
                  slidesPerView={1}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 2,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                  }}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  spaceBetween={10}
                >
                  {reviews.map((reviews) => (
                    <SwiperSlide>
                      <ReviewDeatils reviews={reviews} />{" "}
                    </SwiperSlide>
                  ))}
                </Swiper>
              </>
            ) : (
              <>
                <div className="spinner-box text-center ">
                  <img src={loader} alt="" className="" />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
