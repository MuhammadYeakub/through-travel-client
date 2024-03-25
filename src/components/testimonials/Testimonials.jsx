import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="bg-[#FFFFFF] pt-20 px-4">
      <h1 className="mb-16 text-center font-bold text-3xl">Testimonials</h1>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={true}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@1.00": {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          className="mySwiper h-[340px]"
        >
          <h1>hello</h1>
          {reviews.map((r) => (
            <SwiperSlide key={r._id}>
              <div className="p-5 rounded-xl md:w-[370px] mx-auto ">
                <div className="flex items-center gap-5">
                  <img src={r.img} className="w-16 h-16 rounded-full" alt="" />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-700">
                      {r.name}
                    </h2>
                    <p className="text-gray-600 text-sm">
                      {r.designation}, {r.company}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-gray-500">{r.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
