import React from "react";
import { IoMdRibbon } from "react-icons/io";

const promotions = [
  {
    id: 1,
    title: "50% Off Sea area",
    description:
      "Get a 50% discount on all sea also guide services this month!",
  },
  {
    id: 2,
    title: "Summer Tour Special",
    description:
      "Enjoy our exclusive summer tour package at a discounted price.",
  },
  {
    id: 3,
    title: "New Customer Discount",
    description: "First-time customers receive a 10% discount on any service.",
  },
];

const Promotions = () => {
  return (
    <div className="bg-[#57baea] text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8">
          Promotions and Discounts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              data-aos="fade-up"
              data-aos-duration="800"
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
            >
              <IoMdRibbon className="text-6xl text-[#57baea] mx-auto" />
              <h3 className="text-2xl font-semibold mb-4 text-[#5a5a5a]">
                {promo.title}
              </h3>
              <p className="text-[#5a5a5a]">{promo.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Promotions;
