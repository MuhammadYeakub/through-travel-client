import React from "react";

function WhyChooseUs() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-center text-4xl font-bold text-[#111430]">
            Why Choose <span className="text-[#57baea]">Us</span>
          </h1>
          <p className="animated-text text-center text-lg">
            Discover what sets us apart from the rest.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap -mx-4">
          {/* Unique Expertise */}
          <div className="w-full md:w-1/2 px-4 rounded-md hover:bg-sky-50 hover:shadow-md">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Unique Expertise
              </h3>
              <p className="mt-4 text-gray-600">
                We have in-depth knowledge of each destination, ensuring you get
                a unique and authentic travel experience.
              </p>
            </div>
          </div>

          {/* Exceptional Customer Service */}
          <div className="w-full md:w-1/2 px-4 rounded-md hover:bg-sky-50 hover:shadow-md">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Exceptional Customer Service
              </h3>
              <p className="mt-4 text-gray-600">
                Our top priority is your satisfaction. Our dedicated team is
                available 24/7 to assist you during your journey.
              </p>
            </div>
          </div>

          {/* Awards and Affiliations */}
          <div className="w-full md:w-1/2 px-4 rounded-md hover:bg-sky-50 hover:shadow-md">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Awards and Affiliations
              </h3>
              <p className="mt-4 text-gray-600">
                We are proud recipients of several industry awards and
                affiliated with leading travel organizations.
              </p>
            </div>
          </div>

          {/* More Points */}
          <div className="w-full md:w-1/2 px-4 rounded-md hover:bg-sky-50 hover:shadow-md">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Tailored Travel Experiences
              </h3>
              <p className="mt-4 text-gray-600">
                We craft personalized travel experiences that cater to your
                specific interests and preferences.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 px-4 rounded-md hover:bg-sky-50 hover:shadow-md">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Global Network
              </h3>
              <p className="mt-4 text-gray-600">
                With a vast global network, we can provide support and
                assistance no matter where your journey takes you.
              </p>
            </div>
          </div>

          {/* More Points */}
          <div className="w-full md:w-1/2 px-4 rounded-md hover:bg-sky-50 hover:shadow-md">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Towards Travel Heaven
              </h3>
              <p className="mt-4 text-gray-600">
                We craft personalized travel experiences that cater to your
                specific interests and preferences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
