import React from "react";
import Container from "../shared/Container";

const Ad = () => {
  return (
    <div className="w-full p-5 flex items-center justify-center">
      <Container>
        <div className="flex flex-row py-8 gap-20">
          <div
            data-aos="fade-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <img
              className="w-[580px] h-[381px]"
              src="https://images.unsplash.com/photo-1564290713859-31aa297381fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8"
              alt="728x90"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <div>
              <h1 className="text-4xl font-bold text-left text-[#111430] w-[409px] h-[82px] my-3">
                Let us <span className="text-[#57baea]">guide</span> you
                Professionally.
              </h1>
              <p className="text-left text-[#666666] w-[401px] h-[98px]">
                Travel with us and get the best experience of your life. We
                provide the best services in the town. We have more than 500
                happy customers and 16+ services. We are here to guide you
                professionally.
              </p>
            </div>
            <div className="flex mt-10">
              <p className="text-4xl font-bold text-left text-[#57baea] w-[110px] h-[60px] mt-5 mr-10">
                500+
              </p>
              <p className="text-4xl font-bold text-left text-[#57baea] w-[70px] h-[60px] mt-5">
                16+
              </p>
            </div>
            <div className="flex">
              <span className="text-left text-[#666666] w-[140px] h-[24px]">
                Happy Customer
              </span>
              <span className="text-left text-[#666666] w-[140px] h-[24px] ml-3">
                Total Services
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Ad;
