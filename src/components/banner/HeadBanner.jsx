import React from "react";
import toast from "react-hot-toast";
import Container from "../shared/Container";

const HeadBanner = () => {
  const appoinment = () => {
    toast.success("Explore Services & Booked right now!");
  };

  return (
    <Container>
      <section className="items-center justify-center flex">
        <div className="flex flex-row gap-5">
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <div className="flex flex-col gap-4 p-24">
              <h1 className="text-5xl font-bold text-left text-[#111430]">
                INTRODUCING
              </h1>
              <h1 className="text-5xl font-bold text-left text-[#111430]">
                THROUGH <span className="text-[#57baea]">TRAVEL</span>
              </h1>
              <p className="text-left text-[#666666] w-[350px] h-[83px]">
                Ranging from multiple methodologies of rejuvenating travels that
                cater all human types. Hotels, Foods, Guides are also provided.
              </p>
              <button
                onClick={appoinment}
                className="bg-[#57baea] hover:bg-[#66c6f6] text-white px-10 py-2 rounded-md w-[229px] h-[50]"
              >
                Select Destinations
              </button>
            </div>
          </div>
          <div
            data-aos="fade-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <img
              src="https://images.unsplash.com/photo-1538681105587-85640961bf8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8"
              alt="banner"
              className="w-[484px] h-[478px] rounded-xl"
            />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default HeadBanner;
