import React, { useState } from "react";
import toast from "react-hot-toast";
import { addService } from "../../api/services";

const AddService = () => {
  const [newService, setNewService] = useState({
    img: "",
    name: "",
    description: "",
    price: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewService({
      ...newService,
      [name]: value,
    });
  };

  const handleAddService = async () => {
    try {
      const response = await addService(newService);
      if (response) {
        toast.success("Service added successfully");
        setNewService({
          img: "",
          name: "",
          description: "",
          price: 0,
        });
      } else {
        toast.error("Failed to add service");
        console.error("Failed to add service");
      }
    } catch (error) {
      toast.error("Error adding service");
      console.error("Error adding service:", error);
    }
  };

  return (
    <>
      <h1 className="text-2xl font-medium text-[#0C0C0C] bg-white p-5">
        Add Service Here
      </h1>
      <div className="p-5">
        <div className="p-5 bg-white rounded-lg shadow-xl">
          <div className="mb-4">
            <h1 className="text-xl font-medium text-[#0C0C0C] py-2">Image</h1>
            <input
              type="text"
              name="img"
              placeholder="Enter image URL"
              value={newService.img}
              onChange={handleInputChange}
              className="border border-[#67c7f6c2] rounded-md px-2 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <h1 className="text-xl font-medium text-[#0C0C0C] py-2">Name</h1>
            <input
              type="text"
              name="name"
              placeholder="Enter service name"
              value={newService.name}
              onChange={handleInputChange}
              className="border border-[#67c7f6c2] rounded-md px-2 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <h1 className="text-xl font-medium text-[#0C0C0C] py-2">
              Description
            </h1>
            <textarea
              name="description"
              placeholder="Enter service details here"
              value={newService.description}
              onChange={handleInputChange}
              className="border border-[#67c7f6c2] rounded-md px-2 py-2 w-full h-32"
            />
          </div>
          <div className="mb-4">
            <h1 className="text-xl font-medium text-[#0C0C0C] py-2">Price</h1>
            <input
              type="number"
              name="price"
              value={newService.price}
              onChange={handleInputChange}
              className="border border-[#67c7f6c2] rounded-md px-2 py-1 w-full"
            />
          </div>
          <button
            onClick={handleAddService}
            className="bg-[#57baea] text-white px-4 py-2 rounded-md mt-5"
          >
            Add Service
          </button>
        </div>
      </div>
    </>
  );
};

export default AddService;
