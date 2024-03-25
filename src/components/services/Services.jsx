import React from "react";
import ServiceCard from "./card/ServiceCard";

const Services = () => {
  return (
    <section className="flex items-center justify-center bg-[#FFFFFF] py-16 mt-10">
      <div>
        <h1 className="text-center text-4xl font-bold text-[#111430]">
          Explore The <span className="text-[#57baea]">Places</span>
        </h1>
        <div
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
        >
          <ServiceCard />
        </div>
      </div>
    </section>
  );
};

export default Services;
