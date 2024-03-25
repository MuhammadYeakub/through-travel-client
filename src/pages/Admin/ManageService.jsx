import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Modal from "react-modal";
import { deleteService, editService, getAllService } from "../../api/services";

Modal.setAppElement("#root");

const ManageService = () => {
  const [services, setServices] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editServiceData, setEditServiceData] = useState({});
  const [updatedService, setUpdatedService] = useState({
    name: "",
    price: "",
  });

  useEffect(() => {
    async function fetchData() {
      const data = await getAllService();
      setServices(data);
    }
    fetchData();
  }, [services]);

  const handleEdit = (service) => {
    setEditServiceData(service);
    // Exclude _id when setting updatedService
    const { _id, ...updatedServiceData } = service;
    setUpdatedService(updatedServiceData);
    setModalIsOpen(true);
  };

  const handleSave = async () => {
    if (editServiceData._id && updatedService) {
      await editService(editServiceData._id, updatedService);
      toast.success("Service updated successfully");
      setModalIsOpen(false);
      // Clear the updatedService
      setUpdatedService({ name: "", price: "" });
    }
  };

  const handleDelete = async (serviceId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this service?"
    );
    if (confirmDelete) {
      await deleteService(serviceId);
      toast.success("Service deleted successfully");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-medium text-[#0C0C0C] bg-white p-5">
        Manage Services
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
        {services.map((service) => (
          <li
            key={service._id}
            className="bg-white border rounded-lg shadow-md p-4"
          >
            <h1 className="text-xl font-medium text-[#0C0C0C] py-2">
              {service.name}
            </h1>
            <p className="text-lg font-medium text-[#0C0C0C] py-2">
              {service.price}
            </p>
            <div className="flex mt-5">
              <button
                onClick={() => handleEdit(service)}
                className="bg-[#57baea] text-white px-5 py-2 mr-2 rounded-md"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(service._id)}
                className="bg-[#57baea] text-white px-5 py-2 rounded-md"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            width: "50%",
            height: "50%",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <h2 className="text-2xl text-center font-medium text-[#0C0C0C] bg-white p-5">
          Edit Service
        </h2>
        <label className="text-xl font-medium text-[#0C0C0C] py-2">Name:</label>
        <input
          type="text"
          value={updatedService.name}
          onChange={(e) =>
            setUpdatedService({ ...updatedService, name: e.target.value })
          }
          className="border-2 border-[#70caf8] p-2 rounded-md"
        />
        <label className="text-xl font-medium text-[#0C0C0C] py-2">
          Price:
        </label>
        <input
          type="text"
          value={updatedService.price}
          onChange={(e) =>
            setUpdatedService({ ...updatedService, price: e.target.value })
          }
          className="border-2 border-[#70caf8] p-2 rounded-md"
        />
        <button
          onClick={handleSave}
          className="bg-[#57baea] text-white px-5 py-2 my-5 rounded-md "
        >
          Save
        </button>
      </Modal>
    </div>
  );
};

export default ManageService;
