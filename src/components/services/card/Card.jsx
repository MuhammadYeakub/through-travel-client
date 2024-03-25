import React from "react";
import { Link } from "react-router-dom";
const Card = ({ service }) => {
  return (
    <div className="card w-[370px] h-[380px] rounded-xl hover:shadow-md">
      <figure className=" mx-36 py-8">
        <img src={service.img} alt="" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-semibold text-[#111430]">
          {service.name}
        </h2>
        <h2 className="card-title text-[#57baea] font-bold">
          Tk- {service.price} ৳
        </h2>
        <p className="px-10 py-3 text-[#666666]">{service.description}</p>
      </div>
      <div className="card-footer text-center text-white mx-auto py-2 my-4 bg-[#57baea] hover:bg-sky-200 hover:text-sky-500 rounded-md w-40">
        <Link to={`/service/${service._id}`}>View Details</Link>
      </div>
    </div>
  );
};

export default Card;
