import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Footer from "../../components/shared/Footer/Footer";
import Navbar from "../../components/shared/navbar/Navbar";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
        <section className="container mx-auto p-8">
          <h1
            className="text-4xl font-bold text-center text-gray-800 mb-5"
            data-aos="fade-up"
          >
            Who We Are
          </h1>
          <p
            className="mb-8 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Welcome to Through travels, where beauty and well-being converge...
          </p>

          <h2
            className="text-3xl font-bold text-gray-800 mb-3"
            data-aos="fade-left"
          >
            Our Philosophy
          </h2>
          <p className="mb-8 leading-relaxed" data-aos="fade-right">
            We believe in a holistic approach to travel, blending the
            artistry...
          </p>

          {/* ...other sections with AOS data attributes... */}

          <div className="text-center" data-aos="zoom-in-up">
            <a
              href="/"
              className="bg-[#57baea] text-white  py-2 px-4 rounded-full hover:bg-[#6bccfc] transition duration-300"
            >
              Book an Appointment
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
