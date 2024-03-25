import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getService } from "../../api/services";

const ServiceDetails = () => {
  const { id } = useParams();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const { name, price, description, img } = services;
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    console.log("ID:", id);
    getService(id)
      .then((data) => {
        console.log("Service Data:", data);
        setServices(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);
  return (
    <div>
      <div className="bg-secondary font-poppins h-screen px-5 md:px-10 mt-">
        <div className=" w-full md:w-3/6 mx-auto flex justify-center items-center h-full md:h-[80vh]  py-10">
          <div className="bg-white  space-y-4 py-8 px-9 rounded-lg flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold text-accent">{name}</h2>
            <img className="w-96" src={img} alt="" />
            <p className="text-center">{description}</p>
            <button
              onClick={() => navigate(`/`)}
              className="px-5 font-semibold rounded py-2 text-[#57baea]"
            >
              6 Hotels | 3 Guide | 2 Transport | 1 Package
            </button>
            <p className="text-primary text-xl font-bold">Tk- {price} ৳</p>
            <button
              onClick={() => navigate(`/dashboard/payment/${id}`)}
              className="px-5 font-semibold rounded py-2  bg-[#57baea] text-white"
            >
              Booking Confrim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
