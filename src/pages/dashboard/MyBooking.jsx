import React from "react";
import useBooked from "../../hooks/useBooked";

const MyBooking = () => {
  const [booked, refetch] = useBooked();
  return (
    <div>
      <h1 className="text-2xl font-medium text-[#0C0C0C] bg-white p-5">
        My Bookings
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-3/4">
        {booked.map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-lg shadow-md p-4 transition transform hover:scale-105 duration-300 ml-4 mt-4"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="mt-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {item.name}
              </h2>
              <p className="text-sm text-gray-600">{item.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-xl font-light text-[#4fb3e6]">
                  <span className="text-lg font-semibold text-[#57baea]">
                    PAID -
                  </span>{" "}
                  Tk- {item.price} ৳
                </p>
                <button className="px-4 py-2 bg-[#51c97b] text-white text-sm font-medium rounded-md">
                  Recieved
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBooking;
