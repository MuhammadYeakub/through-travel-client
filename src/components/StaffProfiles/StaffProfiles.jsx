import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { FaBriefcase, FaStar, FaUser } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
const StaffProfiles = () => {
  const staffData = [
    {
      id: 1,
      name: "Maria Garcia",
      role: "Skuba Diver",
      experience: "5 years",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Selena Gomez",
      role: "Parachute Jumper",
      experience: "7 years",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Taylor Swift",
      role: "Sky Diver",
      experience: "3 years",
      rating: 4.9,
    },
    {
      id: 4,
      name: "Emma Watson",
      role: "Scuba Diver",
      experience: "4 years",
      rating: 4.7,
    },
    {
      id: 5,
      name: "Jennifer Lawrence",
      role: "Parachute Jumper",
      experience: "6 years",
      rating: 4.6,
    },
    {
      id: 6,
      name: "Emma Stone",
      role: "Sky Diver",
      experience: "2 years",
      rating: 4.9,
    },
    {
      id: 7,
      name: "Jennifer Lopez",
      role: "Guider",
      experience: "5 years",
      rating: 4.9,
    },
    {
      id: 8,
      name: "Angelina Jolie",
      role: "Parachute Jumper",
      experience: "7 years",
      rating: 4.8,
    },
    {
      id: 9,
      name: "Scarlett Johansson",
      role: "Sky Diver",
      experience: "3 years",
      rating: 4.9,
    },
    {
      id: 10,
      name: "Megan Fox",
      role: "Scuba Diver",
      experience: "4 years",
      rating: 4.7,
    },
    {
      id: 11,
      name: "Anne Hathaway",
      role: "Parachute Jumper",
      experience: "6 years",
      rating: 4.6,
    },
    {
      id: 12,
      name: "Natalie Portman",
      role: "Sky Diver",
      experience: "2 years",
      rating: 4.9,
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="py-10" id="staff-profiles">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8" data-aos="fade-up">
          Our Talented Team
        </h2>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {staffData.map((staff) => (
            <SwiperSlide key={staff.id}>
              <div>
                <div className="bg-white p-4 rounded-md shadow-md transform hover:scale-105 duration-300">
                  <div className="text-gray-700 mb-4">
                    <FaUser className="text-4xl inline-block" />
                  </div>
                  <h3 className="text-xl font-semibold">{staff.name}</h3>
                  <p className="text-gray-600 mb-2">
                    <FaBriefcase className="inline-block mr-2" />
                    {staff.role}
                  </p>
                  <p className="text-gray-600 mb-4">
                    <FaStar className="inline-block text-yellow-400 mr-1" />
                    {staff.rating}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Experience:</span>{" "}
                    {staff.experience}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default StaffProfiles;
